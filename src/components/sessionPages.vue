<template>
  <div id="sessionPages" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 mt-5">
        <router-view></router-view>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 mt-5 pt-3 text-center contactFooter">
        <h5>
          <ins>İLETİŞİM</ins>
        </h5>
        <p>
          <strong>0541 952 59 20</strong> |
          <strong>zehir.m.54@gmail.com</strong>
        </p>
        <p>
          <strong>https://www.limiyum.com/iletisim</strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // :style="{'background-image': 'url(' + require('../../assets/bgimages/deneme.jpg') + ')'}"
  data() {
    return {};
  },
};
</script>
<style scoped>

#sessionPages {
  background-image: url(".././assets/bgimages/bg3.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  background-repeat: repeat-y;
  background-attachment: fixed;
}
.contactFooter {
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  transition: 1s;
}
.contactFooter:hover {
  background: rgba(0, 0, 0, 0.9);
  color: white;
}
</style>