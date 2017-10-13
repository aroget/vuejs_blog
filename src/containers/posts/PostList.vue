<template>
  <div class="container">
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
</template>

<script>
import PostService from './posts.service';
import PostCard from '../../components/PostCard';

const service = new PostService();

export default {
  name: 'post-list',

  components: {
    PostCard,
  },

  data: function data() {
    return {
      posts: [],
    };
  },

  mounted: function mounted() {
    service
      .getPosts()
      .then((posts) => { this.posts = posts; });
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>


