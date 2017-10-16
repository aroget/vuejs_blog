<template>
  <div>
    Hello Logout
  </div>
</template>

<script>
import appStorage from '../../shared/utils/storage';

export default {
  name: 'logout',

  beforeMount: function beforeMount() {
    appStorage.clear();
    this.$session.g.clear();
    this.$router.push('/login');
  },
};
</script>

