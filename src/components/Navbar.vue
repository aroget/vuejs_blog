<template>
  <ui-toolbar
    brand="Vue.js Blog"
    :title="isAuthenticated ? userName() : ''"
    type="colored"
    text-color="white"
    removeNavIcon>
    <div slot="actions">
      <router-link
        :to="`${postCreateUrl}`"
        v-if="!isComposeUrl && isAuthenticated">
        <ui-icon-button
          color="white"
          icon="mode_edit"
          size="large"
          ariaLabel="New Post"
          type="secondary">
        </ui-icon-button>
      </router-link>

      <router-link
        :to="`${homeUrl}`"
        v-if="!isHomeUrl && isAuthenticated">
        <ui-icon-button
          color="white"
          icon="arrow_back"
          size="large"
          ariaLabel="Go Home"
          type="secondary">
        </ui-icon-button>
      </router-link>

      <ui-icon-button
        color="white"
        has-dropdown
        icon="more_vert"
        v-if="isAuthenticated"
        ref="dropdownButton1"
        size="large"
        type="secondary"
      >
        <ui-menu
          contain-focus
          has-icons
          slot="dropdown"
          :options="menuOptions"
          @select="onDropdownSelect"
          @close="$refs.dropdownButton1.closeDropdown()"
        ></ui-menu>
      </ui-icon-button>
    </div>
  </ui-toolbar>
</template>

<script>
import ROUTES from '../router/app.routes';
import appStorage, { STORAGE_KEYS } from '../shared/utils/storage';

const homeUrl = ROUTES.HOME;
const postCreateUrl = ROUTES.POSTS.CREATE;

const menuOptions = [
  {
    id: 1,
    goTo: ROUTES.MANAGE.HOME,
    label: 'Manage',
  },

  {
    id: 2,
    goTo: ROUTES.MANAGE.PROFILE.VIEW,
    label: 'Profile',
  },

  {
    id: 3,
    goTo: ROUTES.LOGOUT,
    label: 'Sign Out',
  },
];
export default {
  name: 'navbar',

  data() {
    return {
      homeUrl,
      menuOptions,
      postCreateUrl,
      isHomeUrl: true,
      isComposeUrl: true,
      isAuthenticated: false,
    };
  },

  watch: {
    $route: function watchForRouteChanges(to) {
      this.isHomeUrl = to.fullPath === ROUTES.HOME;
      this.isComposeUrl = to.fullPath === ROUTES.POSTS.CREATE;
      this.isAuthenticated = appStorage.get(STORAGE_KEYS.SESSION) !== null;
    },
  },

  methods: {
    onDropdownSelect: function onDropdownSelect(e) {
      this.$router.push(e.goTo);
    },

    userName: function userName() {
      const user = this.$session.g.get('user');
      return user ? `${user.first_name} ${user.last_name}` : '';
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/main.scss';
</style>




