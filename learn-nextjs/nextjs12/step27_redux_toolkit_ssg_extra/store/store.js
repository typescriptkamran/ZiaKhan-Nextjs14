"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapper = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const usersSlice_1 = __importDefault(require("./usersSlice"));
const counterSlice_1 = __importDefault(require("./counterSlice"));
const next_redux_wrapper_1 = require("next-redux-wrapper");
const combinedReducer = (0, toolkit_1.combineReducers)({
    counter: counterSlice_1.default,
    users: usersSlice_1.default,
});
const makeStore = () => (0, toolkit_1.configureStore)({
    reducer: combinedReducer,
    devTools: true,
});
exports.wrapper = (0, next_redux_wrapper_1.createWrapper)(makeStore);
