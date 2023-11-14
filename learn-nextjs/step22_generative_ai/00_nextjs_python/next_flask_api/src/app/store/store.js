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
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoStore = void 0;
const zustand_1 = require("zustand");
const URL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : "http://localhost:3000/api";
exports.todoStore = (0, zustand_1.create)((set) => ({
    todos: [],
    getAlltodos: () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/todos`, { method: "GET" });
        const { message, todos } = yield response.json();
        if (message === "success") {
            set({ todos });
        }
    }),
    addTodo: (newTodo) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/todo`, {
            method: "POST",
            body: JSON.stringify({ todo: newTodo }),
            headers: { "Content-Type": "application/json" },
        });
        const { message, todo } = yield response.json();
        if (message === "success") {
            console.log(todo, "todo in store");
            set((state) => ({ todos: [...state.todos, todo] }));
        }
    }),
    deleteTodo: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/todo/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        const { message } = yield response.json();
        if (message === "success") {
            set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
        }
    }),
    updateTodo: (todo) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/todo/${todo.id}`, {
            method: "PUT",
            body: JSON.stringify({ todo: todo }),
            headers: { "Content-Type": "application/json" },
        });
        const { message } = yield response.json();
        if (message === "success") {
            set((state) => ({ todos: state.todos.map((todo) => todo.id === todo.id ? todo : todo) }));
        }
    }),
}));
