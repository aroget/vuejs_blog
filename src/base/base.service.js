import * as axios from 'axios';

import isProd from '../shared/utils/env';

let baseUrl;

if (isProd) {
  baseUrl = 'http://jaded-vest.surge.sh';
} else {
  baseUrl = 'http://localhost:3000';
}

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
