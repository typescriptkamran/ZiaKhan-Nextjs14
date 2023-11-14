"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmuont = exports.decrement = exports.increment = exports.counterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const next_redux_wrapper_1 = require("next-redux-wrapper");
const initialState = {
    counter: 0,
};
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1;
        },
        decrement: (state) => {
            state.counter = state.counter - 1;
        },
        incrementByAmuont: (state, action) => {
            state.counter = state.counter + action.payload;
        },
    },
    extraReducers: {
        // for server side state change
        [next_redux_wrapper_1.HYDRATE]: (state, action) => {
            console.log('HYDRATE', state.counter, action.payload.counter.counter);
            state.counter = state.counter + action.payload.counter.counter;
        },
    },
});
_a = exports.counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByAmuont = _a.incrementByAmuont;
exports.default = exports.counterSlice.reducer;
