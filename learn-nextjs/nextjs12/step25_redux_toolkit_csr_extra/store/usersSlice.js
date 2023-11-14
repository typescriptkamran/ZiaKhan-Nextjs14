"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.addUser = exports.usersSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
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
    }
});
_a = exports.usersSlice.actions, exports.addUser = _a.addUser, exports.removeUser = _a.removeUser;
exports.default = exports.usersSlice.reducer;
