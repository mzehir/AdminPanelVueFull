import Firebase from '../../config/firebase';
import { router } from '../../routes/router';

const state = {

}

const getters = {

}

const mutations = {
    setClearToken(state) {
        state.userToken = "";
    }
}

const actions = {
    userLogout({ commit }) {
        commit("setClearToken");
        localStorage.removeItem("userToken");
        router.push("//sessionPages/login").catch(() => { });
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}