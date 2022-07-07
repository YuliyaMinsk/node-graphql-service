import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
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
