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
const Todo_1 = __importDefault(require("./Todo"));
const postgres_1 = require("@vercel/postgres");
function Home() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield (0, postgres_1.sql) `SELECT * from todo`;
        return (<main className="flex min-h-screen flex-col items-center  p-24">
      <div className="text-2xl">Todo App</div>
      <div>
        {rows.map((row) => (<div key={row.id} className="flex flex-col">
            <p className="bold font-semibold">Title : {row.title}</p>
            <p className="font-base">Description : {row.description}</p>
          </div>))}
      </div>
      <Todo_1.default />
    </main>);
    });
}
exports.default = Home;
