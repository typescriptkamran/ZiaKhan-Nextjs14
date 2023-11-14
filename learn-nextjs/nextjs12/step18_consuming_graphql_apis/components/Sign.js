"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Sign = (props) => {
    const { content, country, created_at, nickname, uuid } = props;
    return (<div style={{ border: "1px solid black", margin: "5px 0px", padding: "5px" }}>
        <div>Name: {nickname}</div>
        <div>From: {country}</div>
        <div>content: {content}</div>
    </div>);
};
exports.default = Sign;
