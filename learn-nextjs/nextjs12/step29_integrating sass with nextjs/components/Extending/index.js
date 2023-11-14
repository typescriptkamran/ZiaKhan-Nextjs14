"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Extending_module_scss_1 = __importDefault(require("./Extending.module.scss"));
const index = () => {
    return (<div> 
            <div>Classes formed by Extended Classes</div>
            <div className={Extending_module_scss_1.default.container}> 
                <button className={Extending_module_scss_1.default.button}> Button 1 </button>
                <button className={Extending_module_scss_1.default.button1}> Button 1 </button>
                <button className={Extending_module_scss_1.default.button2}> Button 2 </button>
                <button className={Extending_module_scss_1.default.button3}> Button 3 </button>
            </div>
        </div>);
};
exports.default = index;
