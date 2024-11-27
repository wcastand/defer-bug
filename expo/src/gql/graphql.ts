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

export type Balance = {
  __typename?: 'Balance';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  balance: Balance;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type BalanceFragmentFragment = { __typename?: 'User' } & ({ __typename?: 'User', balance: { __typename?: 'Balance', amount: number, currency: string } } | { __typename?: 'User', balance?: never }) & { ' $fragmentName'?: 'BalanceFragmentFragment' };

export type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQueryQuery = { __typename?: 'Query', user?: (
    { __typename?: 'User', id: string, name: string }
    & { ' $fragmentRefs'?: { 'BalanceFragmentFragment': BalanceFragmentFragment } }
  ) | null };

export const BalanceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"defer"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]} as unknown as DocumentNode<BalanceFragmentFragment, unknown>;
export const HomeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BalanceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BalanceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"defer"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]} as unknown as DocumentNode<HomeQueryQuery, HomeQueryQueryVariables>;