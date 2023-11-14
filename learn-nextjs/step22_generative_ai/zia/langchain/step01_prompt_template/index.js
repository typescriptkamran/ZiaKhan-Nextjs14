"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prompts_1 = require("langchain/prompts");
const template = "What is a good name for a company that makes {product}?";
const prompt = new prompts_1.PromptTemplate({
    template: template,
    inputVariables: ["product"],
});
const res = await prompt.format({ product: "colorful socks" });
console.log(res);
