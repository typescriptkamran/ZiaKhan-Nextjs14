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
const server_1 = require("next/server");
const drizzle_1 = require("@/lib/drizzle");
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = yield request.json();
        const data = yield drizzle_1.db.insert(drizzle_1.todoTable).values(body).returning();
        return new server_1.NextResponse(JSON.stringify({
            message: "Data Added",
            data,
        }));
    });
}
exports.POST = POST;
