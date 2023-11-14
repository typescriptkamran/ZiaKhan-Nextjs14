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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_1 = require("@/lib/drizzle");
const utils_1 = require("@/lib/utils");
const image_1 = __importDefault(require("next/image"));
const refresh_button_1 = __importDefault(require("./refresh-button"));
const seed_1 = require("@/lib/seed");
function Table() {
    return __awaiter(this, void 0, void 0, function* () {
        let users;
        let startTime = Date.now();
        try {
            users = yield drizzle_1.db.select().from(drizzle_1.UsersTable);
        }
        catch (e) {
            if (e.message === `relation "users" does not exist`) {
                console.log('Table does not exist, creating and seeding it with dummy data now...');
                // Table is not created yet
                yield (0, seed_1.seed)();
                startTime = Date.now();
                users = yield drizzle_1.db.select().from(drizzle_1.UsersTable);
            }
            else {
                throw e;
            }
        }
        const duration = Date.now() - startTime;
        return (<div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <refresh_button_1.default />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (<div key={user.name} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <image_1.default src={user.image} alt={user.name} width={48} height={48} className="rounded-full ring-1 ring-gray-900/5"/>
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{(0, utils_1.timeAgo)(user.createdAt)}</p>
          </div>))}
      </div>
    </div>);
    });
}
exports.default = Table;
