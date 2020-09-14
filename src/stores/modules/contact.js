import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    isPageIletisimFormuFullDTO: false,
    iletisimBilgileriDTO: [],
    referanslarDTO: [],
    smHesaplariDTO: [], 
}

const getters = {

}

const mutations = {
    isPageIletisimFormuFullDTO(state, data) {
        state.isPageIletisimFormuFullDTO = data
    },

    IletisimFormuDTO(state, data) {
        state.iletisimBilgileriDTO = data.IletisimBilgileri;
        state.referanslarDTO = data.Referanslar;
        state.smHesaplariDTO = data.SMHesaplari;
    }
}

const actions = {
    getIletisimFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('IletisimFormu');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('IletisimFormuDTO', doc.data())
                commit('isPageIletisimFormuFullDTO', doc.exists)
            }
            else {
                console.log("Getirilecek veri yok")
                commit('isPageIletisimFormuFullDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    iletisimBilgileriToFire({ dispatch, state }, data) {
        if (state.isPageIletisimFormuFullDTO) {
            alert("Gönderilecek veri bulunamadı.");
        }
        else {
            Firebase.db.collection("Admin").doc("IletisimFormu").set({
                "IletisimBilgileri": data
            });
        }
    },

    referanslarToFire({ dispatch, state }, data) {
        if (state.isPageIletisimFormuFullDTO) {
            alert("Gönderilecek veri bulunamadı.");
        }
        else {
            Firebase.db.collection("Admin").doc("IletisimFormu").set({
                "Referanslar": data
            });
        }
    },

    smHesaplariToFire({ dispatch, state }, data) {
        if (state.isPageIletisimFormuFullDTO) {
            alert("Gönderilecek veri bulunamadı.");
        }
        else {
            Firebase.db.collection("Admin").doc("IletisimFormu").set({
                "SMHesaplari": data
            });
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
