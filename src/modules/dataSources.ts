import ArtistAPI from './artists/artistDatasource';
import BandAPI from './bands/bandDatasource';
import GenreAPI from './genres/genreDatasource';
import UserAPI from './users/userDatasource';

const dataSources = () => {
  return {
    userAPI: new UserAPI(),
    artistAPI: new ArtistAPI(),
    genreAPI: new GenreAPI(),
    bandAPI: new BandAPI()
  };
};

export default dataSources;
