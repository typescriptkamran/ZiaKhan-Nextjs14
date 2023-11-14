"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Mixins_module_scss_1 = __importDefault(require("./Mixins.module.scss"));
const index = () => {
    return (<div> 
            <div>Classes formed by Mixins</div>
            <div className={Mixins_module_scss_1.default.container}> 
                <button className={Mixins_module_scss_1.default.default}> Default </button>
                <button className={Mixins_module_scss_1.default.info}> Info </button>
                <button className={Mixins_module_scss_1.default.alert}> Alert </button>
                <button className={Mixins_module_scss_1.default.success}> Success </button>
            </div>
        </div>);
};
exports.default = index;
