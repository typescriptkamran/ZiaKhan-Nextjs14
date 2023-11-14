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
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const server_1 = require("next/server");
function GET(request) {
    return __awaiter(this, void 0, void 0, function* () {
        return server_1.NextResponse.json({
            From: "Zia",
            Message: "Greetings from Pakistan",
            RequestType: "GET",
        });
    });
}
exports.GET = GET;
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        if (req.name) {
            return server_1.NextResponse.json({
                To: "Zia",
                Message: "All well here",
                RequestType: "POST",
            });
        }
        else {
            return new server_1.NextResponse("Please include your name in the POST request");
        }
    });
}
exports.POST = POST;
function PUT(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        if (req.name) {
            return server_1.NextResponse.json({
                To: "Zia",
                Message: "This is a updated greeting",
                RequestType: "PUT",
            });
        }
        else {
            return new server_1.NextResponse("Please include your name in the PUT request");
        }
    });
}
exports.PUT = PUT;
function DELETE(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        if (req.name) {
            return server_1.NextResponse.json({
                To: "Zia",
                Message: "I have deleted the greetings",
                RequestType: "DELETE",
            });
        }
        else {
            return new server_1.NextResponse("Please include your name in the DELETE request");
        }
    });
}
exports.DELETE = DELETE;
