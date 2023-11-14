"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Counter_1 = __importDefault(require("./Counter"));
const Users_1 = __importDefault(require("./Users"));
const NavBar = () => {
    return (<div>

      <nav style={{ display: "flex", }}>
        <div style={{ marginRight: "20px", cursor: "pointer" }}>
          <link_1.default href="/">
            <a>Home</a>
          </link_1.default>
        </div>

        <div style={{ marginRight: "20px", cursor: "pointer" }}>
          <link_1.default href="/users">
            <a>UsersPage</a>
          </link_1.default>
        </div>

        <div style={{ marginRight: "20px", cursor: "pointer" }}>
          <link_1.default href="/counter">
            <a>CounterPage</a>
          </link_1.default>
        </div>

        <div style={{ marginRight: "20px", cursor: "pointer" }}>
          <link_1.default href="/staticPage">
            <a>StaticPage</a>
          </link_1.default>
        </div>
        
      </nav>

      <div style={{ border: "1px solid #cccccc", marginTop: "20px" }}>
        <Counter_1.default />
        <Users_1.default />
      </div>


    </div>);
};
exports.default = NavBar;
