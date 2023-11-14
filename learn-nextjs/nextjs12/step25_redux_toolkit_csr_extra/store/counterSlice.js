"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrement = exports.increment = exports.counterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    counter: 0,
};
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        }
    }
});
_a = exports.counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement;
exports.default = exports.counterSlice.reducer;
