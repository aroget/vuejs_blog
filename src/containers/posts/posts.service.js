import API from '../../api';
import BaseService from '../../base/base.service';


export default class PostService extends BaseService {
  resource = API.RESOURCES.POSTS;

  getPosts() {
    return BaseService
      .get(`${this.resource}?_expand=author`)
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

  deletePostById(postId) {
    return BaseService
      .delete(`${this.resource}/${postId}`)
      .then(res => res.data);
  }

  // updatePost() {

  // }
}
