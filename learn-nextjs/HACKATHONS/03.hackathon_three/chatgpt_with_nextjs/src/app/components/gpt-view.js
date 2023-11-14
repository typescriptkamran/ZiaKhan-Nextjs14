"use strict";
"use client";
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
const react_1 = __importDefault(require("react"));
const textarea_1 = require("./ui/textarea");
const card_1 = require("./ui/card");
const button_1 = require("./ui/button");
const lucide_react_1 = require("lucide-react");
function GPTView({}) {
    const [prompt, setPrompt] = react_1.default.useState("");
    const [loading, setLoading] = react_1.default.useState(false);
    const [response, setResponse] = react_1.default.useState("");
    const handlePromptRequest = () => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        const res = yield fetch("/api/gpt", {
            method: "POST",
            body: JSON.stringify({ recipe: prompt }),
        });
        const responseJson = yield res.json();
        console.log("responseJson", responseJson);
        setResponse(responseJson.gpt);
        setPrompt("");
        setLoading(false);
    });
    return (<div className="flex justify-center items-center">
      <card_1.Card className="w-full lg:w-[70%]">
        <card_1.CardHeader>
          <textarea_1.Textarea placeholder="Enter your prompt here" value={prompt} onChange={(e) => setPrompt(e.currentTarget.value)}/>
          <div className="w-full flex justify-end py-2">
            {prompt.length > 0 ? (<button_1.Button onClick={handlePromptRequest}>
                <lucide_react_1.Send size={15} className="mr-2"/> Send
              </button_1.Button>) : (<button_1.Button onClick={handlePromptRequest} disabled>
                <lucide_react_1.Send size={15} className="mr-2"/> Send
              </button_1.Button>)}
          </div>
        </card_1.CardHeader>
        <card_1.CardContent className="flex justify-center items-center p-6">
          {loading ? (<lucide_react_1.Loader2 size={28} className="animate-spin"/>) : (<div className="flex justify-start w-full">
              {response.length > 0 && (<div className="py-3 px-6 bg-slate-100 w-full rounded-md shadow-md">
                  <h1 className="text-xl text-center py-3 font-semibold">
                    Nutrition Facts
                  </h1>
                  <div className="text-left">
                    {response.split("\n").map((item, index) => {
                    return (<p key={index} className="py-1 text-[14px]">
                          {item}
                        </p>);
                })}
                  </div>
                </div>)}
            </div>)}
        </card_1.CardContent>
      </card_1.Card>
    </div>);
}
exports.default = GPTView;
