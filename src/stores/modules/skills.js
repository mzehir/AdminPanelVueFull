import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    YetkinlikBilgileriDTO: [],
    isPageYetkinlikFullDTO: false,

    AnaYetkinliklerDTO: [],
    YanYetkinliklerDTO: [],
    YabanciDillerDTO: [],
}

const getters = {

}

const mutations = {
    setYetkinlikBilgileriFormuDTO(state, data) {
        state.AnaYetkinliklerDTO = data.AnaYetkinlikler;
        state.YanYetkinliklerDTO = data.YanYetkinlikler;
        state.YabanciDillerDTO = data.YabanciDiller;
    },

    isPageYetkinlikFullDTO(state, data) {
        state.isPageYetkinlikFullDTO = data;
    }
}

const actions = {
    getFireYetkinliklerFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('YetkinlikBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('setYetkinlikBilgileriFormuDTO', doc.data())
                commit('isPageYetkinlikFullDTO', doc.exists)
            }
            else {
                console.log("Getirilecek veri yok")
                commit('isPageYetkinlikFullDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    setFireYetkinlik1({ dispatch, state }, data) {
        console.log(data);
        let yetkinlikler1List = [];
        if (state.isPageYetkinlikFullDTO) {
            if (state.AnaYetkinliklerDTO) {
                for (let i = 0; i < state.AnaYetkinliklerDTO.length; i++) {
                    yetkinlikler1List.push(state.AnaYetkinliklerDTO[i]);
                };
                yetkinlikler1List.push(data);
                Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
                    "AnaYetkinlikler": yetkinlikler1List
                }).then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
            }
            else {
                yetkinlikler1List.push(data)
                Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
                    "AnaYetkinlikler": yetkinlikler1List
                }).then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
            }
        }
        else {
            yetkinlikler1List.push(data);
            Firebase.db.collection("Admin").doc("YetkinlikBilgileri").set({
                "AnaYetkinlikler": yetkinlikler1List
            })
                .then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
        }
    },

    setFireYetkinlik2({ dispatch }, data) {
        let yetkinlikler2List = [];
        if (state.isPageYetkinlikFullDTO) {
            if (state.YanYetkinliklerDTO) {
                for (let i = 0; i < state.YanYetkinliklerDTO.length; i++) {
                    yetkinlikler2List.push(state.YanYetkinliklerDTO[i]);
                };
                yetkinlikler2List.push(data);
                Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
                    "YanYetkinlikler": yetkinlikler2List
                }).then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
            }
            else {
                yetkinlikler2List.push(data)
                Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
                    "YanYetkinlikler": yetkinlikler2List
                }).then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
            }
        }
        else {
            yetkinlikler2List.push(data);
            Firebase.db.collection("Admin").doc("YetkinlikBilgileri").set({
                "YanYetkinlikler": yetkinlikler2List
            })
                .then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
        }
    },

    setFireYabanciDil({ dispatch }, data) {
        let yabanciDilList = [];
        if (state.isPageYetkinlikFullDTO) {
            if (state.YabanciDillerDTO) {
                for (let i = 0; i < state.YabanciDillerDTO.length; i++) {
                    yabanciDilList.push(state.YabanciDillerDTO[i]);
                };
                yabanciDilList.push(data);
                Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
                    "YabanciDiller": yabanciDilList
                }).then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
            }
            else {
                yabanciDilList.push(data)
                Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
                    "YabanciDiller": yabanciDilList
                }).then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
            }
        }
        else {
            yabanciDilList.push(data);
            Firebase.db.collection("Admin").doc("YetkinlikBilgileri").set({
                "YabanciDiller": yabanciDilList
            })
                .then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
        }

    },

    deleteYetkinliklerFormu({ dispatch }) {
        if (window.confirm("Yetkinlikler bilgi formunun tüm verilerini silmek üzeresiniz emin misiniz?") === true) {
            Firebase.db.collection("Admin").doc("YetkinlikBilgileri").delete()
                .then(function () {
                    alert("Yetkinlikler bilgi formunun tüm verileri silinmiştir.")
                    window.location.reload()
                })
                .catch(function (error) {
                    alert(error)
                })
        }
    },

    deleteYetkinlikler1({ dispatch, state }) {
        if (state.AnaYetkinliklerDTO == undefined || state.AnaYetkinliklerDTO == "") {
            alert("Silinecek veri bulunamadı...");
        } else {
            Firebase.db.collection('Admin').doc("YetkinlikBilgileri").update({
                AnaYetkinlikler: firestore.FieldValue.delete()
            })
                .then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
        }
    },

    deleteYetkinlikler2({ dispatch, state }) {
        if (state.YanYetkinliklerDTO == undefined || state.YanYetkinliklerDTO == "") {
            alert("Silinecek veri bulunamadı...");
        } else {
            Firebase.db.collection('Admin').doc("YetkinlikBilgileri").update({
                YanYetkinlikler: firestore.FieldValue.delete()
            })
                .then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
        }
    },

    deleteYabanciDiller({ dispatch, state }) {
        if (state.YabanciDillerDTO == undefined || state.YanYetkinliklerDTO == "") {
            alert("Silinecek veri bulunamadı...");
        } else {
            Firebase.db.collection('Admin').doc("YetkinlikBilgileri").update({
                YabanciDiller: firestore.FieldValue.delete()
            })
                .then(function () {
                    dispatch("getFireYetkinliklerFormu");
                })
        }
    },

    deleteYetkinlik1({ state }, index) {
        let yetkinlikler1List = [];
        state.AnaYetkinliklerDTO.splice(index, 1);
        yetkinlikler1List = state.AnaYetkinliklerDTO
        if (state.isPageYetkinlikFullDTO) {
            Firebase.db.collection('Admin').doc('YetkinlikBilgileri').update({
                "AnaYetkinlikler": yetkinlikler1List
            })
        }
    },

    deleteYetkinlik2({ state }, index) {
        let yetkinlikler2List = [];
        state.YanYetkinliklerDTO.splice(index, 1);
        yetkinlikler2List = state.YanYetkinliklerDTO
        if (state.isPageYetkinlikFullDTO) {
            Firebase.db.collection('Admin').doc('YetkinlikBilgileri').update({
                "YanYetkinlikler": yetkinlikler2List
            })
        }
    },

    deleteYabanciDil({ state }, index) {
        let yabanciDilList = [];
        state.YabanciDillerDTO.splice(index, 1);
        yabanciDilList = state.YabanciDillerDTO
        if (state.isPageYetkinlikFullDTO) {
            Firebase.db.collection('Admin').doc('YetkinlikBilgileri').update({
                "YabanciDiller": yabanciDilList
            })
        }
    },

    changeYetkinlik1({ state }, data) {
        state.AnaYetkinliklerDTO[data.changeYetkinlik1Index] = data.changeYetkinlik1;
        Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
            "AnaYetkinlikler": state.AnaYetkinliklerDTO
        })
            .then(function () {
                alert("Bilgi güncelleme işleminiz tamamlanmıştır.");
            })
    },

    changeYetkinlik2({ state }, data) {
        state.YanYetkinliklerDTO[data.changeYetkinlik2Index] = data.changeYetkinlik2;
        Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
            "YanYetkinlikler": state.YanYetkinliklerDTO
        })
            .then(function () {
                alert("Bilgi güncelleme işleminiz tamamlanmıştır.");
            })
    },

    changeYabanciDil({ state }, data) {
        state.YabanciDillerDTO[data.changeYabanciDilIndex] = data.changeYabanciDil;
        Firebase.db.collection("Admin").doc("YetkinlikBilgileri").update({
            "YabanciDiller": state.YabanciDillerDTO
        })
            .then(function () {
                alert("Bilgi güncelleme işleminiz tamamlanmıştır.");
            })
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}
