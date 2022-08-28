import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { IAlbum } from '../interfaces';

const url = process.env.URL_ALBUM;

class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getAlbums() {
    // limit: number, offset: number
    return this.get('');
  }

  getAlbum(albumId: string) {
    return this.get(`/${albumId}`);
  }

  createAlbum(data: IAlbum) {
    return this.post('', data);
  }

  updateAlbum(albumId: string, data: IAlbum) {
    return this.put(`/${albumId}`, data);
  }

  deleteAlbum(albumId: string) {
    return this.delete(`/${albumId}`);
  }
}

export default AlbumAPI;
