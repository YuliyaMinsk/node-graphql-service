import ArtistAPI from './artists/artistDatasource';
import GenreAPI from './genres/genreDatasource';
import UserAPI from './users/userDatasource';

const dataSources = () => {
  return {
    userAPI: new UserAPI(),
    artistAPI: new ArtistAPI(),
    genreAPI: new GenreAPI(),
  };
};

export default dataSources;
