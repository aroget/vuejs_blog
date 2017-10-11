import RESOURCES from '../../api/resources';
import BaseService from '../../base/base.service';


export default class PostService extends BaseService {
  resource = RESOURCES.POSTS;

  getPosts() {
    return BaseService
      .get(this.resource)
      .then(res => res.data);
  }

  getPostById(id) {
    return BaseService
    .get(`${this.resource}/${id}`)
    .then(res => res.data);
  }

  createPost(data) {
    return BaseService
      .post(this.resource, data)
      .then(res => res.data);
  }

  // updatePost() {

  // }

  // deletePost() {

  // }
}
