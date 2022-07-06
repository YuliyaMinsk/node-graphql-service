import { IUser } from '../interfaces';

const userResolvers = {
  Query: {
    // get a single user by ID
    user: (_: null, { id }: IUser, { dataSources }: any) => {
      return dataSources.UserAPI.getUser(id);
    }
  }
};

export default userResolvers;
