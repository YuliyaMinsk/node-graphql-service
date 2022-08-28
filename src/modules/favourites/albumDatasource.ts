import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { IFavorite } from '../interfaces';

const url = process.env.URL_FAVORITES;

class FavoriteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getFavorites() {
    return this.get('/');
  }

  getFavorite(favoriteId: string) {
    return this.get(`/${favoriteId}`);
  }

  updateFavorite(id: string, type: string) {
    return this.put(`/add`, { id, type });
  }

  removeFavorite(id: string, type: string) {
    return this.put(`/remove`, { id, type });
  }
}

export default FavoriteAPI;
