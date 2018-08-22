/**
 * @flow
 * @relayHash 87de989280d0304fdb5ee7dfaa35ce40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PreviewContainerQueryVariables = {||};
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
query PreviewContainerQuery {
  images(category: "$category") {
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
    "kind": "Literal",
    "name": "category",
    "value": "$category",
    "type": "ID"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
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
},
v5 = {
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
  "text": "query PreviewContainerQuery {\n  images(category: \"$category\") {\n    edges {\n      node {\n        id\n        name\n        category {\n          name\n          id\n        }\n        sourceStandard\n        description\n        altText\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PreviewContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "images",
        "storageKey": "images(category:\"$category\")",
        "args": v0,
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
                  v1,
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "category",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CategoryNode",
                    "plural": false,
                    "selections": [
                      v2
                    ]
                  },
                  v3,
                  v4,
                  v5
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
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "images",
        "storageKey": "images(category:\"$category\")",
        "args": v0,
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
                  v1,
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "category",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CategoryNode",
                    "plural": false,
                    "selections": [
                      v2,
                      v1
                    ]
                  },
                  v3,
                  v4,
                  v5
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
(node/*: any*/).hash = 'cd091183728a4434edfa87420b17f317';
module.exports = node;
