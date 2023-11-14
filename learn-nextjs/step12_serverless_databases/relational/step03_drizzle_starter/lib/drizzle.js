"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.UsersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const postgres_1 = require("@vercel/postgres");
const vercel_postgres_1 = require("drizzle-orm/vercel-postgres");
exports.UsersTable = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
    email: (0, pg_core_1.text)('email').notNull(),
    image: (0, pg_core_1.text)('image').notNull(),
    createdAt: (0, pg_core_1.timestamp)('createdAt').defaultNow().notNull(),
}, (users) => {
    return {
        uniqueIdx: (0, pg_core_1.uniqueIndex)('unique_idx').on(users.email),
    };
});
// Connect to Vercel Postgres
exports.db = (0, vercel_postgres_1.drizzle)(postgres_1.sql);
