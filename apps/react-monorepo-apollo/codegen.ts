import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    './apps/react-monorepo-apollo/src/app/components/schema/schema.graphql',
  documents: ['apps/react-monorepo-apollo/src/app/components/**/*.graphql'],
  generates: {
    'apps/react-monorepo-apollo/components/types.generated.ts': {
      plugins: ['typescript'],
    },
    'apps/react-monorepo-apollo/components/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
};

export default config;
