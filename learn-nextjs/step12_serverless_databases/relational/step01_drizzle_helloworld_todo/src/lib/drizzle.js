"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.todoTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const vercel_postgres_1 = require("drizzle-orm/vercel-postgres");
const postgres_1 = require("@vercel/postgres");
exports.todoTable = (0, pg_core_1.pgTable)("todo", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    title: (0, pg_core_1.text)("title"),
    description: (0, pg_core_1.varchar)("description"),
    status: (0, pg_core_1.boolean)("status").default(true).notNull(),
});
exports.db = (0, vercel_postgres_1.drizzle)(postgres_1.sql);
