import API from '../../api';
import BaseService from '../../base/base.service';

export default class AuthService extends BaseService {
  loginUrl = API.RESOURCES.SESSION;
  logOutUrl = API.RESOURCES.POSTS;
  registerUrl = API.RESOURCES.SESSION;

  static fakeLogin(data) {
    const query = `?user_name=${data.username}&password=${data.password}`;
    return BaseService.get(`${API.RESOURCES.USERS}${query}`);
  }

  static login(data) {
    const fakeLogin = AuthService.fakeLogin(data);

    return fakeLogin
      .then((res) => {
        if (res.data.length !== 1) {
          return Promise.reject('User not Found');
        }

        return Promise.resolve(res.data[0].id);
      });
  }

  static register(data) {
    return BaseService
      .post(API.RESOURCES.SESSION, data)
      .then(res => res.data);
  }
}
