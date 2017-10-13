<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <p>Hello Authors List</p>

        <p
          :key="author.author_id"
          v-for="author in authors">
          <router-link
            :to="`authors/${author.author_id}`">
            {{ author.first_name }} {{ author.last_name }}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorService from './authors.service';
import ErrorService from '../../shared/services/error.service';

const authorService = new AuthorService();

export default {
  name: 'authors-list',

  data() {
    return {
      authors: [],
    };
  },

  mounted: function mounted() {
    authorService
      .getAuthors()
      .then((authors) => { this.authors = authors; })
      .catch((err) => { ErrorService.handle(err); });
  },
};
</script>

<style lang="sass">
@import '../../styles/main.scss';
</style>