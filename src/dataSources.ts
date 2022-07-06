import UserAPI from './users/userDatasource';

const dataSources = () => {
  return {
    userAPI: new UserAPI()
  };
};

export default dataSources;
