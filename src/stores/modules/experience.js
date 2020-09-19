import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    FirmaBilgileriDTO: [],
    isPageExperienceFullDTO: false,
}

const getters = {

}

const mutations = {
    setFirmaBilgileriFormuDTO(state, data) {
        state.FirmaBilgileriDTO = data.CalisilanFirmalar;
    },

    isPageExperienceFullDTO(state, data) {
        state.isPageExperienceFullDTO = data
    },
}

const actions = {
    getFireFirmaBilgileriFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('FirmaBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('setFirmaBilgileriFormuDTO', doc.data())
                commit('isPageExperienceFullDTO', doc.exists)
            }
            else {
                console.log("Getirilecek veri yok")
                commit('isPageExperienceFullDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    setFireFirmaBilgileri({ dispatch, state }, data) {

        let firmaBilgileriList = [];
        if (state.isPageExperienceFullDTO && state.FirmaBilgileriDTO) {
            for (let i = 0; i < state.FirmaBilgileriDTO.length; i++) {
                firmaBilgileriList.push(state.FirmaBilgileriDTO[i])
            }
            firmaBilgileriList.push(data)
            Firebase.db.collection("Admin").doc("FirmaBilgileri").update({
                "CalisilanFirmalar": firmaBilgileriList
            })
                .then(function () {
                    dispatch("getFireFirmaBilgileriFormu");
                })
        }
        else {
            firmaBilgileriList.push(data)
            Firebase.db.collection("Admin").doc("FirmaBilgileri").set({
                "CalisilanFirmalar": firmaBilgileriList
            })
                .then(function () {
                    dispatch("getFireFirmaBilgileriFormu");
                })
        }
    },

    deleteFirmaBilgileriFormu({ dispatch }) {
        if (window.confirm("Mesleki deneyim bilgi formunun tüm verilerini silmek üzeresiniz emin misiniz?") === true) {
            Firebase.db.collection("Admin").doc("FirmaBilgileri").delete()
                .then(function () {
                    alert("Mesleki deneyim bilgi formunun tüm verileri silinmiştir.")
                    window.location.reload()
                })
                .catch(function (error) {
                    alert(error)
                })
        }
    },

    deleteCalisilanFirmalar({ dispatch, state }) {
        if (state.FirmaBilgileriDTO == undefined || state.FirmaBilgileriDTO == "") {
            alert("Silinecek veri bulunamadı...")
        } else {
            Firebase.db.collection('Admin').doc("FirmaBilgileri").update({
                CalisilanFirmalar: firestore.FieldValue.delete()
            })
                .then(function () {
                    dispatch("getFireFirmaBilgileriFormu");
                })
        }
    },

    deleteCalisilanFirma({ state }, index) {
        let CalisilanFirmaList = [];
        state.FirmaBilgileriDTO.splice(index, 1);
        CalisilanFirmaList = state.FirmaBilgileriDTO
        if (state.isPageExperienceFullDTO) {
            Firebase.db.collection('Admin').doc('FirmaBilgileri').update({
                "CalisilanFirmalar": CalisilanFirmaList
            })
        }
    },

    changeFirmaBilgisi({ dispatch, state }, data) {
        state.FirmaBilgileriDTO[data.changeIndex] = data.changeFirmaBilgisi
        Firebase.db.collection("Admin").doc("FirmaBilgileri").set({
            "CalisilanFirmalar": state.FirmaBilgileriDTO
        })
            .then(function () {
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
