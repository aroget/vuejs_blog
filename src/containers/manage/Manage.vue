<template>
  <div class="manage container">
    <div class="row">
      <div class="col-xs-12">
        <manage-top-bar></manage-top-bar>
      </div>
    </div>
  </div>
</template>

<script>
import ManageTopBar from '../../components/ManageTopBar';

export default {
  name: 'manage',

  components: {
    ManageTopBar,
  },
};
</script>

