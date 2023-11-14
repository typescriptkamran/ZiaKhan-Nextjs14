"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
function Home() {
    return (<div>
          Hello World from Panaverse DAO!
          <br />
          <link_1.default href="/name">Go to name page</link_1.default>
    </div>);
}
exports.default = Home;
