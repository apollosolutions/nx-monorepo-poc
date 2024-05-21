/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetLocations {\n  locations {\n    id\n    description\n    name\n    photo\n  }\n  ... @defer {\n    reallySlowOperation {\n      id\n    }\n  }\n}\n\nquery GetLocationsTest {\n  locations {\n    id\n  }\n}\n\nquery GetMember {\n  member {\n    dateOfBirth\n    firstName\n    lastName\n    memberId\n  }\n}\n\nquery GetReviews {\n  latestReviews {\n    id\n    rating\n    comment\n  }\n}\n\nquery GetRating {\n  latestReviews {\n    rating\n  }\n}": types.GetLocationsDocument,
    "query GetLocations {\n  locations {\n    id\n    description\n    name\n    photo\n  }\n  ... @defer {\n    reallySlowOperation {\n      id\n    }\n  }\n}": types.GetLocationsDocument,
    "query GetMember {\n  member {\n    dateOfBirth\n    firstName\n    lastName\n    memberId\n  }\n}": types.GetMemberDocument,
    "query GetReviews {\n  latestReviews {\n    id\n    rating\n    comment\n  }\n}": types.GetReviewsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLocations {\n  locations {\n    id\n    description\n    name\n    photo\n  }\n  ... @defer {\n    reallySlowOperation {\n      id\n    }\n  }\n}\n\nquery GetLocationsTest {\n  locations {\n    id\n  }\n}\n\nquery GetMember {\n  member {\n    dateOfBirth\n    firstName\n    lastName\n    memberId\n  }\n}\n\nquery GetReviews {\n  latestReviews {\n    id\n    rating\n    comment\n  }\n}\n\nquery GetRating {\n  latestReviews {\n    rating\n  }\n}"): (typeof documents)["query GetLocations {\n  locations {\n    id\n    description\n    name\n    photo\n  }\n  ... @defer {\n    reallySlowOperation {\n      id\n    }\n  }\n}\n\nquery GetLocationsTest {\n  locations {\n    id\n  }\n}\n\nquery GetMember {\n  member {\n    dateOfBirth\n    firstName\n    lastName\n    memberId\n  }\n}\n\nquery GetReviews {\n  latestReviews {\n    id\n    rating\n    comment\n  }\n}\n\nquery GetRating {\n  latestReviews {\n    rating\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLocations {\n  locations {\n    id\n    description\n    name\n    photo\n  }\n  ... @defer {\n    reallySlowOperation {\n      id\n    }\n  }\n}"): (typeof documents)["query GetLocations {\n  locations {\n    id\n    description\n    name\n    photo\n  }\n  ... @defer {\n    reallySlowOperation {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMember {\n  member {\n    dateOfBirth\n    firstName\n    lastName\n    memberId\n  }\n}"): (typeof documents)["query GetMember {\n  member {\n    dateOfBirth\n    firstName\n    lastName\n    memberId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetReviews {\n  latestReviews {\n    id\n    rating\n    comment\n  }\n}"): (typeof documents)["query GetReviews {\n  latestReviews {\n    id\n    rating\n    comment\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;