import Firebase from '../../config/firebase';
import { router } from '../../routes/router';

const state = {
    userToken: "",
}

const getters = {
    isUserAuthenticated(state) {
        return state.userToken !== "";
    }
}

const mutations = {
    setUserToken(state, data) {
        state.userToken = data;
    },
}

const actions = {
    newLogin({ commit }, data) {
        return Firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            .then((response) => {
                localStorage.setItem("userToken", response.user.refreshToken)
                commit("setUserToken", response.user.refreshToken);
                router.push("/panelPages/personelInformation");
            })
            .catch(err => {
                alert(err.message + " & " + err.code)
            })
    },

    userLoginController({ commit, state }) {
        let token = localStorage.getItem("userToken");
        if (token) {
            commit("setUserToken", token);
            router.push(localStorage.getItem("urlBilgisi"));
        } else {
            router.push("/sessionPages/login").catch(() => { });
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}