import { IUser, ILogin } from '../interfaces';

const userResolvers = {
  Query: {
    // get a single user by ID
    user: (_: null, { id }: IUser, { dataSources }: any) => {
      return dataSources.userAPI.getUser(id);
    },

    // receive jwt key
    loginUser: async (_: null, { email, password }: ILogin, { dataSources }: any) => {
      return await dataSources.userAPI.loginUser(email, password);
    }
  },

  Mutation: {
    // add new user to db
    registerUser: (_: null, { firstName, lastName, password, email }: IUser, { dataSources }: any) => {
      return dataSources.userAPI.registerUser(firstName, lastName, password, email);
    }
  }
};

export default userResolvers;
