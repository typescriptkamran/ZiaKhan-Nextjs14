"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const pet_1 = __importDefault(require("./pet"));
exports.schema = {
    types: [pet_1.default],
};
