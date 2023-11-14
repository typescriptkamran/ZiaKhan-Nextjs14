"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
https: //bestofreactjs.com/repo/avneesh0612-react-nextjs-snippets
 ;
const Greet = (props) => {
    const { query } = (0, router_1.useRouter)();
    console.log(query);
    return <h1>Hello {query.name}!</h1>;
};
exports.default = Greet;
