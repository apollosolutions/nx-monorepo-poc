'use client';

import './global.css';
import { Providers } from './providers/RelayEnvironment';

// TODO: Find a way to add back in the metadata!! I removed it to ensure that we can have
// React context available for the Providers as adding 'use client' has no effect if this isn't
// a client component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
