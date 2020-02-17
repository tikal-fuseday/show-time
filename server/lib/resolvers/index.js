"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Item_1 = require("./Item");
exports.default = {
    Query: {
        user: User_1.userResolver,
        item: Item_1.itemResolver,
    }
};
//# sourceMappingURL=index.js.map