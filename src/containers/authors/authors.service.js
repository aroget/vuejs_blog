/* eslint-disable */
import API from '../../api';
import BaseService from '../../base/base.service';

export default class AuthorService extends BaseService {
  authorUrl = API.RESOURCES.AUTHORS;
  postsUrl = API.RESOURCES.POSTS;

  getAuthors() {
    return BaseService
      .get(`${this.authorUrl}?_expand=user`)
      .then(res => res.data.map((author) => {
        return {
          author_id: author.id,
          ...author.user,
        };
      }));
  }

  getPostsByAuthorId(authorID) {
    return BaseService
      .get(this.postsUrl)
      .then(res => res.data.filter(post => post.author_id === +authorID));
  }

  getAuthorById(id) {
    return BaseService
    .get(`${this.authorUrl}/${id}?_expand=user`)
    .then(res => res.data.user);
  }
}
