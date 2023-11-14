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
exports.POST = exports.runtime = void 0;
const blob_1 = require("@vercel/blob");
const server_1 = require("next/server");
const nanoid_1 = require("nanoid");
exports.runtime = 'edge';
const nanoid = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 7); // 7-character random string
function POST(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = req.body || '';
        const contentType = req.headers.get('content-type') || 'text/plain';
        const filename = `${nanoid()}.${contentType.split('/')[1]}`;
        const blob = yield (0, blob_1.put)(filename, file, {
            contentType,
            access: 'public',
        });
        return server_1.NextResponse.json(blob);
    });
}
exports.POST = POST;
