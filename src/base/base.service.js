import * as axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default class BaseService {
  static handleError(err) {
    throw Error(err);
  }

  static get(resource) {
    return axios
      .get(`${baseUrl}/${resource}`)
      .catch(err => BaseService.handleError(err));
  }

  static post(resource, data) {
    return axios
      .post(`${baseUrl}/${resource}`, data)
      .catch(err => BaseService.handleError(err));
  }
}
