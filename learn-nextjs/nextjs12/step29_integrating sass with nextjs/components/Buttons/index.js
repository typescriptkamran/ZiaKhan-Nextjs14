"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button1_1 = __importDefault(require("./Button1"));
const Button2_1 = __importDefault(require("./Button2"));
const AllButtons = () => {
    return (<div>
      <div> Ways to use SCSS </div>
          <Button1_1.default />
          <Button2_1.default />
    </div>);
};
exports.default = AllButtons;
