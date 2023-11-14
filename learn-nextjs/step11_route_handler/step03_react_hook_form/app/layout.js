"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./globals.css");
function RootLayout({ children, }) {
    return (<html lang="en">
      <body>{children}</body>
    </html>);
}
exports.default = RootLayout;
