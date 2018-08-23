/**
 * @flow
 * @relayHash 4a8366d472a83652cfa4f84e6f8b4753
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PreviewContainerQueryVariables = {|
  category: string
|};
export type PreviewContainerQueryResponse = {|
  +images: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +category: ?{|
          +name: string
        |},
        +sourceStandard: string,
        +description: string,
        +altText: string,
      |}
    |}>
  |}
|};
export type PreviewContainerQuery = {|
  variables: PreviewContainerQueryVariables,
  response: PreviewContainerQueryResponse,
|};
*/


/*
query PreviewContainerQuery(
  $category: String!
) {
  images(category_Name: $category) {
    edges {
      node {
        id
        name
        category {
          name
          id
        }
        sourceStandard
        description
        altText
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "category_Name",
    "variableName": "category",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sourceStandard",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "altText",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PreviewContainerQuery",
  "id": null,
  "text": "query PreviewContainerQuery(\n  $category: String!\n) {\n  images(category_Name: $category) {\n    edges {\n      node {\n        id\n        name\n        category {\n          name\n          id\n        }\n        sourceStandard\n        description\n        altText\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PreviewContainerQuery",
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "category",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CategoryNode",
                    "plural": false,
                    "selections": [
                      v3
                    ]
                  },
                  v4,
                  v5,
                  v6
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
    "name": "PreviewContainerQuery",
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "category",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CategoryNode",
                    "plural": false,
                    "selections": [
                      v3,
                      v2
                    ]
                  },
                  v4,
                  v5,
                  v6
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
(node/*: any*/).hash = '87221298122a443f465226a13c65d3f5';
module.exports = node;