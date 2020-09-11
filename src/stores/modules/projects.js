import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    isPageProjectsFullDTO: "",
    tamamlananProjelerDTO: [],
    portfoyDTO: [],
    portfoyFotolarNameDTO: [],
    portfoyFotolarURLDTO: [],
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
        // console.log(state.tamamlananProjelerDTO)
    },

    setPortfoyFotolarURLDTO(state, data) {
        state.portfoyFotolarURLDTO = data
        console.log(state.portfoyFotolarURLDTO)
    },

    setPortfoyFotolarNameDTO(state, data) {
        var newString01 = [];
        for (let i = 0; i < data.length; i++) {
            newString01.push(data[i].replace("Portfoyler/", ""))
        };
        state.portfoyFotolarNameDTO = newString01
        console.log(state.portfoyFotolarNameDTO)
    }
}

const actions = {
    getFireProjelerFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('ProjeBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('setProjelerFormuDTO', doc.data())
                commit('isPageProjectsFullDTO', doc.exists)
            }
            else {
                console.log("Getirilecek veri yok")
                commit('isPageProjectsFullDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    getFirePortfoyFotolar({ commit }) {
        let fotolarFullPath = [];
        let fotolarURL = [];
        Firebase.storageRef.child("Portfoyler/").listAll()
            .then(function (res) {
                if (res.items.length > 0) {
                    for (let i = 0; i < res.items.length; i++) {
                        fotolarFullPath.push(res.items[i].fullPath)
                    }
                    commit("setPortfoyFotolarNameDTO", fotolarFullPath)
                }
            })
            .then(function () {
                if (fotolarFullPath) {
                    for (let i = 0; i < fotolarFullPath.length; i++) {
                        Firebase.storageRef.child(fotolarFullPath[i]).getDownloadURL()
                            .then(function (res2) {
                                fotolarURL.push(res2)
                            })
                    }
                    commit("setPortfoyFotolarURLDTO", fotolarURL)
                }
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
        debugger
        if (state.portfoyFotolarNameDTO.length > 0) {
            debugger
            //Burası yapılacak
            for (let i = 0; i < state.portfoyFotolarNameDTO.length; i++) {
                if (state.portfoyFotolarNameDTO[i] == data.portfoyFoto.name) {
                    alert( data.portfoyFoto.name + " " + "fotoğraf ismiyle daha önce yükleme yaptınız. Lütfen fotoğraf ismini değiştiriniz.")
                }
            }
        }
        else if (state.isPageProjectsFullDTO) {
            debugger
            if (state.portfoyDTO) {
                let portfoylerList = [];
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
                Firebase.storage.ref(`Portfoyler/${data.portfoyFoto.name}`).put(data.portfoyFoto)
                    .then(function () {
                        dispatch("getFirePortfoyFotolar");
                    })
            }
            else {
                debugger
                let portfoylerList = [];
                portfoylerList.push(data.portfolio)
                Firebase.db.collection("Admin").doc("ProjeBilgileri").update({
                    "portfoyler": portfoylerList
                })
                    .then(function () {
                        dispatch("getFireProjelerFormu");
                    })
                Firebase.storage.ref(`Portfoyler/${data.portfoyFoto.name}`).put(data.portfoyFoto)
                    .then(function () {
                        dispatch("getFirePortfoyFotolar");
                    })
            }
        }
        else {
            debugger
            let portfoylerList = [];
            portfoylerList.push(data.portfolio)
            Firebase.db.collection("Admin").doc("ProjeBilgileri").set({
                "portfoyler": portfoylerList
            })
                .then(function () {
                    dispatch("getFireProjelerFormu");
                })
            Firebase.storage.ref(`Portfoyler/${data.portfoyFoto.name}`).put(data.portfoyFoto)
                .then(function () {
                    dispatch("getFirePortfoyFotolar");
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
