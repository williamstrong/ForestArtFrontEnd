/**
 * @flow
 * @relayHash 7408a7a1be9782282d98129ea204ea5f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PieceContainerQueryVariables = {|
  category: string,
  piece: string,
|};
export type PieceContainerQueryResponse = {|
  +images: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +name: string,
        +sourceStandard: string,
        +description: string,
      |}
    |}>
  |}
|};
export type PieceContainerQuery = {|
  variables: PieceContainerQueryVariables,
  response: PieceContainerQueryResponse,
|};
*/


/*
query PieceContainerQuery(
  $category: String!
  $piece: String!
) {
  images(category_Name: $category, name: $piece) {
    edges {
      node {
        name
        sourceStandard
        description
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "category",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "piece",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "category_Name",
    "variableName": "category",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "piece",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sourceStandard",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PieceContainerQuery",
  "id": null,
  "text": "query PieceContainerQuery(\n  $category: String!\n  $piece: String!\n) {\n  images(category_Name: $category, name: $piece) {\n    edges {\n      node {\n        name\n        sourceStandard\n        description\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PieceContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "images",
        "storageKey": null,
        "args": v1,
        "concreteType": "ImageNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ImageNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ImageNode",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v4
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PieceContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "images",
        "storageKey": null,
        "args": v1,
        "concreteType": "ImageNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ImageNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "ImageNode",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v4,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ea48e09f56515e5c992fb283952f3729';
module.exports = node;
