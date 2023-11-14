"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
;
const Navbar = (props) => {
    return (<div>
            <ul>
                <li><link_1.default href='/about'>About</link_1.default></li>
                <li><link_1.default href='/contact' prefetch={false}>Contact</link_1.default></li>
            </ul>
        </div>);
};
exports.default = Navbar;
