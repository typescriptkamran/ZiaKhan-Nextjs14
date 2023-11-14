"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = require("@next/font/google");
const link_1 = __importDefault(require("next/link"));
//import styles from './page.module.css'
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    return (<div>
          Hello World from Panaverse DAO!
          <br />
          <link_1.default href="/name">Go to name page</link_1.default>
    </div>);
}
exports.default = Home;
