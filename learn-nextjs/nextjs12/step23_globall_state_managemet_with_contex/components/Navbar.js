"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const cartContext_1 = __importDefault(require("../components/context/cartContext"));
function Navbar() {
    const { items } = (0, react_1.useContext)(cartContext_1.default);
    const totalItemsAmount = Object.values(items).reduce((x, y) => x + y.count, 0);
    return (<div style={{ borderBottom: "1px solid #808080", display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <div>
        <link_1.default href="/" passHref>
          <a> My e-commerce </a>
        </link_1.default>
      </div>
      <div>
        <link_1.default href="/cart" passHref>
          <a>{totalItemsAmount} items in cart</a>
        </link_1.default>
      </div>
    </div>);
}
exports.default = Navbar;
