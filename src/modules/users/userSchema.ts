import { gql } from 'apollo-server';

const userSchema = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type JWT {
    jwt: String
  }

  type Query {
    "Fetch a specific user, provided a user's ID"
    user(id: ID!): User!
    "Checks if the user has been registered, returns a token if successful"
    loginUser(email: String!, password: String!): JWT
  }

  type Mutation {
    registerUser(firstName: String!, lastName: String!, password: String!, email: String!): User!
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
