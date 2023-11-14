"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modules_module_scss_1 = __importDefault(require("./Modules.module.scss"));
const index = () => {
    return (<div>
            <div>Classes formed by Modulur scss </div>
            <div className={Modules_module_scss_1.default.container}>
                <button className={Modules_module_scss_1.default.default}> Default </button>
                <button className={Modules_module_scss_1.default.info}> Info </button>
                <button className={Modules_module_scss_1.default.alert}> Alert </button>
                <button className={Modules_module_scss_1.default.success}> Success </button>
            </div>
        </div>);
};
exports.default = index;
