"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterActions = exports.counterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: 0,
    value2: 6,
};
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});
// Action creators are generated for each case reducer function
exports.counterActions = exports.counterSlice.actions;
exports.default = exports.counterSlice.reducer;
