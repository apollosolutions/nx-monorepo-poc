import React, { FC, PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <div>{children}</div>
    </ApolloProvider>
  );
};
