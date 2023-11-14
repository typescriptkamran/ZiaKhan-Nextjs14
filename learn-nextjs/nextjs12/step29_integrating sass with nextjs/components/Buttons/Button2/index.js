"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button2_module_scss_1 = __importDefault(require("./Button2.module.scss"));
const Button = () => {
    return (<div className="container">
      <button className={Button2_module_scss_1.default.button}>Local</button>
      <p className="textContainer"> css applied from Component-Level </p>
    </div>);
};
exports.default = Button;
