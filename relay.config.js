// relay.config.js
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './apps/react-monorepo-relay/src/',
  language: 'typescript', // "javascript" | "typescript" | "flow"
  schema: './apps/react-monorepo-relay/src/app/schema/schema.graphql',
  excludes: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    '**/__.next__/**',
  ],
};
