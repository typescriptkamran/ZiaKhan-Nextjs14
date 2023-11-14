"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbClient = void 0;
const postgres_1 = __importDefault(require("postgres"));
exports.dbClient = (0, postgres_1.default)(process.env.NEXT_PUBLIC_DB_STRING, { ssl: true });
