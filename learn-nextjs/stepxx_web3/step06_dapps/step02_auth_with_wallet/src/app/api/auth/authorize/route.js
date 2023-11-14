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
const jsonwebtoken_1 = require("jsonwebtoken");
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        console.log("req ", req);
        let { accessToken } = req;
        const decodedToken = (0, jsonwebtoken_1.decode)(accessToken);
        console.log("decodedToken ", decodedToken);
        if (!decodedToken) {
            return new Response("Decoded Token", {
                status: 401,
            });
        }
        const userSecretText = (yield client_1.dbClient.unsafe(`SELECT "secretText" FROM "Users" WHERE "publicAddress" = '${decodedToken.payload.publicAddress}'`))[0];
        if (!userSecretText.secretText) {
            return new Response("User with this public Address not found!", {
                status: 401,
            });
        }
        var verifiedJwt = (0, jsonwebtoken_1.verify)(accessToken, userSecretText.secretText);
        return server_1.NextResponse.json({ verifiedJwt });
    });
}
exports.POST = POST;
