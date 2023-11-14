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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const server_1 = require("next/server");
const openai_config_1 = __importDefault(require("../../../../openai-config"));
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const req = yield request.json();
            const response = yield openai_config_1.default.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `I want you to act as a Nutrition Facts Generator. I will provide you with a recipe and your role is to generate nutrition facts for that recipe. You should use your knowledge of nutrition science, nutrition facts labels and other relevant information to generate nutritional information for the recipe. Add each nutrition fact to a new line. I want you to only reply with the nutrition fact. Do not provide any other information. My first request is: ${req.recipe}`,
                    },
                ],
            });
            return server_1.NextResponse.json({
                gpt: response.choices[0].message.content,
                status: "success",
            });
        }
        catch (error) {
            return server_1.NextResponse.json({ status: "failure", error: error });
        }
    });
}
exports.POST = POST;
