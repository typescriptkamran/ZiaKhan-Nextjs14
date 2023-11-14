"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const sdk_1 = require("@zerodevapp/sdk");
const social_wallet_1 = require("@zerodevapp/social-wallet");
function ConnectButton({ user }) {
    const [address, setAddress] = (0, react_1.useState)(user === null || user === void 0 ? void 0 : user.publicAddress);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const socialWallet = (0, react_1.useMemo)(() => {
        return new social_wallet_1.SocialWallet();
    }, []);
    const fetchUser = (address) => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:3000/api/auth/get-user-nonce/${address}`, {
            cache: 'no-cache'
        });
        return res.json();
    });
    const signUp = (address) => __awaiter(this, void 0, void 0, function* () {
        const newUser = yield fetch("http://localhost:3000/api/auth/signup", {
            method: "post",
            body: JSON.stringify({ publicAddress: address })
        });
        return newUser.json();
    });
    const logout = () => __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`http://localhost:3000/api/auth/logout`, {
            cache: 'no-cache'
        });
        return res.json();
    });
    const login = (address, signature) => __awaiter(this, void 0, void 0, function* () {
        const newUser = yield fetch("http://localhost:3000/api/auth/login", {
            method: "post",
            body: JSON.stringify({ publicAddress: address, signature })
        });
        return newUser.json();
    });
    const signUpFlow = (address) => __awaiter(this, void 0, void 0, function* () {
        let nonce;
        try {
            const user = yield fetchUser(address);
            nonce = user.nonce;
        }
        catch (err) {
            const newUser = yield signUp(address);
            nonce = newUser.user.nonce;
        }
        return nonce;
    });
    const createWallet = () => __awaiter(this, void 0, void 0, function* () {
        try {
            setLoading(true);
            const signer = yield (0, sdk_1.getZeroDevSigner)({
                projectId: 'b5486fa4-e3d9-450b-8428-646e757c10f6',
                owner: yield (0, sdk_1.getSocialWalletOwner)('b5486fa4-e3d9-450b-8428-646e757c10f6', socialWallet)
            });
            const userAddress = yield signer.getAddress();
            try {
                const nonce = yield signUpFlow(userAddress);
                if (!nonce) {
                    throw new Error('No Nonce Found');
                }
                const message = `My App Auth Service Signing nonce: ${nonce}`;
                let signature = yield signer.signMessage(message);
                console.log("signature ", signature);
                alert(`Your signed message: ${signature}`);
                yield login(userAddress, signature);
                setAddress(userAddress);
            }
            catch (err) {
                console.log("err", err);
                setAddress('');
            }
        }
        catch (e) {
            console.log(e);
            setAddress('');
        }
        finally {
            setLoading(false);
        }
    });
    const disconnect = () => __awaiter(this, void 0, void 0, function* () {
        yield socialWallet.disconnect();
        yield logout();
        setAddress('');
    });
    return (<div>

      <div>
        {!address && <button className={'bg-gray-300 p-3'} onClick={createWallet} disabled={loading}>{loading ? 'loading...' : 'Connect Wallet'}</button>}
        {!!address &&
            <button className={'bg-gray-300 p-3'} onClick={disconnect} disabled={loading}>Disconnect</button>}
      </div>
      {!!address &&
            <div>
          <label> {`${address.substring(0, 6)}...${address.substring(address.length - 5, address.length)}`}</label>
        </div>}
    </div>);
}
exports.default = ConnectButton;
