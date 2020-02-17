"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDefs = `
    type User {
        id: String
        fname: String
        lname: String
        score: Int
        avatar: String
        is_admin: Boolean
        email: String
        items: [String]  
    }

    type Query {
        user(id: String): [User]
    }
`;
//# sourceMappingURL=User.js.map