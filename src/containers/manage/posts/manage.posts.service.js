import API from '../../../api';
import BaseService from '../../../base/base.service';
import ErrorService from '../../../shared/services/error.service';

export default class ManagePostService extends BaseService {
  static getPostsByUser(authorId) {
    return BaseService
      .get(`${API.RESOURCES.POSTS}?authorId=${authorId}&is_active=true`)
      .then(res => res.data)
      .catch(err => ErrorService.handle(err));
  }
}
