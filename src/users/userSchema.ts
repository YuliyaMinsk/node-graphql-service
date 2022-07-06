import { gql } from 'apollo-server';

const userSchema = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type Query {
    "Fetch a specific user, provided a user's ID"
    user(id: ID!): User!
  }

  type JWT {
    jwt: String
  }
`;

/*
  interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
  }
*/

export default userSchema;
