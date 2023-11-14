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
exports.middleware = void 0;
const server_1 = require("next/server");
// This function can be marked `async` if using `await` inside
function middleware(request) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const requestHeaders = new Headers(request.headers);
        const accessToken = (_a = request.cookies.get("accessToken")) === null || _a === void 0 ? void 0 : _a.value;
        if (request.nextUrl.pathname.startsWith('/api/auth/')) {
            return server_1.NextResponse.next();
        }
        if (!request.nextUrl.pathname.startsWith('/api')) {
            return server_1.NextResponse.next();
        }
        if (!accessToken) {
            return new server_1.NextResponse(JSON.stringify({ success: false, message: "auth failed" }), { status: 401, headers: { 'content-type': 'application/json' } });
        }
        try {
            const verifiedJwt = yield (yield fetch(request.nextUrl.origin + "/api/authorize", {
                method: "post",
                body: JSON.stringify({ accessToken }),
            })).json();
            console.log("verifiedJwt ", verifiedJwt);
            if (!verifiedJwt) {
                return new server_1.NextResponse(JSON.stringify({ success: false, message: "auth failed" }), { status: 401, headers: { 'content-type': 'application/json' } });
            }
            requestHeaders.set('verifiedJwt', JSON.stringify(verifiedJwt));
            // You can also set request headers in NextResponse.rewrite
            const response = server_1.NextResponse.next({
                request: {
                    headers: requestHeaders,
                },
            });
            return response;
        }
        catch (err) {
            console.log("err ", err);
            const response = new server_1.NextResponse(JSON.stringify({ success: false, message: "auth failed" }), { status: 401, headers: { 'content-type': 'application/json' } });
            response.cookies.delete("accessToken");
            return response;
        }
    });
}
exports.middleware = middleware;
