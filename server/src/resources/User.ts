import { gql } from 'apollo-server';

export interface User {
    id: string;
    fname: string;
    lname: string;
    score: number;
    is_admin: boolean;
    email: string;
  }
  
export const userDefs = `
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
