"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
exports.default = {
    Query: {
        user: User_1.userResolver,
    },
    User: {
        items: User_1.userItemsResolver
    }
};
//# sourceMappingURL=index.js.map