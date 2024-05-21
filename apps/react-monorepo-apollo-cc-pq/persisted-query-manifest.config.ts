import type { PersistedQueryManifestConfig } from '@apollo/generate-persisted-query-manifest';
import { fromGraphQLCodegenPersistedDocuments } from '@apollo/generate-persisted-query-manifest';

const config: PersistedQueryManifestConfig = {
  documents: fromGraphQLCodegenPersistedDocuments(
    './src/app/components/generated/json/persisted-documents.json'
  ),
};

export default config;
