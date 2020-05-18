<template>
  <div id="app">
    <v-feed-youtube channel-id="UC3SdeibuuvF-ganJesKyDVQ"></v-feed-youtube>
  </div>
</template>

<script>
import VFeedYoutube from "./components/VFeedYoutube.vue";

export default {
  name: "App",
  components: {
    VFeedYoutube
  }
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
