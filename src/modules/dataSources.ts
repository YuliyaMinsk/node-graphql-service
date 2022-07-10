import AlbumAPI from './albums/albumDatasource';
import ArtistAPI from './artists/artistDatasource';
import BandAPI from './bands/bandDatasource';
import GenreAPI from './genres/genreDatasource';
import TrackAPI from './tracks/trackDatasource';
import UserAPI from './users/userDatasource';

const dataSources = () => {
  return {
    userAPI: new UserAPI(),
    artistAPI: new ArtistAPI(),
    genreAPI: new GenreAPI(),
    bandAPI: new BandAPI(),
    albumAPI: new AlbumAPI(),
    trackAPI: new TrackAPI(),
  };
};

export default dataSources;
