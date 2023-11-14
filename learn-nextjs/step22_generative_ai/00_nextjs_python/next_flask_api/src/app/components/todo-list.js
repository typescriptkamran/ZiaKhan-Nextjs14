"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const store_1 = require("../store/store");
const card_1 = require("./ui/card");
const button_1 = require("./ui/button");
const input_1 = require("./ui/input");
const lucide_react_1 = require("lucide-react");
const dialog_1 = require("./ui/dialog");
const checkbox_1 = require("./ui/checkbox");
function TodoList({}) {
    const { todos, getAlltodos, addTodo, deleteTodo, updateTodo } = (0, store_1.todoStore)();
    const [todo, setTodo] = (0, react_1.useState)("");
    const [id, setId] = (0, react_1.useState)("");
    const [status, setStatus] = (0, react_1.useState)(false);
    const [openDialog, setOpenDialog] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        getAlltodos();
    }, []);
    const handleAddTodo = () => {
        const newTodo = {
            id: String(Math.floor(Math.random() * 100 + 1)),
            title: todo,
            status: "pending",
        };
        addTodo(newTodo);
        setTodo("");
        getAlltodos();
    };
    const handleDelete = (id) => {
        deleteTodo(id);
        getAlltodos();
    };
    const handleUpdate = (id, todotTitle, status) => {
        setId(id);
        setTodo(todotTitle);
        status === "completed" ? setStatus(true) : setStatus(false);
        setOpenDialog(!openDialog);
    };
    const handleAddUpdate = () => {
        setTodo("");
        const updateTodoList = {
            id: id,
            title: todo,
            status: status ? "completed" : "pending",
        };
        updateTodo(updateTodoList);
        setTodo("");
        setOpenDialog(false);
        getAlltodos();
    };
    return (<div className="w-[60%]">
      <dialog_1.Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
        <dialog_1.DialogContent>
          <input_1.Input className="mt-8" type="text" placeholder="Enter Todo" value={todo} onChange={(e) => {
            setTodo(e.currentTarget.value);
        }}/>
          <div className="flex items-center space-x-2">
            <checkbox_1.Checkbox id="forStatus" checked={status} onCheckedChange={() => setStatus(!status)}/>
            <label htmlFor="forStatus" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Completed
            </label>
          </div>
          <button_1.Button onClick={handleAddUpdate}>Update</button_1.Button>
        </dialog_1.DialogContent>
      </dialog_1.Dialog>
      <card_1.Card>
        <card_1.CardHeader className="flex flex-row items-center justify-center gap-3">
          <input_1.Input className="w-[82%] mt-1" type="text" placeholder="Enter Todo" value={todo} onChange={(e) => {
            setTodo(e.currentTarget.value);
        }}/>
          {todo.length > 0 ? (<button_1.Button onClick={handleAddTodo}>Add Todo</button_1.Button>) : (<button_1.Button onClick={handleAddTodo} disabled>
              Add Todo
            </button_1.Button>)}
        </card_1.CardHeader>
        <card_1.CardContent>
          {todos.length === 0 ? (<p className="text-center  italic">No todos</p>) : (todos.map((todo) => (<div key={todo.id} className="flex my-3 items-center justify-between shadow-md border-2 border-[#acacac] py-2 px-4 rounded-md">
                {todo.status === "completed" ? (<p className="line-through text-[16px]">{todo.title}</p>) : (<p className="text-[16px]">{todo.title}</p>)}
                <div>
                  <button_1.Button className="mr-1" variant={"ghost"} onClick={() => handleDelete(todo.id)}>
                    <lucide_react_1.Trash size={20} color="red"/>
                  </button_1.Button>
                  <button_1.Button variant={"ghost"} onClick={() => handleUpdate(todo.id, todo.title, todo.status)}>
                    <lucide_react_1.PenIcon size={20}/>
                  </button_1.Button>
                </div>
              </div>)))}
        </card_1.CardContent>
      </card_1.Card>
    </div>);
}
exports.default = TodoList;
