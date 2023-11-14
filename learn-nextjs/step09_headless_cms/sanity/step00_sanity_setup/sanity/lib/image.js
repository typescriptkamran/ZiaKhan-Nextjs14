"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlForImage = void 0;
const image_url_1 = __importDefault(require("@sanity/image-url"));
const env_1 = require("../env");
const imageBuilder = (0, image_url_1.default)({
    projectId: env_1.projectId || '',
    dataset: env_1.dataset || '',
});
const urlForImage = (source) => {
    return imageBuilder === null || imageBuilder === void 0 ? void 0 : imageBuilder.image(source).auto('format').fit('max');
};
exports.urlForImage = urlForImage;
