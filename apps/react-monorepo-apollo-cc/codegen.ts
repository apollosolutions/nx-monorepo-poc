import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    './apps/react-monorepo-apollo-cc/src/app/components/schema/schema.graphql',
  documents: ['apps/react-monorepo-apollo-cc/src/app/components/**/*.graphql'],
  generates: {
    'apps/react-monorepo-apollo-cc/components/types.generated.ts': {
      plugins: ['typescript'],
    },
    'apps/react-monorepo-apollo-cc/components/': {
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
