'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import { generatePersistedQueryIdsFromManifest } from '@apollo/persisted-query-lists';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { setVerbosity } from 'ts-invariant';

setVerbosity('debug');
loadDevMessages();
loadErrorMessages();

const persistedQueryLink = createPersistedQueryLink(
  generatePersistedQueryIdsFromManifest({
    loadManifest: () => import('./../../persisted-query-manifest.json'),
  })
);

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'http://127.0.0.1:4000',
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            persistedQueryLink.concat(httpLink),
          ])
        : persistedQueryLink.concat(httpLink),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
