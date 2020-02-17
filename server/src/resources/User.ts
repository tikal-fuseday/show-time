import { gql } from 'apollo-server';

export interface User {
    id: string;
    fname: string;
    lname: string;
    is_admin: boolean;
    email: string;
  }
  
export const userDefs = `
    type User {
        id: String
        fname: String
        lname: String
        is_admin: Boolean
        email: String   
    }

    type Query {
        user(email: String!): [User]
    }
`;