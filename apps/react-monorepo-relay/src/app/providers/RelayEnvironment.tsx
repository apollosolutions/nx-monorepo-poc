import React, { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createEnvironment } from './environment';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const environment = useMemo(() => {
    return createEnvironment();
  }, []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>{children}</div>
    </RelayEnvironmentProvider>
  );
};
