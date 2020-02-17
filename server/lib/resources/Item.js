"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemDefs = `
    
    type Item {
        id: String
        title: String
        description: String
        type: ItemType
        likes: [User]
        created_at: String
        created_by: User
        thumbnail: String
    }

    type ItemType {
        id: String
        name: String
    }

    extend type Query {
        item(
            id: String
            title: String
            created_by: String
        ): [Item]
    }
`;
//# sourceMappingURL=Item.js.map