<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        this.posts = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
