"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
require("./globals.css");
const google_1 = require("next/font/google");
exports.metadata = {
    title: 'Vercel KV for Redis Next.js Starter',
    description: 'A simple Next.js app with Vercel KV for Redis as the database',
};
const inter = (0, google_1.Inter)({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>);
}
exports.default = RootLayout;
