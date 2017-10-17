<template>
  <div class="container">
    <div class="row center-xs">
      <div class="col-xs-6">
        <register-form @formSubmit="handleSubmit"></register-form>

        <br>

        <ui-alert type="success" v-show="isCreated">
          Success! Account created, redirecting to Login
        </ui-alert>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';

import ROUTES from '../../router/app.routes';
import AuthService from './auth.service';

export default {
  name: 'register',

  data() {
    return {
      isCreated: false,
    };
  },

  components: {
    RegisterForm,
  },

  methods: {
    handleSubmit: function handleSubmit(form) {
      AuthService
        .register(form)
        .then(() => {
          this.isCreated = true;
          setTimeout(() => { this.$router.push(ROUTES.LOGIN); }, 1500);
        })
        .catch(err => console.log(err));
      // console.log(form);
    },
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>
