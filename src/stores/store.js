import Vue from 'vue';
import Vuex from 'vuex';
import { router } from '../routes/router';
import Firebase from '../config/firebase';

import register from './modules/register';
import login from './modules/login';
import logout from './modules/logout';

import personelInformation from './modules/personelInformation';
import education from './modules/education';
import experience from './modules/experience';
import skills from './modules/skills';
import projects from './modules/projects';
import contact from './modules/contact';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // userToken: "",
    },
    getters: {
        // isUserAuthenticated(state) {
        //     return state.userToken !== "";
        // }
    },
    mutations: {
        // setUserToken(state, data) {
        //     state.userToken = data;
        // },

        // setClearToken(state) {
        //     state.userToken = "";
        // }
    },
    actions: {
        // newRegister({ }, data) {
        //     debugger
        //     return Firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
        //         .then((response) => {
        //             alert("Kaydınız" + " " + response.user.email + " " + "adresi ile oluşturulmuştur.");
        //             router.push("/sessionPages/login");
        //         })
        //         .catch(err => {
        //             alert(err.message + " & " + err.code);
        //         })
        // },

        // newLogin({ commit }, data) {
        //     return Firebase.auth.signInWithEmailAndPassword(data.email, data.password)
        //         .then((response) => {
        //             localStorage.setItem("userToken", response.user.refreshToken)
        //             commit("setUserToken", response.user.refreshToken);
        //             router.push("/panelPages/personelInformation");
        //         })
        //         .catch(err => {
        //             alert(err.message + " & " + err.code)
        //         })
        // },

        // userLoginController({ commit }) {
        //     let token = localStorage.getItem("userToken");
        //     if (token) {
        //         commit("setUserToken", token);
        //         router.push("/panelPages/personelInformation");
        //     } else {
        //         router.push("/sessionPages/login").catch(() => { });
        //     }
        // },

        // userLogout({ commit }) {
        //     commit("setClearToken");
        //     localStorage.removeItem("userToken");
        //     router.push("//sessionPages/login").catch(() => { });
        // },
    },
    modules: {
        register: register,
        login: login,
        logout: logout,

        personelInformation: personelInformation,
        education: education,
        experience: experience,
        skills: skills,
        projects: projects,
        contact: contact,
    }

})

export default store