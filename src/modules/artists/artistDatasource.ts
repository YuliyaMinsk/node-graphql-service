import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { IArtist } from '../../interfaces';

const url = process.env.URL_ARTIST;

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getArtists() {
    // limit: number, offset: number
    return this.get('');
  }

  getArtist(artistId: string) {
    return this.get(`/${artistId}`);
  }

  createArtist(data: IArtist) {
    return this.post('', data);
  }

  updateArtist(artistId: string) {
    return this.put(`/${artistId}`);
  }

  deleteArtist(artistId: string) {
    return this.delete(`/${artistId}`);
  }
}

export default ArtistAPI;
