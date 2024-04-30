import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import type { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <div>{children}</div>
    </ApolloProvider>
  );
};
