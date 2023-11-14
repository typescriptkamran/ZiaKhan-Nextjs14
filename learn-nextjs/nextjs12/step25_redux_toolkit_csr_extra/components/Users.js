"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const usersSlice_1 = require("../store/usersSlice");
const Users = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { users } = (0, react_redux_1.useSelector)((state) => state.reducer.users);
    return (<div style={{ marginTop: "10px" }}>
      <div>User List:</div>
      <ol>
        {users.map((user) => (<div>{user} <button onClick={() => dispatch((0, usersSlice_1.removeUser)(user))}> x </button>
          </div>))}
      </ol>
    </div>);
};
exports.default = Users;
