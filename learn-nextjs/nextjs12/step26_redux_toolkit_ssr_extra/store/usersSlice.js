"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.addUser = exports.usersSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const next_redux_wrapper_1 = require("next-redux-wrapper");
const initialState = {
    users: []
};
exports.usersSlice = (0, toolkit_1.createSlice)({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => (user !== action.payload));
        }
    },
    extraReducers: {
        // for server side state change
        [next_redux_wrapper_1.HYDRATE]: (state, action) => {
            console.log('HYDRATE Actioin', action.payload.users.users);
            state.users = [...state.users, ...action.payload.users.users];
        },
    },
});
_a = exports.usersSlice.actions, exports.addUser = _a.addUser, exports.removeUser = _a.removeUser;
exports.default = exports.usersSlice.reducer;
