"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDefs = `
    type User {
        id: String
        fname: String
        lname: String
        score: Int
        is_admin: Boolean
        email: String   
    }

    type Query {
        user(email: String!): [User]
    }
`;
//# sourceMappingURL=User.js.map