<template>
  <div class="container">
    <div class="row center-xs" v-show="loading">
      <ui-progress-circular color="primary"></ui-progress-circular>
    </div>

    <div class="row center-xs" v-show="!loading">
      <div class="col-xs-6 post">
        <div class="row">
          <div class="col-xs-12">
            <img :src="post.featured_image">
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h1>{{ post.title }}</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <p class="post__body">
              {{ post.body }}
            </p>

            <br>

            <p>By: {{ post.authorId }}</p>
          </div>
        </div>

        <div class="row post__meta center-xs" v-show="isAuthor">
          <ui-button
            color="red"
            class="col-xs-3"
            buttonType="button"
            @click="$refs.deleteModal.open()">
            Delete
          </ui-button>
          <router-link :to="`${post.id}/edit`">
            <ui-button
              color="primary"
              uttonType="button"
              @click="handleEditing"
              class="col-xs-3 col-xs-offset-1">
              Edit
            </ui-button>
          </router-link>
        </div>
      </div>
    </div>

    <ui-modal title="Delete Post" ref="deleteModal">
      <p>Are you sure you want to delete the post?</p>
      <br>

      <ui-button
        color="red"
        buttonType="button"
        @click="confirmDelete">
        Delete
      </ui-button>

      <ui-button
        buttonType="button"
        @click="$refs.deleteModal.close()">
        Cancel
      </ui-button>
    </ui-modal>
  </div>
</template>

<script>
import PostService from './posts.service';
import ROUTES from '../../router/app.routes';
import ErrorService from '../../shared/services/error.service';

const service = new PostService();

export default {
  name: 'post-single',

  data: function data() {
    return {
      post: {},
      loading: true,
      isAuthor: false,
    };
  },

  methods: {
    handleEditing: function handleEditing() {
      console.log('editing');
    },

    confirmDelete: function confirmDelete() {
      service
        .deletePostById(this.post.id)
        .then(() => {
          this.$refs.deleteModal.close();
          this.$router.push(ROUTES.HOME);
        })
        .catch(err => ErrorService.handle(err));
    },
  },

  beforeMount: function beforeMount() {
    const postId = this.$route.params.post_id;

    service
      .getPostById(postId)
      .then((post) => {
        this.post = post;
        this.loading = false;
        this.isAuthor = this.$session.g.get('user').id === this.post.authorId;
      });
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>


