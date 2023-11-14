"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const counterSlice_1 = require("./store/slice/counterSlice");
const CounterView = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const counterValue = (0, react_redux_1.useSelector)((state) => state.counterSlice.value);
    const increment = () => {
        dispatch(counterSlice_1.counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterSlice_1.counterActions.decrement());
    };
    return (<div className="py-6 flex gap-6 justify-center">
      <button className="py-4 px-3 rounded-md bg-green-500" onClick={increment}>
        Increment
      </button>
      <div>Counter Value {counterValue}</div>
      <button className="py-4 px-3 rounded-md bg-red-400" onClick={decrement}>
        Decrement
      </button>
    </div>);
};
exports.default = CounterView;
