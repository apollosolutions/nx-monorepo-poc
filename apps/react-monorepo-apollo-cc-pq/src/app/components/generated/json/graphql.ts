/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Location = {
  __typename?: 'Location';
  /** A short description about the location */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locationType: LocationType;
  /** The name of the location */
  name: Scalars['String']['output'];
  /** The location's main photo as a URL */
  photo: Scalars['String']['output'];
};

export type LocationReviewInput = {
  /** Written text */
  comment: Scalars['String']['input'];
  /** Location Id */
  locationId: Scalars['String']['input'];
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating: Scalars['Int']['input'];
};

export enum LocationType {
  Apartment = 'APARTMENT',
  Campsite = 'CAMPSITE',
  House = 'HOUSE',
  Room = 'ROOM',
  Spaceship = 'SPACESHIP'
}

export type Member = {
  __typename?: 'Member';
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  memberId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  submitReview?: Maybe<SubmitReviewResponse>;
};


export type MutationSubmitReviewArgs = {
  locationReview?: InputMaybe<LocationReviewInput>;
};

export type Query = {
  __typename?: 'Query';
  latestReviews?: Maybe<Array<Review>>;
  /** The details of a specific location */
  location?: Maybe<Location>;
  /** The full list of locations presented by the Interplanetary Space Tourism department */
  locations: Array<Location>;
  /** The three latest reviews submitted for FlyBy's locations */
  member?: Maybe<Member>;
  reallySlowOperation?: Maybe<ReallySlowOperation>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};

export type ReallySlowOperation = {
  __typename?: 'ReallySlowOperation';
  id: Scalars['ID']['output'];
};

export type Review = {
  __typename?: 'Review';
  /** Written text */
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating?: Maybe<Scalars['Int']['output']>;
};

export type SubmitReviewResponse = {
  __typename?: 'SubmitReviewResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Newly created review */
  locationReview?: Maybe<Review>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  reviewCreated?: Maybe<Review>;
};

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: string, description: string, name: string, photo: string }> } & ({ __typename?: 'Query', reallySlowOperation?: { __typename?: 'ReallySlowOperation', id: string } | null } | { __typename?: 'Query', reallySlowOperation?: never });

export type GetLocationsTestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsTestQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: string }> };

export type GetMemberQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemberQuery = { __typename?: 'Query', member?: { __typename?: 'Member', dateOfBirth?: string | null, firstName?: string | null, lastName?: string | null, memberId: string } | null };

export type GetReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewsQuery = { __typename?: 'Query', latestReviews?: Array<{ __typename?: 'Review', id: string, rating?: number | null, comment?: string | null }> | null };

export type GetRatingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRatingQuery = { __typename?: 'Query', latestReviews?: Array<{ __typename?: 'Review', rating?: number | null }> | null };


export const GetLocationsDocument = {"__meta__":{"hash":"d17ebb8cdbe7182759116f25415b01c9b50b270a"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"InlineFragment","directives":[{"kind":"Directive","name":{"kind":"Name","value":"defer"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reallySlowOperation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetLocationsTestDocument = {"__meta__":{"hash":"b3dc32d3b1950b76d05cd29211d920a0c98037d7"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationsTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetLocationsTestQuery, GetLocationsTestQueryVariables>;
export const GetMemberDocument = {"__meta__":{"hash":"c0e83748e308bca8913d99ed997967bc4319bc5c"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMember"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}}]}}]}}]} as unknown as DocumentNode<GetMemberQuery, GetMemberQueryVariables>;
export const GetReviewsDocument = {"__meta__":{"hash":"fb3c6a01508683aaa6ec7c213f8e47f2998ee8c4"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<GetReviewsQuery, GetReviewsQueryVariables>;
export const GetRatingDocument = {"__meta__":{"hash":"e9c1f59a308a7bc52f032b66221540d4151f1e99"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]} as unknown as DocumentNode<GetRatingQuery, GetRatingQueryVariables>;