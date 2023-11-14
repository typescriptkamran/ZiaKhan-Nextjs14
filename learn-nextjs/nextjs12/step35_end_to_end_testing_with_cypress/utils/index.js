"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractArticleIdFromSlug = exports.composeArticleSlug = exports.slugify = exports.cutTextToLength = void 0;
const cutTextToLength = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};
exports.cutTextToLength = cutTextToLength;
const slugify = (str) => {
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};
exports.slugify = slugify;
const composeArticleSlug = (id, title) => {
    return `${(0, exports.slugify)(title)}-${id}`;
};
exports.composeArticleSlug = composeArticleSlug;
const extractArticleIdFromSlug = (slug) => {
    return slug.split('-').pop();
};
exports.extractArticleIdFromSlug = extractArticleIdFromSlug;
