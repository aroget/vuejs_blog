import API from '../../api';
import BaseService from '../../base/base.service';

export default class AuthService extends BaseService {
  loginUrl = API.RESOURCES.SESSION;
  logOutUrl = API.RESOURCES.POSTS;
  registerUrl = API.RESOURCES.POSTS;

  static fakeLogin(data) {
    return BaseService
      .get(`${API.RESOURCES.USERS}?user_name=${data.username}&password=${data.password}`)
      .then((res) => {
        if (res.data.length !== 1) {
          return new Error('User not found');
        }
        return res.data[0].id;
      })
      .catch(() => new Error('User not found'));
  }

  static login(data) {
    const userFound = AuthService.fakeLogin(data);

    if (!(userFound instanceof Error)) {
      return Promise.resolve(AuthService.fakeLogin(data));
    }

    return Promise.reject(userFound);
  }
}
