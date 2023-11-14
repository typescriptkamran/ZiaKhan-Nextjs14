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
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://api.quotable.io/random?tags=technology");
    return res.json();
});
function Home() {
    return __awaiter(this, void 0, void 0, function* () {
        const quote = yield getData();
        console.log("quote: ", quote);
        return <div>{quote.content}</div>;
    });
}
exports.default = Home;
