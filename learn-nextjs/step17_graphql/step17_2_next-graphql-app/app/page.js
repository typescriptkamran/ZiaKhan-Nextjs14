"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gql = String.raw;
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('http://localhost:3000/api/graphql', {
        cache: 'no-cache',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: gql `
      query fetchProductQuery {
        getProducts {
          title
        }
      }`
        })
    });
    const products = yield res.json();
    console.log("products", products.data.getProducts);
    return products.data.getProducts;
});
function Home() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield fetchProducts();
        console.log("products", products);
        return (<div>
       <button>fetch Latest products</button>
      {products === null || products === void 0 ? void 0 : products.map((item) => {
                return <p>{item.title}</p>;
            })}

    </div>);
    });
}
exports.default = Home;
