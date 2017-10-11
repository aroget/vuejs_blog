<template>
  <ui-toolbar
    brand="Vue.js Blog"
    title=""
    type="colored"
    text-color="white"
    removeNavIcon>
    <div slot="actions">
      <router-link :to="`${postCreateUrl}`">
        <ui-icon-button
          color="white"
          icon="mode_edit"
          size="large"
          ariaLabel="New Post"
          type="secondary">
        </ui-icon-button>
      </router-link>

      <router-link :to="`${homeUrl}`">
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

const homeUrl = ROUTES.HOME;
const postCreateUrl = ROUTES.POST_CREATE;

const menuOptions = [
  {
    id: 1,
    goTo: '/manage',
    label: 'Manage',
  },

  {
    id: 2,
    goTo: ROUTES.PROFILE,
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
    };
  },

  methods: {
    onDropdownSelect: function onDropdownSelect(e) {
      this.$router.push(e.goTo);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/main.scss';
</style>




