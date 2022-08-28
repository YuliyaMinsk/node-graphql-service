import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

const url = process.env.URL_USER;

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getUser(userId: string) {
    return this.get(`/${userId}`);
  }

  loginUser(email: string, password: string) {
    return this.post(`/login`, { email, password });
  }

  verifyUser(email: string, password: string) {
    return this.post(`/verify`, { email, password });
  }

  async registerUser(firstName: string, lastName: string, password: string, email: string) {
    return await this.post(`/register`, { firstName, lastName, password, email });
  }
}

export default UserAPI;
