"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const openai_1 = require("langchain/llms/openai");
const prompts_1 = require("langchain/prompts");
const chains_1 = require("langchain/chains");
const model = new openai_1.OpenAI({ temperature: 0.9 });
const template = "What is a good name for a company that makes {product}?";
const prompt = new prompts_1.PromptTemplate({
    template: template,
    inputVariables: ["product"],
});
const chain = new chains_1.LLMChain({ llm: model, prompt: prompt });
const res = await chain.call({ product: "colorful socks" });
console.log(res);
