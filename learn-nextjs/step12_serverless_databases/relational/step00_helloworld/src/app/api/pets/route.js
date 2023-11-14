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
const postgres_1 = require("@vercel/postgres");
const server_1 = require("next/server");
function GET(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield postgres_1.db.connect();
        try {
            yield client.sql `CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
            const names = ['Fiona', 'Lucy'];
            yield client.sql `INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
        }
        catch (error) {
            return server_1.NextResponse.json({ error }, {
                status: 500,
            });
        }
        const pets = yield client.sql `SELECT * FROM Pets;`;
        return server_1.NextResponse.json({ pets });
    });
}
exports.GET = GET;
