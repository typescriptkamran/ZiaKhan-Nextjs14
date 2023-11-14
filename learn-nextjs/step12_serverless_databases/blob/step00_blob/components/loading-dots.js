"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loading_dots_module_css_1 = __importDefault(require("./loading-dots.module.css"));
const LoadingDots = ({ color = '#000' }) => {
    return (<span className={loading_dots_module_css_1.default.loading}>
      <span style={{ backgroundColor: color }}/>
      <span style={{ backgroundColor: color }}/>
      <span style={{ backgroundColor: color }}/>
    </span>);
};
exports.default = LoadingDots;
