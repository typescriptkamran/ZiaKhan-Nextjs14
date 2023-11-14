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
exports.POST = void 0;
const client_1 = require("../../client");
const server_1 = require("next/server");
const uuid_1 = require("uuid");
const errorCodes_1 = require("../../errorCodes");
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        let { publicAddress } = req;
        publicAddress = publicAddress.toLowerCase();
        const userExists = (yield client_1.dbClient.unsafe(`SELECT "publicAddress" FROM "Users" WHERE "publicAddress" = '${publicAddress}'`))[0];
        if (userExists) {
            return new Response('User Already Exists!', {
                status: errorCodes_1.errorCodes.notFound,
            });
        }
        const nonce = Math.floor(Math.random() * 10000).toString();
        const secretText = (0, uuid_1.v4)();
        const user = (yield client_1.dbClient.unsafe(`INSERT INTO "Users" (nonce, "publicAddress","secretText") VALUES ('${nonce}', '${publicAddress}', '${secretText}') RETURNING "nonce", "publicAddress"`))[0];
        return server_1.NextResponse.json({ user });
    });
}
exports.POST = POST;
