"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    return (<div className="card flex flex-col justify-between items-start">
    <image_1.default src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt="" width={50} height={50}/>
    <p>
      I just finished my trial period and was so amazed with the support and good results that I purchased the Pro version for my business.
    </p>
    <span>John Doe</span>
  </div>);
}
exports.default = Home;
