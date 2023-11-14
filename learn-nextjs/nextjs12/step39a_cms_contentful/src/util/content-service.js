"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const contentful_1 = require("contentful");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class ContentService {
    constructor() {
        this.client = (0, contentful_1.createClient)({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        });
    }
    static get instance() {
        return new ContentService();
    }
    getEntriesByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.getEntries({
                content_type: type,
            })).items;
        });
    }
    getArticleBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.getEntries({
                content_type: "article",
                "fields.slug": slug,
            })).items[0];
        });
    }
}
exports.default = ContentService;
