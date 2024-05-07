/**
 * @generated SignedSource<<1173334e00cef1f244fc8d2cbdf0be70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MemberQuery$variables = Record<PropertyKey, never>;
export type MemberQuery$data = {
  readonly member: {
    readonly firstName: string | null | undefined;
  } | null | undefined;
};
export type MemberQuery = {
  response: MemberQuery$data;
  variables: MemberQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Member",
    "kind": "LinkedField",
    "name": "member",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MemberQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MemberQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2df83a16632d3d6023ccb687baf87ea4",
    "id": null,
    "metadata": {},
    "name": "MemberQuery",
    "operationKind": "query",
    "text": "query MemberQuery {\n  member {\n    firstName\n  }\n}\n"
  }
};
})();

(node as any).hash = "475d5e4311ed1949466c40de327938e5";

export default node;
