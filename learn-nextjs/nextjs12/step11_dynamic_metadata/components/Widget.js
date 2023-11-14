"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const head_1 = __importDefault(require("next/head"));
;
const Widget = (props) => {
    const [active, setActive] = (0, react_1.useState)(false);
    if (active) {
        return (<>
                <head_1.default>
                    <title> You're browsing the {props.pageName} page</title>
                </head_1.default>
                <div>
                    <button onClick={() => setActive(false)}>Restore original title</button>
                    <div>Take a look at the title!</div>
                </div>
            </>);
    }
    return (<>
            <button onClick={() => setActive(true)}>Change page title</button>
        </>);
};
exports.default = Widget;
