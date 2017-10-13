<template>
  <div>
    hello post single
  </div>
</template>

<script>
import PostService from './posts.service';

const service = new PostService();

export default {
  name: 'post-single',

  data: function data() {
    return {
      post: null,
    };
  },

  mounted: function mounted() {
    service
      .getPostById(2)
      .then((post) => { this.post = post; });
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>


