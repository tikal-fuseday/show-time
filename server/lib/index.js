"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resources_1 = require("./resources/");
const resolvers_1 = __importDefault(require("./resolvers/"));
const server = new apollo_server_1.ApolloServer({
    typeDefs: resources_1.typeDefs,
    resolvers: resolvers_1.default,
    //   engine: {
    //     apiKey: "<APOLLO ENGINE API KEY HERE>"
    //   },
    introspection: true
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map