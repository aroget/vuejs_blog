<template>

  <div class="card">
    <div class="card__thumb" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="card__meta">
      <router-link :to="`post/${id}`">
        <p class="card__title">{{ title }}</p>
      </router-link>
      <p class="card__description">{{ body }}</p>

      <div class="card__author">
        <router-link :to="`authors/${author}`">@{{ author }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-card',

  props: {
    id: Number,
    title: String,
    image: String,
    body: String,
    author: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
.card {
  border: 5px solid #fff;
  // box-shadow: 1px 0px 8px rgba(0, 0, 0, .4);

  &__thumb {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &__meta {
    padding: 10px;
    background: #f2f2f2;
  }
}
</style>

