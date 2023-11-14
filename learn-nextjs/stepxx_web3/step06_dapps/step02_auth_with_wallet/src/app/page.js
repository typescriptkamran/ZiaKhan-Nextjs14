"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const react_1 = __importDefault(require("react"));
const connectButton_1 = __importDefault(require("@/components/connectButton"));
const headers_1 = require("next/headers");
const jsonwebtoken_1 = require("jsonwebtoken");
const getUser = () => {
    var _a;
    const accessToken = (_a = (0, headers_1.cookies)().get("accessToken")) === null || _a === void 0 ? void 0 : _a.value;
    if (accessToken) {
        const decodedToken = (0, jsonwebtoken_1.decode)(accessToken);
        const payload = decodedToken.payload;
        return payload;
    }
    return;
};
exports.getUser = getUser;
function Home() {
    const user = (0, exports.getUser)();
    console.log("user ", user);
    return (<main>
      <connectButton_1.default user={user}/>
    </main>);
}
exports.default = Home;
