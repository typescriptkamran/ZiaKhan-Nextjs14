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
exports.GET = void 0;
const server_1 = require("next/server");
function GET(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = request.nextUrl;
        if (url.searchParams.has("name")) {
            const name = url.searchParams.get("name");
            return new server_1.NextResponse('Hello, from: ' + name);
        }
        else {
            return new server_1.NextResponse('Please send your name in search parameter "name"');
        }
    });
}
exports.GET = GET;
