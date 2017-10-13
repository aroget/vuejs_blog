<template>
  <div class="container">
    <div class="row center-xs">
      <div class="col-xs-4 card">
        <div class="card__image">
          <img
            alt="User Avatar"
            v-bind:src="user.avatar ? user.avatar : defaultAvatar">
        </div>
        <div class="card__meta">
          <ui-textbox
            disabled
            placeholder="First Name"
            v-model="user.first_name">
          </ui-textbox>

          <br>

          <ui-textbox
            disabled
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
/* eslint-disable global-require */
export default {
  name: 'profile-list',

  data() {
    return {
      user: this.$session.g.get('user'),
      defaultAvatar: require('@/assets/avatar/default.png'),
    };
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

