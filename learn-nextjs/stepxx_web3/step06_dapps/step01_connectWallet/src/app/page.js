"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = require("next/font/google");
const react_1 = __importDefault(require("react"));
const connectButton_1 = __importDefault(require("@/components/connectButton"));
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    return (<main>
   <connectButton_1.default />
    </main>);
}
exports.default = Home;
