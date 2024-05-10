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
