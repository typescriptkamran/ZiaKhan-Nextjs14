"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const router_1 = require("next/router");
;
const PrivateComponent = (props) => {
    const [loggedIn, setLoggedIn] = (0, react_1.useState)(true);
    const router = (0, router_1.useRouter)();
    (0, react_1.useEffect)(() => {
        if (!loggedIn) {
            router.push('/login');
        }
    }, [loggedIn]);
    return (<div>
           This is private component.
           <br />
           <br />
           <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>);
};
exports.default = PrivateComponent;
