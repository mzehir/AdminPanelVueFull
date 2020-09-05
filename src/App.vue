<template>
  <div id="app" class>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("userLoginController");
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
