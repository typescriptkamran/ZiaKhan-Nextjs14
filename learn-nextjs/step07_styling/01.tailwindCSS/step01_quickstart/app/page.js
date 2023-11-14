"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const panaverse_png_1 = __importDefault(require("../public/panaverse.png"));
//https://beta.nextjs.org/docs/optimizing/images
function Page() {
    return (<div className="flex">
      <div>
        <image_1.default src={panaverse_png_1.default} width={80} height={80} alt='music'/>
      </div>
    <div>
      <h1>Welcome to Panaverse</h1>
      <h2>A Community of Web 3 and Metaverse Developers</h2>
      <button>Learn More</button>
    </div>
    </div>);
}
exports.default = Page;
