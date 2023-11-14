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
exports.POST = exports.GET = void 0;
const server_1 = require("@apollo/server");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const next_1 = require("@as-integrations/next");
var todos = [{
        id: 2,
        title: 'Grocery Shopping',
        description: `Buy groceries for the week, including fruits, vegetables, milk, eggs, and bread. Don't forget to check for any discounts or special offers at the store.`,
        isCompleted: false,
        createdAt: new Date
    },
    {
        id: 3,
        title: 'Prepare for Presentation',
        description: 'Get ready for the upcoming presentation at work. Create an outline of key points, gather supporting data and statistics, and practice the presentation at least twice to ensure confidence during the meeting.',
        isCompleted: true,
        createdAt: new Date
    }
];
const typeDefs = (0, graphql_tag_1.default) `
    scalar Date
    type Query{
        getTodos(id:Int): [todo]
    }
 
    type todo{
        id:Int 
        title: String,
        description:String,
        isCompleted:Boolean
        createdAt: Date
    }

    type Mutation{
        createTodo(todo:todoInput): todo
    }

    input todoInput{
        title: String,
        description:String,
    }
`;
const resolvers = {
    Query: {
        getTodos: (root, args) => {
            console.log("args", args);
            if (args.id) {
                return todos.filter((todo) => todo.id === args.id);
            }
            return todos;
        }
    },
    Mutation: {
        createTodo: (root, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('args', args);
            let newTodo = {
                id: Math.round(Math.random() * 1000),
                title: args.todo.title,
                description: args.todo.description,
                isCompleted: false,
                createdAt: new Date()
            };
            todos.push(newTodo);
            return newTodo;
        })
    }
};
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers
});
const handler = (0, next_1.startServerAndCreateNextHandler)(server);
exports.GET = handler;
exports.POST = handler;
