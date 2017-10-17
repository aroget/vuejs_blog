import API from '../../../api';
import BaseService from '../../../base/base.service';
import ErrorService from '../../../shared/services/error.service';

export default class ProfileService extends BaseService {
  static updateUser(userId, data) {
    return BaseService
      .update(`${API.RESOURCES.USERS}/${userId}`, data)
      .then(res => res.data)
      .catch(err => ErrorService.handle(err));
  }
}
