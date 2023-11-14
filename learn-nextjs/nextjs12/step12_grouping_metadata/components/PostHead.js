"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const PostHead = (props) => {
    return (<head_1.default>
            <title> {props.title} </title>
            <meta name="description" content={props.subtitle}/>
            {/* open-graph meta */}
            <meta property="og:title" content={props.title}/>
            <meta property="og:description" content={props.subtitle}/>
            <meta property="og:image" content={props.image}/>
            {/* twitter card meta */}
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="twitter:image" content={props.image}/>
        </head_1.default>);
};
exports.default = PostHead;
