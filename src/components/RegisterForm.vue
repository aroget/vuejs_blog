<template>
  <form v-on:submit.prevent="submitHandler">
    <ui-textbox
      floating-label
      label="First Name"
      placeholder="First Name"
      v-model="form.first_name">
    </ui-textbox>

    <br>

    <ui-textbox
      floating-label
      label="Last Name"
      placeholder="Last Name"
      v-model="form.last_name">
    </ui-textbox>

    <br>

    <ui-textbox
      floating-label
      label="Username"
      placeholder="Username"
      v-model="form.user_name">
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

    <ui-textbox
      floating-label
      label="Email"
      type="email"
      placeholder="Email"
      v-model="form.email">
    </ui-textbox>

    <br>

    <ui-button color="primary">Submit</ui-button>

  </form>
</template>

<script>
export default {
  name: 'register-form',

  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        user_name: null,
        password: null,
        email: null,
        avatar: null,
        likes: [],
      },
    };
  },

  methods: {
    submitHandler: function submitHandler() {
      this.$emit('formSubmit', this.form);
    },
  },
};
</script>

