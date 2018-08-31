/**
 * @flow
 * @relayHash 99dd672edee79a85283cf46041667d07
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoriesContainerQueryVariables = {||};
export type CategoriesContainerQueryResponse = {|
  +categories: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +image: ?{|
          +name: string,
          +sourceStandard: string,
          +altText: string,
        |},
      |}
    |}>
  |}
|};
export type CategoriesContainerQuery = {|
  variables: CategoriesContainerQueryVariables,
  response: CategoriesContainerQueryResponse,
|};
*/


/*
query CategoriesContainerQuery {
  categories {
    edges {
      node {
        id
        name
        image {
          name
          sourceStandard
          altText
          id
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sourceStandard",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "altText",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CategoriesContainerQuery",
  "id": null,
  "text": "query CategoriesContainerQuery {\n  categories {\n    edges {\n      node {\n        id\n        name\n        image {\n          name\n          sourceStandard\n          altText\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CategoriesContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CategoryNode",
                "plural": false,
                "selections": [
                  v0,
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ImageNode",
                    "plural": false,
                    "selections": [
                      v1,
                      v2,
                      v3
                    ]
                  }
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
    "name": "CategoriesContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": null,
        "args": null,
        "concreteType": "CategoryNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CategoryNode",
                "plural": false,
                "selections": [
                  v0,
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ImageNode",
                    "plural": false,
                    "selections": [
                      v1,
                      v2,
                      v3,
                      v0
                    ]
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
(node/*: any*/).hash = '8f43bc7e7fc6d03c4a61f7b0e4b42fca';
module.exports = node;
