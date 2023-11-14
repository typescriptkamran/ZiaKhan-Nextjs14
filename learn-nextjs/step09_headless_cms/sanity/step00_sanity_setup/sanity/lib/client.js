"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const next_sanity_1 = require("next-sanity");
const env_1 = require("../env");
exports.client = (0, next_sanity_1.createClient)({
    apiVersion: env_1.apiVersion,
    dataset: env_1.dataset,
    projectId: env_1.projectId,
    useCdn: env_1.useCdn,
});
