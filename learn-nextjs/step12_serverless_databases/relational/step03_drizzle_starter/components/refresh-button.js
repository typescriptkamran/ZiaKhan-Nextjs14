"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
const react_1 = require("react");
function RefreshButton() {
    const router = (0, navigation_1.useRouter)();
    const [isPending, startTransition] = (0, react_1.useTransition)();
    return (<button className={`${isPending ? 'cursor-not-allowed text-gray-400' : ''} text-sm text-gray-500 hover:text-gray-900`} disabled={isPending} onClick={() => {
            startTransition(() => {
                router.refresh();
            });
        }}>
      {isPending ? 'Refreshing...' : 'Refresh'}
    </button>);
}
exports.default = RefreshButton;
