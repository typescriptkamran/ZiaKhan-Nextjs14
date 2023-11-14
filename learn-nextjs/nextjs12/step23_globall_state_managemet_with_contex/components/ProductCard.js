"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const cartContext_1 = __importDefault(require("../components/context/cartContext"));
const ProductCard = ({ id, name, price, picture }) => {
    const { items, setItems } = (0, react_1.useContext)(cartContext_1.default);
    const productAmount = id in items ? items[id].count : 0;
    const handleAmount = (action) => {
        if (action === 'increment') {
            const newItemAmount = id in items ? items[id].count + 1 : 1;
            setItems(Object.assign(Object.assign({}, items), { [id]: Object.assign(Object.assign({}, items[id]), { count: newItemAmount }) }));
        }
        if (action === 'decrement') {
            if ((items === null || items === void 0 ? void 0 : items[id].count) > 0) {
                setItems(Object.assign(Object.assign({}, items), { [id]: Object.assign(Object.assign({}, items[id]), { count: items[id].count - 1 }) }));
            }
        }
    };
    return (<div>
            <div>
                <img src={picture} alt={name} className="object-cover"/>
            </div>
            
            <div>
                <div> {name} </div>
                <div> ${price} per kg </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly", border: "1px solid #808080", marginTop: "10px" }}>
                <button disabled={productAmount === 0} onClick={() => handleAmount('decrement')}>
                    -
                </button>
                <div>{productAmount}</div>
                <button onClick={() => handleAmount('increment')}>
                    +
                </button>
            </div>
        </div>);
};
exports.default = ProductCard;
