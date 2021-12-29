<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <a href="/about">About</a>

  <HelloWorld msg="Welcome to Your Vue.js App" />
  <ListComponent />
  <Post />
  <router-link to="/home">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ListComponent from "./components/ListComponent.vue";
import Post from "./components/Post.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ListComponent,
    Post,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
