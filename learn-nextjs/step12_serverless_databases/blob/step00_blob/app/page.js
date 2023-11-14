"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const expanding_arrow_1 = __importDefault(require("@/components/expanding-arrow"));
const uploader_1 = __importDefault(require("@/components/uploader"));
const toaster_1 = require("@/components/toaster");
function Home() {
    return (<main className="relative flex min-h-screen flex-col items-center justify-center">
      <toaster_1.Toaster />
      <link_1.default href="https://vercel.com/templates/next.js/blob-starter" className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all">
        <p>Deploy your own to Vercel</p>
        <expanding_arrow_1.default />
      </link_1.default>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Blob on Vercel
      </h1>
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <uploader_1.default />
      </div>
      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <link_1.default href="https://vercel.com/blob" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Vercel Blob
        </link_1.default>{' '}
        demo. Built with{' '}
        <link_1.default href="https://nextjs.org/docs" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Next.js App Router
        </link_1.default>
        .
      </p>
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <link_1.default href="https://vercel.com">
          <image_1.default src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority/>
        </link_1.default>
        <link_1.default href="https://github.com/vercel/examples/tree/main/storage/blob-starter" className="flex items-center space-x-2">
          <image_1.default src="/github.svg" alt="GitHub Logo" width={24} height={24} priority/>
          <p className="font-light">Source</p>
        </link_1.default>
      </div>
    </main>);
}
exports.default = Home;
