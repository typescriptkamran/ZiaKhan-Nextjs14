"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ShoppingCartContext = (0, react_1.createContext)({
    items: {},
    setItems: () => null,
});
exports.default = ShoppingCartContext;
