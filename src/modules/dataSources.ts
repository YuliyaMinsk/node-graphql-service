import ArtistAPI from './artists/artistDatasource';
import UserAPI from './users/userDatasource';

const dataSources = () => {
  return {
    userAPI: new UserAPI(),
    artistAPI: new ArtistAPI()
  };
};

export default dataSources;
