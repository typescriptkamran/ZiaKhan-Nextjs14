"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
const server_1 = require("next/server");
// This function can be marked `async` if using `await` inside
function middleware(request) {
    return server_1.NextResponse.redirect(new URL('/about-2', request.url));
}
exports.middleware = middleware;
// See "Matching Paths" below to learn more
exports.config = {
    matcher: '/about/:path*',
};
