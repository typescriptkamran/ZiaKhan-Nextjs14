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
exports.PUT = exports.POST = exports.GET = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const drizzle_orm_1 = require("drizzle-orm");
const server_1 = require("next/server");
const postgres_1 = require("@vercel/postgres");
const db = (0, node_postgres_1.drizzle)(postgres_1.sql);
const tasks = (0, pg_core_1.pgTable)('tasks', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    taskname: (0, pg_core_1.text)('taskname'),
    createdat: (0, pg_core_1.timestamp)('createdat').defaultNow().notNull(),
    isdone: (0, pg_core_1.boolean)('isdone').notNull()
});
function GET() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(db);
        const allTasks = yield db.select().from(tasks);
        return server_1.NextResponse.json(allTasks);
    });
}
exports.GET = GET;
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        const newTask = {
            taskname: req.taskName,
            isdone: req.isDone,
            createdat: new Date()
        };
        console.log(db);
        const insertedUsers = yield db.insert(tasks).values(newTask).returning();
        return server_1.NextResponse.json(insertedUsers);
    });
}
exports.POST = POST;
function PUT(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = yield request.json();
        if (req.id) {
            const updateResult = yield db.update(tasks)
                .set({ isdone: req.isDone })
                .where((0, drizzle_orm_1.eq)(tasks.id, req.id))
                .returning({ taskname: tasks.taskname,
                isdone: tasks.isdone
            });
            return server_1.NextResponse.json(updateResult);
        }
    });
}
exports.PUT = PUT;
