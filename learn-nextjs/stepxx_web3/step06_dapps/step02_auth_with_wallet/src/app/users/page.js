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
const react_1 = __importDefault(require("react"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`http://localhost:3000/api/user`, {
        cache: 'no-cache'
    });
    return res.json();
});
const UsersPage = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsers();
    console.log("users", users);
    return (<div className='px-1.5 md:px-12 lg:px-20'>
            <h1 className='font-semibold text-4xl'>Users</h1>
            {users.map((item) => (<p>{item.publicAddress}</p>))}
        </div>);
});
exports.default = UsersPage;
