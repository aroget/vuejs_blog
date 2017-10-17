<template>
  <div class="container">
    <div class="row center-xs">
      <div class="col-xs-4 card">
        <div class="card__image">
          <img
            alt="User Avatar"
            v-bind:src="user.avatar ? user.avatar : defaultAvatar">
        </div>
        <div class="card__actions">
          <ui-button
            color="primary"
            buttonType="button"
            @click="handleEdit">
            {{ isEditing ? 'Save': 'Edit' }}
          </ui-button>
        </div>
        <div class="card__meta">
          <ui-textbox
            :disabled=!isEditing
            placeholder="First Name"
            v-model="user.first_name">
          </ui-textbox>

          <br>

          <ui-textbox
            :disabled=!isEditing
            placeholder="Last Name"
            v-model="user.last_name">
          </ui-textbox>

          <br>

          <ui-textbox
            disabled
            placeholder="Email"
            v-model="user.email">
          </ui-textbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileService from './profile.service';

/* eslint-disable global-require */
export default {
  name: 'profile-list',

  data() {
    return {
      isEditing: false,

      user: Object.assign({}, this.$session.g.get('user')),

      defaultAvatar: require('@/assets/avatar/default.png'),
    };
  },

  methods: {
    handleEdit: function handleEdit() {
      if (this.isEditing) {
        ProfileService
          .updateUser(this.user.id, this.user)
          .then((res) => {
            this.$session.g.set('user', res);
            this.isEditing = !this.isEditing;
          });
        return;
      }
      this.isEditing = !this.isEditing;
    },
  },
};
</script>

<style lang="scss">
@import '../../../styles/main.scss';

.card {
  &__image {
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 25px auto;

    img {
      width: 120px;
      height: 120px;
    }
  }

  &__meta {
    text-align: center;
  }
}
</style>

