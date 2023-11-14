"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = () => {
    return (<div className="container">
      <button className="button">Global</button>
      <p className="textContainer"> css applied from Global-Level </p>
    </div>);
};
exports.default = Button;
