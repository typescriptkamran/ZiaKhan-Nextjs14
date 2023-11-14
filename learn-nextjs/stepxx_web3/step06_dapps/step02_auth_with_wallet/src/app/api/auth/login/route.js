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
const errorCodes_1 = require("../../errorCodes");
const uuid_1 = require("uuid");
const ethers_1 = require("ethers");
const signature_validator_1 = require("@ambire/signature-validator");
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        let { publicAddress, signature } = req;
        publicAddress = publicAddress.toLowerCase();
        const user = (yield client_1.dbClient.unsafe(`SELECT "Users".* from "Users" WHERE "publicAddress"='${publicAddress}'`))[0];
        if (!user) {
            return new Response('User Not Already Exists! Please SignIn', {
                status: errorCodes_1.errorCodes.notFound,
            });
        }
        const message = `My App Auth Service Signing nonce: ${user.nonce}`;
        const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://polygon-rpc.com');
        const isValidSig = yield (0, signature_validator_1.verifyMessage)({
            signer: publicAddress,
            message,
            signature: signature,
            provider,
        });
        if (!isValidSig) {
            return new Response('Signnature is incorrect', {
                status: errorCodes_1.errorCodes.notFound,
            });
        }
        const secretText = (0, uuid_1.v4)();
        yield client_1.dbClient.unsafe(`UPDATE "Users" set nonce = '${Math.floor(Math.random() * 10000).toString()}', "secretText" = '${secretText}' WHERE "publicAddress" = '${publicAddress}'`);
        let payload = {
            publicAddress: publicAddress
        };
        const accessToken = (0, jsonwebtoken_1.sign)({
            payload: payload,
        }, secretText, {
            expiresIn: "24h", // expires in 24 hours
        });
        const response = server_1.NextResponse.json({ data: accessToken });
        response.cookies.set({
            name: 'accessToken',
            value: accessToken
        });
        return response;
    });
}
exports.POST = POST;
