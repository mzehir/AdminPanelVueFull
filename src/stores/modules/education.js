import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    OkulBilgileriDTO: [],
    isPageEducationFullDTO: false,
}

const getters = {

}

const mutations = {
    setEgitimBilgileriFormuDTO(state, data) {
        state.OkulBilgileriDTO = data.OkunanOkullar;
    },

    isPageEducationFullDTO(state, data) {
        state.isPageEducationFullDTO = data
    },
}

const actions = {
    getFireOkulBilgileri({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('EgitimBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('setEgitimBilgileriFormuDTO', doc.data())
                commit('isPageEducationFullDTO', doc.exists)
            }
            else {
                console.log("Getirilecek veri yok")
                commit('isPageEducationFullDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    setFireOkulBilgileri({ dispatch, state }, data) {
        let egitimBilgileriList = [];
        if (state.isPageEducationFullDTO && state.OkulBilgileriDTO) {
            for (let i = 0; i < state.OkulBilgileriDTO.length; i++) {
                egitimBilgileriList.push(state.OkulBilgileriDTO[i])
            }
            egitimBilgileriList.push(data)
            Firebase.db.collection("Admin").doc("EgitimBilgileri").update({
                "OkunanOkullar": egitimBilgileriList
            })
                .then(function () {
                    dispatch("getFireOkulBilgileri");
                })

        }
        else {
            egitimBilgileriList.push(data)
            Firebase.db.collection("Admin").doc("EgitimBilgileri").set({
                "OkunanOkullar": egitimBilgileriList
            })
                .then(function () {
                    dispatch("getFireOkulBilgileri");
                })
        }
    },

    deleteEgitimBilgileriFormu({ dispatch }) {
        if (window.confirm("Eğitim bilgi formunun tüm verilerini silmek üzeresiniz emin misiniz?") === true) {
            Firebase.db.collection("Admin").doc("EgitimBilgileri").delete()
                .then(function () {
                    alert("Eğitim bilgi formunun tüm verileri silinmiştir.")
                    window.location.reload()
                })
                .catch(function (error) {
                    alert(error)
                })
        }
    },

    deleteOkunanOkullar({ dispatch }) {
        Firebase.db.collection('Admin').doc("EgitimBilgileri").update({
            OkunanOkullar: firestore.FieldValue.delete()
        })
            .then(function () {
                dispatch("getFireOkulBilgileri");
            })
    },

    deleteOkunanOkul({ state }, index) {
        let OkunanOkulList = [];
        state.OkulBilgileriDTO.splice(index, 1);
        OkunanOkulList = state.OkulBilgileriDTO
        if (state.isPageEducationFullDTO) {
            Firebase.db.collection('Admin').doc('EgitimBilgileri').update({
                "OkunanOkullar": OkunanOkulList
            })
        }
    },

    changeOkulBilgisi({ dispatch, state }, data) {
        state.OkulBilgileriDTO[data.changeIndex] = data.changeOkulBilgisi
        Firebase.db.collection("Admin").doc("EgitimBilgileri").set({
            "OkunanOkullar": state.OkulBilgileriDTO
        })
        .then(function() {
            alert("Bilgi güncelleme işleminiz tamamlanmıştır.")
        })


    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
