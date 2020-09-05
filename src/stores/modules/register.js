import Firebase from "../../config/firebase";
import { router } from "../../routes/router";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    newRegister({ }, data) {
        debugger
        return Firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            .then((response) => {
                alert("Kaydınız" + " " + response.user.email + " " + "adresi ile oluşturulmuştur.");
                router.push("/sessionPages/login");
            })
            .catch(err => {
                alert(err.message + " & " + err.code);
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}