import * as axios from 'axios';

import API from '../api';
import production from '../shared/utils/env';

let baseUrl;

if (production) {
  baseUrl = API.ENV.PROD;
} else {
  baseUrl = API.ENV.DEV;
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
