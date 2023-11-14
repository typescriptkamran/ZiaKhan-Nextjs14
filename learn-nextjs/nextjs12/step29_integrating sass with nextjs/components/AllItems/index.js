"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Buttons_1 = __importDefault(require("../Buttons"));
const Mixins_1 = __importDefault(require("../Mixins"));
const Variables_1 = __importDefault(require("../Variables"));
const Nesting_1 = __importDefault(require("../Nesting"));
const Extending_1 = __importDefault(require("../Extending"));
const Modules_1 = __importDefault(require("../Modules"));
const AllItems_module_scss_1 = __importDefault(require("./AllItems.module.scss"));
const index = () => {
    return (<div className={AllItems_module_scss_1.default.container}>
      <Buttons_1.default />
      <hr color='black'/>
      <Mixins_1.default />
      <hr color='black'/>
      <Variables_1.default />
      <hr color='black'/>
      <Nesting_1.default />
      <hr color='black'/>
      <Extending_1.default />
      <hr color='black'/>
      <Modules_1.default />
      <hr color='black'/>
    </div>);
};
exports.default = index;
