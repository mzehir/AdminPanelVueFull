import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    isPageProjectsFullDTO: "",
    tamamlananProjelerDTO: [],
    portfoyDTO: [],
}

const getters = {

}

const mutations = {
    isPageProjectsFullDTO(state, data) {
        state.isPageProjectsFullDTO = data
    },

    setProjelerFormuDTO(state, data) {
        state.tamamlananProjelerDTO = data.TamamlananProjeler;
        state.portfoyDTO = data.portfoyler;
    },
}

const actions = {
    getFireProjelerFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('ProjeBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('setProjelerFormuDTO', doc.data());
                commit('isPageProjectsFullDTO', doc.exists);
            }
            else {
                console.log("Getirilecek veri yok");
                commit('isPageProjectsFullDTO', doc.exists);
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    setFireTamamlananProjeler({ dispatch }, data) {
        let tamamlananProjelerList = [];
        if (state.isPageProjectsFullDTO) {
            if (state.tamamlananProjelerDTO) {
                for (let i = 0; i < state.tamamlananProjelerDTO.length; i++) {
                    tamamlananProjelerList.push(state.tamamlananProjelerDTO[i])
                };
                tamamlananProjelerList.push(data);
                Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                    "TamamlananProjeler": tamamlananProjelerList
                })
                    .then(function () {
                        dispatch("getFireProjelerFormu");
                    });
            }
            else {
                tamamlananProjelerList.push(data);
                Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                    "TamamlananProjeler": tamamlananProjelerList
                })
                    .then(function () {
                        dispatch("getFireProjelerFormu");
                    });
            }
        }
        else {
            tamamlananProjelerList.push(data);
            Firebase.db.collection("Admin").doc("ProjeBilgileri").set({
                "TamamlananProjeler": tamamlananProjelerList
            })
                .then(function () {
                    dispatch("getFireProjelerFormu");
                });
        }
    },

    setFirePortfolio({ dispatch, state }, data) {
        if (state.portfoyDTO) {
            for (let i = 0; i < state.portfoyDTO.length; i++) {
                if (state.portfoyDTO[i].portfoyFotoName == data.portfolio.portfoyFotoName) {
                    alert("HATA!!!" + " " + data.portfolio.portfoyFotoName + " " + "fotoğraf ismiyle daha önce yükleme yaptınız. Lütfen fotoğraf ismini değiştiriniz.")
                    return;
                }
                //Burası değiştirilebilir.
            };
        }

        let portfoylerList = [];
        Firebase.storage.ref(`Portfoyler/${data.portfoyFoto.name}`).put(data.portfoyFoto)
            .then(function (res) {
                Firebase.storageRef.child(res.ref.fullPath).getDownloadURL()
                    .then(function (res2) {
                        data.portfolio.portfoyFotoUrl = res2
                    })
                    .then(function () {
                        if (state.isPageProjectsFullDTO) {
                            if (state.portfoyDTO) {
                                for (let i = 0; i < state.portfoyDTO.length; i++) {
                                    portfoylerList.push(state.portfoyDTO[i]);
                                };
                                portfoylerList.push(data.portfolio);
                                Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                                    "portfoyler": portfoylerList
                                })
                                    .then(function () {
                                        dispatch("getFireProjelerFormu");
                                    })
                            }
                            else {
                                portfoylerList.push(data.portfolio);
                                Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                                    "portfoyler": portfoylerList
                                })
                                    .then(function () {
                                        dispatch("getFireProjelerFormu");
                                    })
                            }
                        }
                        else {
                            portfoylerList.push(data.portfolio);
                            Firebase.db.collection("Admin").doc("ProjeBilgileri").set({
                                "portfoyler": portfoylerList
                            })
                                .then(function () {
                                    dispatch("getFireProjelerFormu");
                                })
                        }
                    })
            })
    },

    deleteProjelerFormu({ }) {
        if (window.confirm("Projeler formunun tüm verilerini silmek üzeresiniz emin misiniz?") === true) {
            var CVFullPath = []
            Firebase.storageRef.child("Portfoyler/").listAll()
                .then(function (res) {
                    if (res.items.length > 0) {
                        for (let i = 0; i < res.items.length; i++) {
                            CVFullPath.push(res.items[i].fullPath)
                        }
                        console.log(CVFullPath)
                    }
                })
                .then(function () {
                    if (CVFullPath != undefined) {
                        for (let i = 0; i < CVFullPath.length; i++) {
                            var desertRef = Firebase.storageRef.child(CVFullPath[i]);
                            desertRef.delete().then(function () {
                            }).catch(function (error) {
                            });
                        }
                    }
                })


            Firebase.db.collection("Admin").doc("ProjeBilgileri").delete()
                .then(function () {
                    alert("Projeler formunun tüm verileri silinmiştir.")
                    window.location.reload()
                })
                .catch(function (error) {
                    alert(error)
                })
        }
    },

    deleteTamalananProjeler({ dispatch }) {
        Firebase.db.collection('Admin').doc("ProjeBilgileri").update({
            TamamlananProjeler: firestore.FieldValue.delete()
        })
            .then(function () {
                dispatch("getFireProjelerFormu");
            })
    },

    deletePortfolioKayitlari({ dispatch }) {
        var CVFullPath = []
        Firebase.storageRef.child("Portfoyler/").listAll()
            .then(function (res) {
                if (res.items.length > 0) {
                    for (let i = 0; i < res.items.length; i++) {
                        CVFullPath.push(res.items[i].fullPath)
                    }
                    console.log(CVFullPath)
                }
            })
            .then(function () {
                if (CVFullPath != undefined) {
                    for (let i = 0; i < CVFullPath.length; i++) {
                        var desertRef = Firebase.storageRef.child(CVFullPath[i]);
                        desertRef.delete().then(function () {
                        }).catch(function (error) {
                        });
                    }
                }
            })
        Firebase.db.collection('Admin').doc("ProjeBilgileri").update({
            portfoyler: firestore.FieldValue.delete()
        })
            .then(function () {
                dispatch("getFireProjelerFormu");
            })
    },

    deletetekTamamlananProje({state}, index) {
        let tamamlananProjelerList = [];
        state.tamamlananProjelerDTO.splice(index, 1);
        tamamlananProjelerList = state.tamamlananProjelerDTO
        if (state.isPageProjectsFullDTO) {
            Firebase.db.collection('Admin').doc('ProjeBilgileri').update({
                "TamamlananProjeler": tamamlananProjelerList
            });
        }
    },

    changetProjeToFire({ state }, data) {
        state.tamamlananProjelerDTO[data.changeTamamlananProjelerIndex] = data.changeTamamlananProjeler;
        Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
            "TamamlananProjeler": state.tamamlananProjelerDTO
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
