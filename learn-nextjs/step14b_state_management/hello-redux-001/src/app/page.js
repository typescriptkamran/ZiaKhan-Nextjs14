"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Counter_1 = __importDefault(require("@/Counter"));
function Home() {
    return (<main className="flex min-h-screen flex-col items-center  p-24 py-5">
      <div className="text-bold text-lg">Counter App</div>
      <Counter_1.default />
    </main>);
}
exports.default = Home;
