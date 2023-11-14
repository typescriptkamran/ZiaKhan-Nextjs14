"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gpt_view_1 = __importDefault(require("./components/gpt-view"));
function Home() {
    return (<main className='p-6'>
      <div className='w-full text-center py-4'>
        <h1 className='text-[22px] font-semibold'>ChatGPT 3 with Nextjs</h1>
      </div>
      <gpt_view_1.default />
    </main>);
}
exports.default = Home;
