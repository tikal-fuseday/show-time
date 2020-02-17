"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Item_1 = require("./Item");
exports.default = {
    Query: {
        user: User_1.userResolver,
        item: Item_1.itemResolver,
    },
    User: {
        items: Item_1.userItemsResolver
    },
};
//# sourceMappingURL=index.js.map