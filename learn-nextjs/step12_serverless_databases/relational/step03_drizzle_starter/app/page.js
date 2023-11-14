"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = exports.preferredRegion = void 0;
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const table_1 = __importDefault(require("@/components/table"));
const table_placeholder_1 = __importDefault(require("@/components/table-placeholder"));
const expanding_arrow_1 = __importDefault(require("@/components/expanding-arrow"));
// isn't working with Edge yet
// export const runtime = 'edge';
exports.preferredRegion = "home";
exports.dynamic = "force-dynamic";
function Home() {
    return (<main className="relative flex min-h-screen flex-col items-center justify-center">
      <link_1.default href="https://vercel.com/templates/next.js/postgres-drizzle" className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all">
        <p>Deploy your own to Vercel</p>
        <expanding_arrow_1.default />
      </link_1.default>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#4b4b4b] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Postgres on Vercel
      </h1>
      <react_1.Suspense fallback={<table_placeholder_1.default />}>
        {/* @ts-expect-error Async Server Component */}
        <table_1.default />
      </react_1.Suspense>
      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <link_1.default href="https://vercel.com/postgres" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Vercel Postgres
        </link_1.default>{" "}
        demo with{" "}
        <link_1.default href="https://github.com/drizzle-team/drizzle-orm" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Drizzle
        </link_1.default>{" "}
        as the ORM. <br /> Built with{" "}
        <link_1.default href="https://nextjs.org/docs" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Next.js App Router
        </link_1.default>
        .
      </p>

      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
        <link_1.default href="https://postgres-prisma.vercel.app/" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Prisma
        </link_1.default>
        <link_1.default href="https://postgres-starter.vercel.app/" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Starter
        </link_1.default>
        <link_1.default href="https://postgres-kysely.vercel.app/" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
          Kysely
        </link_1.default>
      </div>

      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <link_1.default href="https://vercel.com">
          <image_1.default src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority/>
        </link_1.default>
        <link_1.default href="https://github.com/vercel/examples/tree/main/storage/postgres-drizzle" className="flex items-center space-x-2">
          <image_1.default src="/github.svg" alt="GitHub Logo" width={24} height={24} priority/>
          <p className="font-light">Source</p>
        </link_1.default>
      </div>
    </main>);
}
exports.default = Home;
