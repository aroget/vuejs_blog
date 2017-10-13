<template>
  <div class="container">
    <div class="row center-xs" v-show="loading">
      <ui-progress-circular color="primary"></ui-progress-circular>
    </div>

    <div v-show="!loading">
      <div class="row">
        <p class="col-xs-12">Posts by: {{ author.first_name }} {{ author.last_name }}</p>

        <p class="col-xs-12"><router-link :to="authorsListUrl">View All Authors</router-link></p>
      </div>

      <br>

      <div class="row">
        <post-card
          :id="post.id"
          :key="post.id"
          :body="post.body"
          :title="post.title"
          v-for="post in posts"
          :author="post.authorId"
          :image="post.featured_image"
          class="col-xs-12 col-sm-6 col-md-3">
        </post-card>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTES from '../../router/app.routes';
import AuthorService from './authors.service';
import PostCard from '../../components/PostCard';
import ErrorService from '../../shared/services/error.service';

const authorService = new AuthorService();

export default {
  name: 'author-details',

  components: {
    PostCard,
  },

  data() {
    return {
      loading: true,
      author: {},
      posts: [],
      authorsListUrl: ROUTES.AUTHORS.LIST,
    };
  },

  mounted: function mounted() {
    const authorId = this.$route.params.author_id;
    const authorDetails = authorService.getAuthorById(authorId);
    const authorPosts = authorService.getPostsByAuthorId(authorId);

    const data = Promise.all([authorDetails, authorPosts]);

    data
    .then((res) => {
      this.loading = false;
      this.author = res[0];
      this.posts = res[1];
    })
    .catch((err) => { ErrorService.handle(err); });
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>

