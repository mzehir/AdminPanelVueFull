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
            Firebase.db.collection("Admin").doc("IletisimFormu").update({
                "IletisimBilgileri": data
            })
                .then(function () {
                    dispatch("getIletisimFormu")
                });
        }
        else {
            Firebase.db.collection("Admin").doc("IletisimFormu").set({
                "IletisimBilgileri": data
            })
                .then(function () {
                    dispatch("getIletisimFormu")
                });
        }
    },

    referanslarToFire({ dispatch, state }, data) {
        let referanslarList = [];
        if (state.isPageIletisimFormuFullDTO) {
            if (state.referanslarDTO) {
                for (let i = 0; i < state.referanslarDTO.length; i++) {
                    referanslarList.push(state.referanslarDTO[i]);
                };
                referanslarList.push(data);
                Firebase.db.collection("Admin").doc("IletisimFormu").update({
                    "Referanslar": referanslarList
                })
                    .then(function () {
                        dispatch("getIletisimFormu");
                    })
            } else {
                referanslarList.push(data);
                Firebase.db.collection("Admin").doc("IletisimFormu").update({
                    "Referanslar": referanslarList
                })
                    .then(function () {
                        dispatch("getIletisimFormu");
                    })
            }
        }
        else {
            referanslarList.push(data)
            Firebase.db.collection("Admin").doc("IletisimFormu").set({
                "Referanslar": referanslarList
            })
                .then(function () {
                    dispatch("getIletisimFormu");
                });
        }
    },

    smHesaplariToFire({ dispatch, state }, data) {
        let smHesaplariList = [];
        if (state.isPageIletisimFormuFullDTO) {
            if (state.smHesaplariDTO) {
                for (let i = 0; i < state.smHesaplariDTO.length; i++) {
                    smHesaplariList.push(state.smHesaplariDTO[i]);
                };
                smHesaplariList.push(data);
                Firebase.db.collection("Admin").doc("IletisimFormu").update({
                    "SMHesaplari": smHesaplariList
                })
                    .then(function () {
                        dispatch("getIletisimFormu");
                    })
            }
            else {
                smHesaplariList.push(data);
                Firebase.db.collection("Admin").doc("IletisimFormu").update({
                    "SMHesaplari": smHesaplariList
                })
                    .then(function () {
                        dispatch("getIletisimFormu");
                    })
            }
        }
        else {
            smHesaplariList.push(data)
            Firebase.db.collection("Admin").doc("IletisimFormu").set({
                "SMHesaplari": smHesaplariList
            })
                .then(function () {
                    dispatch("getIletisimFormu")
                });
        }
    },

    deleteIletisimFormu({ }) {
        if (window.confirm("İletişim formunun tüm verilerini silmek üzeresiniz emin misiniz?") === true) {
            Firebase.db.collection("Admin").doc("IletisimFormu").delete()
                .then(function () {
                    alert("İletişim formunun tüm verileri silinmiştir.")
                    window.location.reload()
                })
                .catch(function (error) {
                    alert(error)
                })
        }
    },

    deleteIletisimBilgileri({ dispatch }) {
        Firebase.db.collection('Admin').doc("IletisimFormu").update({
            IletisimBilgileri: firestore.FieldValue.delete()
        })
            .then(function () {
                dispatch("getIletisimFormu");
            })
    },

    deleteSMHesaplari({ dispatch }) {
        Firebase.db.collection('Admin').doc("IletisimFormu").update({
            SMHesaplari: firestore.FieldValue.delete()
        })
            .then(function () {
                dispatch("getIletisimFormu");
            })
    },

    deleteReferanslar({ dispatch }) {
        Firebase.db.collection('Admin').doc("IletisimFormu").update({
            Referanslar: firestore.FieldValue.delete()
        })
            .then(function () {
                dispatch("getIletisimFormu");
            })
    },

    deleteTekSMHesap({ state }, index) {
        let smHesaplariList = [];
        state.smHesaplariDTO.splice(index, 1);
        smHesaplariList = state.smHesaplariDTO
        if (state.isPageIletisimFormuFullDTO) {
            Firebase.db.collection('Admin').doc('IletisimFormu').update({
                "SMHesaplari": smHesaplariList
            })
        }
    },

    deleteTekReferans({ state }, index) {
        let referanslarList = [];
        state.referanslarDTO.splice(index, 1);
        referanslarList = state.referanslarDTO
        if (state.isPageIletisimFormuFullDTO) {
            Firebase.db.collection('Admin').doc('IletisimFormu').update({
                "Referanslar": referanslarList
            })
        }
    },

    changeSMToFire({ state }, data) {
        state.smHesaplariDTO[data.changeSmHesaplarIndex] = data.changeSmHesaplar;
        Firebase.db.collection("Admin").doc("IletisimFormu").update({
            "SMHesaplari": state.smHesaplariDTO
        })
            .then(function () {
                alert("Bilgi güncelleme işleminiz tamamlanmıştır.");
            });
    },

    changeReferansToFire({ state }, data) {
        console.log(data);
        state.referanslarDTO[data.changeReferansIndex] = data.changeReferans;
        Firebase.db.collection("Admin").doc("IletisimFormu").update({
            "Referanslar": state.referanslarDTO
        })
            .then(function () {
                alert("Bilgi güncelleme işleminiz tamamlanmıştır.");
            });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
