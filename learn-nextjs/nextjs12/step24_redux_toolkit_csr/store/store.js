"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const counterSlice_1 = __importDefault(require("./counterSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: counterSlice_1.default // This is where we add reducers.
        // Since we don't have any yet, leave this empty
    },
});
