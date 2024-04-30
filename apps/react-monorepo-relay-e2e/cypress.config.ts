import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run react-monorepo-relay:start' },
      ciWebServerCommand: 'nx run react-monorepo-relay:serve-static',
    }),
    baseUrl: 'http://localhost:3001',
  },
});
