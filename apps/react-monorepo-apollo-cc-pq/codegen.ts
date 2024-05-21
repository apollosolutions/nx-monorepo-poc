import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    './apps/react-monorepo-apollo-cc/src/app/components/schema/schema.graphql',
  documents: ['apps/react-monorepo-apollo-cc/src/app/components/**/*.graphql'],
  generates: {
    // TODO: Still generate the ts documents file as well as the json
    'apps/react-monorepo-apollo-cc/src/app/components/generated/types.generated.ts':
      {
        plugins: ['typescript'],
      },
    'apps/react-monorepo-apollo-cc/src/app/components/generated/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
    'apps/react-monorepo-apollo-cc/src/app/components/generated/json/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true,
      },
    },
  },
};

export default config;
