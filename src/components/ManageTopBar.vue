<template>
  <ui-tabs fullwidth>
    <ui-tab title="Posts">
      <manage-posts></manage-posts>
    </ui-tab>
    <ui-tab title="Tags">
      <tags-list></tags-list>
    </ui-tab>
    <ui-tab title="Editors">
      <editors-list></editors-list>
    </ui-tab>
  </ui-tabs>
</template>

<script>
import TagsList from '../containers/manage/tags/TagsList';
import ManagePosts from '../containers/manage/posts/ManagePosts';
import EditorsList from '../containers/manage/editors/EditorsList';

export default {
  name: 'manage-top-bar',

  components: {
    TagsList,
    EditorsList,
    ManagePosts,
  },
};
</script>

