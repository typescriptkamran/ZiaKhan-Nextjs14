"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Nesting_module_scss_1 = __importDefault(require("./Nesting.module.scss"));
const index = () => {
    return (<div>
            <div>Classes formed by Nested Classes</div>
            <div className={Nesting_module_scss_1.default.container}>
                <div className={Nesting_module_scss_1.default.Btncontainer}>
                    <button className={Nesting_module_scss_1.default.button}> Button 1 </button>
                </div>

                <button className={Nesting_module_scss_1.default.Btncontainer2 + " " + Nesting_module_scss_1.default.button}> Button 2 </button>
                <button className={Nesting_module_scss_1.default.Btncontainer__button}> Button 3 </button>

            </div>
        </div>);
};
exports.default = index;
