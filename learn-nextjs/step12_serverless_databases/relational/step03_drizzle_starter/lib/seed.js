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
exports.seed = void 0;
const postgres_1 = require("@vercel/postgres");
const drizzle_1 = require("@/lib/drizzle");
const drizzle_2 = require("./drizzle");
const newUsers = [
    {
        name: 'Guillermo Rauch',
        email: 'rauchg@vercel.com',
        image: 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
    },
    {
        name: 'Lee Robinson',
        email: 'lee@vercel.com',
        image: 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
    },
    {
        name: 'Steven Tey',
        email: 'stey@vercel.com',
        image: 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
    },
];
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create table with raw SQL
        const createTable = yield postgres_1.sql.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
        console.log(`Created "users" table`);
        const insertedUsers = yield drizzle_1.db
            .insert(drizzle_2.UsersTable)
            .values(newUsers)
            .returning();
        console.log(`Seeded ${insertedUsers.length} users`);
        return {
            createTable,
            insertedUsers,
        };
    });
}
exports.seed = seed;
