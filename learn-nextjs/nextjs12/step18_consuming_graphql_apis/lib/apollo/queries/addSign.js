"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const ADD_SIGN = (0, client_1.gql) `
mutation InsertNewSign(
    $nickname: String!,
    $content: String!,
    $country: String
    ) {
        insert_sign(objects: {
            nickname: $nickname,
            country: $country,
            content: $content
        }) {
            returning {
                uuid
            }
        }
    }
`;
exports.default = ADD_SIGN;
