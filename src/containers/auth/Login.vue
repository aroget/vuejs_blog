<template>
  <div class="row center-xs">
    <div class="col-xs-3">

      <form v-on:submit.prevent="submitHandler">
        <ui-textbox
          floating-label
          label="Username"
          placeholder="Username"

          v-model="form.username">
        </ui-textbox>

        <br>

        <ui-textbox
          floating-label
          label="Password"
          type="password"
          placeholder="Password"

          v-model="form.password">
        </ui-textbox>

        <br>

        <ui-button
          color="primary"
          type="primary"
          buttonType="submit">
          Submit
        </ui-button>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from './auth.service';
import ErrorService from '../../shared/services/error.service';
import appStorage, { STORAGE_KEYS } from '../../shared/utils/storage';

export default {
  name: 'login',

  data: function data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },

  methods: {
    submitHandler: function submitHandler() {
      AuthService
        .login(this.form)
        .then((res) => {
          appStorage.set(STORAGE_KEYS.SESSION, res);

          this.$router.push('/');
        })
        .catch(err => ErrorService.handle(err));
    },
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>

