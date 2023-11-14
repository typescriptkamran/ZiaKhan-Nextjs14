"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
;
const Navbar = (props) => {
    return (<div>
        <div>My Website</div>
        <div>
            <link_1.default href="/">Home </link_1.default>
            <link_1.default href="/about">About </link_1.default>
            <link_1.default href="/contacts">Contacts </link_1.default>
        </div>
    </div>);
};
exports.default = Navbar;
