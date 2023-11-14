"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const GET_ROCKETS = (0, client_1.gql) `
query Rockets {
    rockets(limit: 10) {
        id,
        name,
        country,
        description,
        active,
        company
    }
  }`;
exports.default = GET_ROCKETS;
