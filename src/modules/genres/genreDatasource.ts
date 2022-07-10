import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { IGenre } from '../interfaces';

const url = process.env.URL_GENRE;

class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getGenres() {
    // limit: number, offset: number
    return this.get('');
  }

  getGenre(genreId: string) {
    return this.get(`/${genreId}`);
  }

  createGenre(data: IGenre) {
    return this.post('', data);
  }

  updateGenre(genreId: string, data: IGenre) {
    return this.put(`/${genreId}`, data);
  }

  deleteGenre(genreId: string) {
    return this.delete(`/${genreId}`);
  }
}

export default GenreAPI;
