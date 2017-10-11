import RESOURCES from '../../api/resources';
import BaseService from '../../base/base.service';


export default class AuthService extends BaseService {
  loginUrl = RESOURCES.SESSION;
  logOutUrl = RESOURCES.POSTS;
  registerUrl = RESOURCES.POSTS;

  static fakeLogin(data) {
    const username = 'aroget';
    const password = 'password';

    return data.username === username && data.password === password ? 1 : new Error('User not found');
  }

  static login(data) {
    const userFound = AuthService.fakeLogin(data);

    if (!(userFound instanceof Error)) {
      return Promise.resolve(AuthService.fakeLogin(data));
    }

    return Promise.reject(userFound);
  }
}
