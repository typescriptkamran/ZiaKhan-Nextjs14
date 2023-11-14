"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const store_1 = require("@/store/store");
const Providers = ({ children }) => {
    return <react_redux_1.Provider store={store_1.store}>{children}</react_redux_1.Provider>;
};
exports.default = Providers;
