<template>
  <div class="row center-xs">
    <div class="col-xs-5">
      <form v-on:submit.prevent="onSubmit">
        <ui-textbox
          floating-label
          label="Title"
          placeholder="Blog post name"

          v-model="post.title">
        </ui-textbox>

        <br>

        <ui-textbox
          enforce-maxlength
          placeholder="Write something cool"

          :multi-line="true"
          :maxlength="512"

          v-model="post.body">
        </ui-textbox>

        <br>

        <div class="row">
          <div class="col-xs">
            <div class="box-row">
              <ui-checkbox v-model="post.is_draft">Set as Draft</ui-checkbox>
            </div>
          </div>

          <div class="col-xs">
            <div class="box-row">
              <ui-checkbox v-model="post.is_public">Set as Private</ui-checkbox>
            </div>
          </div>
        </div>

        <br>
        <br>

        <ui-button color="primary" :size="size">Submit</ui-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-form',

  data: function data() {
    return {
      size: 'normal',
      post: {
        title: null,
        body: null,
        is_draft: false,
        is_public: true,
        is_active: true,
        author_id: 1,
        tags: null,
      },
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      this.$emit('formSubmit', this.post);
    },
  },
};
</script>

