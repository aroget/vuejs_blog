<template>
  <div class="post-create">
    <post-form v-on:formSubmit="doSubmit"></post-form>
  </div>
</template>

<script>
import PostForm from '../../components/PostForm';
import PostService from './posts.service';
import ROUTES from '../../router/app.routes';

const service = new PostService();

export default {
  name: 'post-create',

  components: {
    PostForm,
  },

  methods: {
    doSubmit: function doSubmit(data) {
      service
        .createPost(data)
        .then(() => this.$router.push(ROUTES.HOME))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>

