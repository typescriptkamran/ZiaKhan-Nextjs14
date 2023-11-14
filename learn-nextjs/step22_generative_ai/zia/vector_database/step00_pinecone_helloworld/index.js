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
require("dotenv/config");
const pinecone_1 = require("@pinecone-database/pinecone");
//console.log(process.env.PINECONE_API_KEY!)
const indexName = "ziaindex";
// Create a client
const client = new pinecone_1.PineconeClient();
// Initialize the client
//https://docs.pinecone.io/docs/node-client#init
await client.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
});
function createIndex() {
    return __awaiter(this, void 0, void 0, function* () {
        //https://docs.pinecone.io/docs/node-client#createindex
        yield client.createIndex({
            createRequest: {
                name: indexName,
                dimension: 4,
            },
        });
        console.log("Index Created");
    });
}
function upsertVectors() {
    return __awaiter(this, void 0, void 0, function* () {
        //https://docs.pinecone.io/docs/node-client#indexupsert
        const index = client.Index(indexName);
        const upsertRequest = {
            vectors: [
                {
                    id: "vec1",
                    values: [0.1, 0.2, 0.3, 0.4],
                },
                {
                    id: "vec2",
                    values: [0.2, 0.3, 0.4, 0.5],
                },
            ],
            namespace: "zia-namespace",
        };
        const upsertResponse = yield index.upsert({ upsertRequest });
        console.log("Vector Upserted");
    });
}
function queryIndex() {
    return __awaiter(this, void 0, void 0, function* () {
        //Search a namespace using a query vector. 
        //Retrieves the ids of the most similar items in a namespace,
        //along with their similarity scores.
        //https://docs.pinecone.io/docs/node-client#indexquery
        const index = client.Index(indexName);
        const queryRequest = {
            vector: [0.1, 0.2, 0.3, 0.4],
            topK: 10,
            includeValues: true,
            includeMetadata: true,
            namespace: "zia-namespace",
        };
        const queryResponse = yield index.query({ queryRequest });
        console.log("Index Quered");
        console.log(queryResponse);
    });
}
function deleteIndex() {
    return __awaiter(this, void 0, void 0, function* () {
        //https://docs.pinecone.io/docs/node-client#deleteindex
        yield client.deleteIndex({
            indexName: indexName,
        });
        console.log("Index Deleted");
    });
}
await createIndex();
//Run the program and go to portal to check the portal to see
//if the index is Ready, it will be initializing and take some time
//to become ready.
//Once ready comment the createIndex command and uncomment the three
//line below
//await upsertVectors();
//await queryIndex();
//await deleteIndex();
