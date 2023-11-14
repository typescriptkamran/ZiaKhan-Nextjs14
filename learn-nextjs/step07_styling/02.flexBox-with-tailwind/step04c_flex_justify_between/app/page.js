"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    return (<div className="card">
      <h1>CSS Flex & Grid</h1>
      <p>This book takes a completely different approach. I won't teach you the things flex and grid can do. Instead, I will first show you some components and layouts and make you think how to build them using the CSS concepts you already know. Now you have a problem, and you want a solution.</p>
      <div className="links flex justify-between">
        <a href="#"> Prev </a>
        <a href="#"> Next </a>
      </div>
    </div>);
}
exports.default = Home;
