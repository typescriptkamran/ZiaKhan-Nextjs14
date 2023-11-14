"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeAgo = void 0;
const ms_1 = __importDefault(require("ms"));
const timeAgo = (timestamp, timeOnly) => {
    if (!timestamp)
        return 'never';
    return `${(0, ms_1.default)(Date.now() - new Date(timestamp).getTime())}${timeOnly ? '' : ' ago'}`;
};
exports.timeAgo = timeAgo;
