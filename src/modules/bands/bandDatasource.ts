import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { IBand } from '../interfaces';

const url = process.env.URL_BAND;

class BandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getBands() {
    // limit: number, offset: number
    return this.get('');
  }

  getBand(bandId: string) {
    return this.get(`/${bandId}`);
  }

  createBand(data: IBand) {
    return this.post('', data);
  }

  updateBand(bandId: string, data: IBand) {
    return this.put(`/${bandId}`, data);
  }

  deleteBand(bandId: string) {
    return this.delete(`/${bandId}`);
  }
}

export default BandAPI;
