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
{ /* @ts-expect-error Async Server Component */ }
const image_1 = __importDefault(require("next/image"));
const google_1 = require("next/font/google");
const rich_text_react_renderer_1 = require("@contentful/rich-text-react-renderer");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function getBlogs() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`, { cache: 'no-store' });
        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        return res.json();
    });
}
function Home() {
    return __awaiter(this, void 0, void 0, function* () {
        const blogs = yield getBlogs();
        return (<div>
      {blogs.items.map((item) => (<>
            <div>{item.fields.name}</div>
            <div>{(0, rich_text_react_renderer_1.documentToReactComponents)(item.fields.description)}</div>
            <div>{blogs.includes.Asset.map((a) => (<div>
                {item.fields.picture.sys.id == a.sys.id ?
                        <image_1.default src={"https:" + a.fields.file.url} alt="" width="100" height="100"/> : <div></div>}
              </div>))}
            </div>
            <div>{blogs.includes.Entry.map((entry) => (<div>
                {item.fields.creator.sys.id == entry.sys.id ?
                        <div>Author: {entry.fields.name}</div> : <div></div>}
              </div>))}
            </div>
            <br />
            <br />
            <br />
          </>))}
    </div>);
    });
}
exports.default = Home;
