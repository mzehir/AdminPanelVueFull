<template>
  <div id="panelPages">
    <div class="container-fluid">
      <navigation></navigation>
    </div>

    <div class="container-fluid panelRouterViewMargin">
      <router-view></router-view>
    </div>

    <div class="container-fluid">
      <footerPage></footerPage>
    </div>
  </div>
</template>
<script>
import navigation from "./panelPages/navigation";
import footerPage from "./panelPages/footerPage";

export default {
  components: {
    navigation: navigation,
    footerPage: footerPage,
  },
};
</script>
<style scoped>
#panelPages {
  background-image: url(".././assets/bgimages/bg2.jpg");
  background-size: cover;
  background-position: center;
  /* height: 100%; */
  min-height: 100vh;
  background-repeat: repeat-x;
  background-attachment: fixed;
}
.panelRouterViewMargin {
  /* margin-top: 80px; */
  padding-top: 75px;
}
</style>