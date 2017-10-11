<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import PostService from './posts.service';

const service = new PostService();

export default {
  name: 'post-list',

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


