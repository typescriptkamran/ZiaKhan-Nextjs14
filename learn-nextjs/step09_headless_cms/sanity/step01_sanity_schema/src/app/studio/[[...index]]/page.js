"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
const studio_1 = require("next-sanity/studio");
const sanity_config_1 = __importDefault(require("../../../../sanity.config"));
function StudioPage() {
    return <studio_1.NextStudio config={sanity_config_1.default}/>;
}
exports.default = StudioPage;
