"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCard = void 0;
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
const button_1 = require("../components/ui/button");
const card_1 = require("../components/ui/card");
const switch_1 = require("../components/ui/switch");
const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
];
function MyCard(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<card_1.Card className={(0, utils_1.cn)("w-[380px]", className)} {...props}>
      <card_1.CardHeader>
        <card_1.CardTitle>Notifications</card_1.CardTitle>
        <card_1.CardDescription>You have 3 unread messages.</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <lucide_react_1.BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <switch_1.Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (<div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>))}
        </div>
      </card_1.CardContent>
      <card_1.CardFooter>
        <button_1.Button className="w-full">
          <lucide_react_1.Check className="mr-2 h-4 w-4"/> Mark all as read
        </button_1.Button>
      </card_1.CardFooter>
    </card_1.Card>);
}
exports.MyCard = MyCard;
