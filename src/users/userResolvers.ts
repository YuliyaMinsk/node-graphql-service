import { IUser, ILogin } from '../interfaces';

const userResolvers = {
  Query: {
    users: (_: null, __: null, { dataSources }: any) => {
      return dataSources.UserAPI.getUsers();
    },

    // get a single user by ID
    user: (_: null, { id }: IUser, { dataSources }: any) => {
      return dataSources.UserAPI.getUser(id);
    },

    loginUser: (_: null, { email, password }: ILogin, { dataSources }: any) => {
      return dataSources.userAPI.loginUser(email, password);
      //   const result = dataSources.UserAPI.loginUser({ email, password });
      //   const authorization = { token: res.jwt };
    }
  },

  Mutation: {
    registerUser: (_: null, { firstName, lastName, email, password }: IUser, { dataSources }: any) => {
      return dataSources.userAPI.registerUser(firstName, lastName, password, email);
    }
  }
};

export default userResolvers;
