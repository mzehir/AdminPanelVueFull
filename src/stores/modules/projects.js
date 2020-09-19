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

    deleteTamalananProjeler({ dispatch, state }) {
        if (state.tamamlananProjelerDTO == undefined || state.tamamlananProjelerDTO == "") {
            alert("Silinecek veri bulunamadı...");
        } else {
            Firebase.db.collection('Admin').doc("ProjeBilgileri").update({
                TamamlananProjeler: firestore.FieldValue.delete()
            })
                .then(function () {
                    dispatch("getFireProjelerFormu");
                })
        }
    },

    deletePortfolioKayitlari({ dispatch, state }) {
        var CVFullPath = []
        if (state.portfoyDTO == undefined || state.portfoyDTO == "") {
            alert("Silinecek veri bulunamadı...");
        } else {
            Firebase.storageRef.child("Portfoyler/").listAll()
                .then(function (res) {
                    if (res.items.length > 0) {
                        for (let i = 0; i < res.items.length; i++) {
                            CVFullPath.push(res.items[i].fullPath)
                        }
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
        }

    },

    deletetekTamamlananProje({ state }, index) {
        let tamamlananProjelerList = [];
        state.tamamlananProjelerDTO.splice(index, 1);
        tamamlananProjelerList = state.tamamlananProjelerDTO
        if (state.isPageProjectsFullDTO) {
            Firebase.db.collection('Admin').doc('ProjeBilgileri').update({
                "TamamlananProjeler": tamamlananProjelerList
            });
        }
    },

    deletePortfolioToFire({ state }, index) {
        let portfoylerList = [];
        var desertRef = Firebase.storageRef.child('Portfoyler/' + state.portfoyDTO[index].portfoyFotoName);
        desertRef.delete()
        state.portfoyDTO.splice(index, 1);
        portfoylerList = state.portfoyDTO
        if (state.isPageProjectsFullDTO) {
            Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                "portfoyler": portfoylerList
            })
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
    },

    changePortfolioToFire({ dispatch, state }, data) {
        if (data.changePortfoyFoto == undefined || data.changePortfoyFoto == "") {
            state.portfoyDTO[data.changePortfolioIndex] = data.changePortfolio;
            Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                "portfoyler": state.portfoyDTO
            })
                .then(function () {
                    dispatch("getFireProjelerFormu");
                })
        }
        else {
            console.log(data.changePortfoyFoto.name);
            if (state.portfoyDTO) {
                for (let i = 0; i < state.portfoyDTO.length; i++) {
                    if (state.portfoyDTO[i].portfoyFotoName == data.changePortfoyFoto.name) {
                        alert("HATA!!!" + " " + data.changePortfoyFoto.name + " " + "fotoğraf ismiyle daha önce yükleme yaptınız. Lütfen fotoğraf ismini değiştiriniz.")
                        return;
                    }
                };
            }
            var desertRef = Firebase.storageRef.child('Portfoyler/' + data.changePortfolio.portfoyFotoName);
            desertRef.delete()
                .then(function () {
                    Firebase.storage.ref(`Portfoyler/${data.changePortfoyFoto.name}`).put(data.changePortfoyFoto)
                        .then(function (res) {
                            Firebase.storageRef.child(res.ref.fullPath).getDownloadURL()
                                .then(function (res2) {
                                    data.changePortfolio.portfoyFotoUrl = res2
                                    data.changePortfolio.portfoyFotoName = data.changePortfoyFoto.name
                                })
                                .then(function () {
                                    state.portfoyDTO[data.changePortfolioIndex] = data.changePortfolio;
                                    Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                                        "portfoyler": state.portfoyDTO
                                    })
                                        .then(function () {
                                            dispatch("getFireProjelerFormu");
                                        })
                                })
                        })
                })
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
