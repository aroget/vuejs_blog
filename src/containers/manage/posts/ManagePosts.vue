<template>
  <div class="posts">
    <div class="row">
      <div class="col-xs-12">
        <div class="card" v-for="post in posts" :key="post.id">
          <p><router-link :to="`/post/${post.id}`">{{ post.body }}</router-link></p>

          <div class="row center-xs">
            <div class="col-xs">
              <ui-button
                buttonType="button">
                {{ post.is_active ? 'Disable' : 'Enable' }}
              </ui-button>
            </div>
            <div class="col-xs">
              <ui-button
                buttonType="button">
                {{ post.is_draft ? 'Publish' : 'Set as Draft' }}
              </ui-button>
            </div>
            <div class="col-xs">
              <ui-button
                buttonType="button">
                {{ post.is_public ? 'Set as Private' : 'Set as Public' }}
              </ui-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ManagePostService from './manage.posts.service';

export default {
  name: 'manage-posts',

  data() {
    return {
      filter: {
        key: null,
        value: null,
      },

      posts: [],
    };
  },
  beforeMount: function beforeMount() {
    ManagePostService
      .getPostsByUser(this.$session.g.get('user').id)
      .then((res) => { this.posts = res; });
  },
};
</script>

<style lang="scss">
@import '../../../styles/main.scss';

.card {
  padding: 15px;
  border-bottom: 1px solid #cdcdcd;

  &:last-child {
    border-bottom: none;
  }
}
</style>

