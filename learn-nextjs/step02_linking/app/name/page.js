"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
function GiveName() {
    const router = (0, navigation_1.useRouter)();
    return (<div>
            My name is Zia.
            <br />
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
      
      </div>);
}
exports.default = GiveName;
