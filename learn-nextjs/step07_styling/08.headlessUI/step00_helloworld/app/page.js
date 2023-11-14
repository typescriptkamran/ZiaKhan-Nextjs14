"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
function Home() {
    const [enabled, setEnabled] = (0, react_1.useState)(true);
    return (<react_2.Switch checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}>
      <span className="sr-only">Enable notifications</span>
      <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
    </react_2.Switch>);
}
exports.default = Home;
