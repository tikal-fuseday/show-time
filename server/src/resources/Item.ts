
export interface ItemType {
    id: string;
    name: string
}
  
export interface Item {
    id: string;
    title: string;
    description: string;
    type: ItemType;
    likes: Array<string>;
    created_at: Date;
    created_by: string;
    thumbnail: string; 
}
  
export const itemDefs:any = `
    
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
        item: [Item]
    }
`;
