"use strict";
"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TodoUI = () => {
    const [todo, setTodo] = (0, react_1.useState)({
        title: "",
        description: "",
    });
    const onChange = (e) => {
        setTodo(Object.assign(Object.assign({}, todo), { [e.target.name]: e.target.value }));
    };
    const onClickAdd = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("/api/todo", {
            method: "POST",
            body: JSON.stringify(todo),
        });
    });
    return (<div className="flex flex-col justify-center py-2">
      <input className="p-3 mb-5" name="title" placeholder="Title" value={todo.title} onChange={onChange}/>
      <textarea className="p-3 mb-5" name="description" placeholder="Description" value={todo.description} onChange={onChange}/>
      <button className="bg-green-700 rounded-full p-3" onClick={onClickAdd}>
        Add Todo
      </button>
    </div>);
};
exports.default = TodoUI;
