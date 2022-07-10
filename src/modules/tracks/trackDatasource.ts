import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ITrack } from '../interfaces';

const url = process.env.URL_TRACK;

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getTracks() {
    // limit: number, offset: number
    return this.get('');
  }

  getTrack(trackId: string) {
    return this.get(`/${trackId}`);
  }

  createTrack(data: ITrack) {
    return this.post('', data);
  }

  updateTrack(trackId: string, data: ITrack) {
    return this.put(`/${trackId}`, data);
  }

  deleteTrack(trackId: string) {
    return this.delete(`/${trackId}`);
  }
}

export default TrackAPI;
