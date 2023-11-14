"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button1_1 = __importDefault(require("../Button1"));
const Button2_1 = __importDefault(require("../Button2"));
const Button3_1 = __importDefault(require("../Button3"));
const AllButtons_module_css_1 = __importDefault(require("./AllButtons.module.css"));
const AllButtons = () => {
    return (<div className={AllButtons_module_css_1.default.container}>
      <Button1_1.default />
      <Button2_1.default />
      <Button3_1.default />
    </div>);
};
exports.default = AllButtons;
