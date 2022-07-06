import { RESTDataSource } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/';
  }

  getUser(userId: String) {
    return this.get(`/v1/users/${userId}`);
  }
}

export default UserAPI;
