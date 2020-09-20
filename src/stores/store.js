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

    },
    getters: {

    },
    mutations: {

    },
    actions: {

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