"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
const cli_1 = require("sanity/cli");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
exports.default = (0, cli_1.defineCliConfig)({ api: { projectId, dataset } });
