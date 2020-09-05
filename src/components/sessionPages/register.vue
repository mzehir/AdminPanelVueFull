<template>
  <div>
    <form class="rounded pl-3 pr-3 bg-color" @submit.prevent="onSubmit">
      <div class="header row p-3">
        <h3
          class="col-xs-12 col-sm-12 col-md-12 text-center text-white pt-3 pb-3 shadow-lg"
        >Kullanıcı Kayıt Formu</h3>
      </div>

      <div class="body p-3 row">
        <p class="col-md-5 text-left text-white">
          <strong>E-posta Adresi:</strong>
        </p>
        <input
          placeholder="E-mail adresinizi giriniz"
          class="col-md-7 text-center text-success mb-2"
          type="email"
          v-model="newUser.email"
        />

        <div class="clear col-sm-12 col-md-12 m-3"></div>

        <p class="col-md-5 text-left text-white">
          <strong>Parola:</strong>
        </p>
        <input
          placeholder="Yeni bir parola giriniz."
          class="col-md-7 text-center text-success mb-2"
          type="password"
          v-model="newUser.password"
        />
      </div>

      <div class="footer p-3 row">
        <button
          type="submit"
          class="btn btn-outline-success btn-sm col-md-4 offset-md-4 submitbtn"
        >Kayıt Ol</button>
      </div>

      <div class="row mt-3 shadow-lg">
        <p class="col-xs-12 col-sm-12 col-md-12 mt-3 text-center">
          <router-link class tag="a" to="/sessionPages/login">Zaten Üyeliğim Var</router-link>
          <span class="ml-3 mr-3">|</span>
          <router-link class tag="a" to="/sessionPages/passwordReset">Parolamı Unuttum</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      debugger
      this.$store.dispatch("newRegister", this.newUser);
    },
  },
};
</script>
<style scoped>
.bg-color {
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(197, 199, 202, 0.37); /* Black background with 0.5 opacity */
  transition: 1s;
}
.bg-color:hover {
  background: rgb(62, 69, 81);
}
.submitbtn {
  /* transition: 1s; */
}
.submitbtn:hover {
  animation: flipV 1s linear;
}

@keyframes flipV {
  50% {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(360deg);
  }
}

/* @keyframes flipH {
  50% {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(360deg);
  }
} */
</style>