"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApollo = exports.initApollo = void 0;
const react_1 = require("react");
const client_1 = require("@apollo/client");
// This link from the book is broken. Get it from the Book's Github repo
let uri = 'https://rwnjs-signbook.herokuapp.com/v1/graphql';
let apolloClient;
function createApolloClient() {
    return new client_1.ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new client_1.HttpLink({ uri }),
        cache: new client_1.InMemoryCache(),
    });
}
function initApollo(initialState) {
    const client = apolloClient || createApolloClient();
    if (initialState != undefined) {
        client.cache.restore(Object.assign(Object.assign({}, client.extract()), initialState));
    }
    if (typeof window === "undefined") {
        return client;
    }
    if (!apolloClient) {
        apolloClient = client;
    }
    return client;
}
exports.initApollo = initApollo;
function useApollo(initialState) {
    return (0, react_1.useMemo)(() => initApollo(initialState), [initialState]);
}
exports.useApollo = useApollo;
