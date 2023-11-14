"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const GET_LATEST_SIGNS = (0, client_1.gql) `
query GetLatestSigns($limit: Int! = 10, $skip: Int! = 0){
    sign(
        offset: $skip,
        limit: $limit,
        order_by: { created_at: desc }
        ) {
            uuid
            created_at
            content
            nickname
            country
        }
    }
    `;
exports.default = GET_LATEST_SIGNS;
