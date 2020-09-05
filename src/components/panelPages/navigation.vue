<template>
  <div class>
    <nav class="navbar">
      <ul class>
        <li>
          <router-link
            tag="a"
            to="/panelPages/personelInformation"
            @click.native="navbarLinkClick"
          >Kişisel Bilgiler</router-link>
        </li>
        <li>
          <router-link
            tag="a"
            to="/panelPages/education"
            @click.native="navbarLinkClick"
          >Eğitim Bilgileri</router-link>
        </li>
        <li>
          <router-link
            tag="a"
            to="/panelPages/experience"
            @click.native="navbarLinkClick"
          >Deneyimler</router-link>
        </li>
        <li>
          <router-link tag="a" to="/panelPages/skills" @click.native="navbarLinkClick">Yetkinlikler</router-link>
        </li>
        <li>
          <router-link tag="a" to="/panelPages/projects" @click.native="navbarLinkClick">Projeler</router-link>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <router-link tag="a" to="/panelPages/contact" @click.native="navbarLinkClick">İletişim</router-link>
        </li>
        <li>
          <a @click="logout" href="#">
            <i  class="fa fa-sign-out" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <button @click="navbarTogglerClick" class="navbar-toggler">
        <span></span>
      </button>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    navbarTogglerClick() {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarMenu = document.querySelector(".navbar ul");
      // const navbarLinks = document.querySelector(".navbar a");

      navbarToggler.classList.toggle("open-navbar-toggler");
      navbarMenu.classList.toggle("open");
    },
    navbarLinkClick() {
      const navbarMenu = document.querySelector(".navbar ul");
      const navbarToggler = document.querySelector(".navbar-toggler");
      // const navbarLinks = document.querySelector(".navbar a");
      if (navbarMenu.classList.contains("open")) {
        navbarToggler.click();
      }
    },
    logout() {
      this.$store.dispatch("userLogout");
    }
  },
};
</script>
<style scoped>
.navbar {
  /* background-color: #000; */
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.507); /* Black background with 0.5 opacity */
  transition: 1s;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.76);
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  padding: 0 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.navbar:hover {
  background: rgb(0, 0, 0);
}
.navbar a {
  text-decoration: none;
  color: #fff;
}
.navbar ul {
  float: right;
  list-style: none;
  height: inherit;
  line-height: inherit;
  padding: 0 0px;
}
.navbar ul li {
  display: inline-block;
}
.navbar ul li a {
  display: block;
  text-align: center;
  min-width: 120px;
  padding: 0 30px;
}
.navbar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
.navbar .navbar-toggler {
  display: none;
}

/* ************************** */

@media (max-width: 1152px) {
  .navbar ul {
    padding: 0 0;
  }
  .navbar ul li a {
    min-width: 85px;
    padding: 0 15px;
  }
}

@media (max-width: 906px) {
  .navbar {
    padding: 0;
  }
  .navbar ul {
    width: 100%;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.9);
    /* height: auto; */
    height: 100vh;
    max-height: 0;
    overflow: hidden;
    transition: all ease-in-out 0.3s;
  }
  .navbar ul.open {
    max-height: 100vh;
  }
  .navbar ul li {
    width: 100%;
    /* border-bottom: 1px solid rgba(255,255,255,0.3); */
  }
  .navbar ul li a {
    padding: 0;
  }
  .navbar .navbar-toggler {
    display: block;
    position: absolute;
    height: 40px;
    top: 20px;
    right: 20px;
    background-color: transparent;
    color: #fff;
    border: 3px solid #fff;
    /* border: none; */
    /* border-radius: 4px; */
    outline: none;
    padding: 0 5px;
    cursor: pointer;
  }
  .navbar .navbar-toggler span,
  .navbar .navbar-toggler span::before,
  .navbar .navbar-toggler span::after {
    display: block;
    content: "";
    background-color: #fff;
    height: 3px;
    width: 28px;
    border-radius: 4px;
    transition: all ease-in-out 0.3s;
  }
  .navbar .navbar-toggler span::before {
    transform: translateY(-8px);
  }
  .navbar .navbar-toggler span::after {
    transform: translateY(5px);
  }

  .navbar .navbar-toggler.open-navbar-toggler span {
    /* transform: rotate(90deg); */
    background-color: transparent;
    /* transform: scale(0.85) rotate(270deg); */
  }
  .navbar .navbar-toggler.open-navbar-toggler span::before {
    transform: translateY(0px) rotate(45deg);
    /* transform: translateY(0px) scale(0.75) rotate(45deg); */
  }
  .navbar .navbar-toggler.open-navbar-toggler span::after {
    transform: translateY(-3px) rotate(-45deg);
    /* transform: translateY(-3px) scale(0.75) rotate(-45deg); */
  }
}
</style>