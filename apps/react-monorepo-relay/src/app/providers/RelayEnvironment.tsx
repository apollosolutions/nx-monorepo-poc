import React, { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { initRelayEnvironment } from './environment';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const environment = useMemo(() => {
    return initRelayEnvironment();
  }, []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>{children}</div>
    </RelayEnvironmentProvider>
  );
};
