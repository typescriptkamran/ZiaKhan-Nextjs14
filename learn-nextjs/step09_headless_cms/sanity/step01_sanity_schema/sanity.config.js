"use strict";
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vision_1 = require("@sanity/vision");
const sanity_1 = require("sanity");
const desk_1 = require("sanity/desk");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
const env_1 = require("./sanity/env");
const schema_1 = require("./sanity/schema");
exports.default = (0, sanity_1.defineConfig)({
    basePath: '/studio',
    projectId: env_1.projectId,
    dataset: env_1.dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema: schema_1.schema,
    plugins: [
        (0, desk_1.deskTool)(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, vision_1.visionTool)({ defaultApiVersion: env_1.apiVersion }),
    ],
});
