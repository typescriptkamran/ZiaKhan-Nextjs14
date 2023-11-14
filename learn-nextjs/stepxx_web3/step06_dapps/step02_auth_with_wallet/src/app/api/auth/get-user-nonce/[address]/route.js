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
const errorCodes_1 = require("@/app/api/errorCodes");
const client_1 = require("../../../client");
const server_1 = require("next/server");
function GET(request, { params }) {
    return __awaiter(this, void 0, void 0, function* () {
        let address = params.address;
        address = address.toLowerCase();
        const userExists = (yield client_1.dbClient.unsafe(`SELECT "publicAddress", "nonce" FROM "Users" WHERE "publicAddress" = '${address}'`))[0];
        if (!userExists) {
            return new Response("User with this public Address not found!", {
                status: errorCodes_1.errorCodes.notFound,
            });
        }
        return server_1.NextResponse.json(userExists);
    });
}
exports.GET = GET;
