"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swr_1 = __importDefault(require("swr"));
const url = "https://api.quotable.io/random?tags=technology";
const fetcher = (url) => fetch(url).then((res) => res.json());
function Page() {
    const { data, error, isLoading } = (0, swr_1.default)(url, fetcher);
    if (error)
        return <div>failed to load</div>;
    if (isLoading)
        return <div>loading...</div>;
    return <div>{data.content}</div>;
}
exports.default = Page;
