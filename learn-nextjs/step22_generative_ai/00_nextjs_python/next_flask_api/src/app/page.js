"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_list_1 = __importDefault(require("./components/todo-list"));
function Home() {
    return (<main className='flex flex-col items-center justify-center mt-16'>
      <h1 className='text-[18px] font-bold py-6'>NextJs Flask Todo List</h1>
      <todo_list_1.default />
    </main>);
}
exports.default = Home;
