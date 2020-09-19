import Vue from "vue";
import VueRouter from "vue-router";
import store from '../stores/store';

Vue.use(VueRouter);

import sessionPages from '../components/sessionPages';
import panelPages from '../components/panelPages';

import register from '../components/sessionPages/register';
import login from '../components/sessionPages/login';
import passwordReset from '../components/sessionPages/passwordReset';

import personelInformation from '../components/panelPages/personelInformation';
import education from '../components/panelPages/education';
import experience from '../components/panelPages/experience';
import skills from '../components/panelPages/skills';
import projects from '../components/panelPages/projects';
import contact from '../components/panelPages/contact';

import blog from '../components/panelPages/blog';

export const router = new VueRouter({
    // mode: "history",
    routes: [
        { path: "*", redirect: '/sessionPages/login' },
        { path: "/", redirect: '/sessionPages/login' },

        {
            path: "/sessionPages", component: sessionPages, children: [
                { path: "/sessionPages/register", component: register },
                { path: "/sessionPages/login", component: login },
                { path: "/sessionPages/passwordReset", component: passwordReset },
            ]
        },

        {
            path: "/panelPages", component: panelPages,

            beforeEnter(to, from, next) {
                if (store.getters.isUserAuthenticated) {
                    next();
                } else {
                    next("/sessionPages/login");
                }
            },

            children: [
                { path: "/panelPages/personelInformation", component: personelInformation },
                { path: "/panelPages/education", component: education },
                { path: "/panelPages/experience", component: experience },
                { path: "/panelPages/skills", component: skills },
                { path: "/panelPages/projects", component: projects },
                { path: "/panelPages/contact", component: contact },
                { path: "/panelPages/blog", component: blog },
            ]
        },
    ]
})