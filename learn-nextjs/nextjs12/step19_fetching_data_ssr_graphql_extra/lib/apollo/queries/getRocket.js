"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const GET_ROCKET = (0, client_1.gql) `
query Rocket($rocketId: ID!){
    rocket(id: $rocketId) {
      id
      name,
      country, 
      description
      active,
      company,
  
    }
  }`;
exports.default = GET_ROCKET;
