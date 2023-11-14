"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    return (<div className="wrapper flex flex-col justify-center">
        <a href="#" className="link login-link">Login</a>
        <a href="#" className="link signup-link">Create account</a>
      </div>);
}
exports.default = Home;
