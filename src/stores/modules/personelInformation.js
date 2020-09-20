import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    PersonelBilgileriDTO: [],
    HobbiesDTO: [],
    CoverLetterDTO: "",
    isPageFullDTO: false,
    fullPathCv: "",
    urlCv: "",
    fullPathFoto: "",
    urlFoto: ""
}

const getters = {

}

const mutations = {
    isPageFullDTO(state, data) {
        state.isPageFullDTO = data
    },

    setKisiselBilgilerFormuDTO(state, data) {
        state.PersonelBilgileriDTO = data.PersonelBilgileri;
        state.HobbiesDTO = data.Hobiler;
        state.CoverLetterDTO = data.OnYazi;
        state.fullPathCv = data.cvFullPath;
        state.urlCv = data.cvUrl;

        state.fullPathFoto = data.fotoFullPath;
        state.urlFoto = data.fotoUrl
    },
}

const actions = {
    //  ############################### 
    //  ############################### 
    //  KİŞİSEL BİLGİ FORMU SAYFASININ TAMAMININ GETİRİLMESİ 
    //  ############################### 
    //  ############################### 
    getFireKisiselBilgiFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('KisiselBilgiler');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('setKisiselBilgilerFormuDTO', doc.data())
                commit('isPageFullDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isPageFullDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    // *****************************************************************************************************************************************************************

    //  ############################### 
    //  ############################### 
    //  KİŞİSEL BİLGİLERİN GÖNDERİLMESİ 
    //  ############################### 
    //  ############################### 
    setFirePersonelBilgileri({ state, dispatch }, data) {
        if (state.isPageFullDTO) {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                "PersonelBilgileri": data
            }).then(function () {
                dispatch("getFireKisiselBilgiFormu");
                alert("Kişisel bilgi yükleme işleminiz tamamlandı.");
            })
        }
        else {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').set({
                "PersonelBilgileri": data
            }).then(function () {
                dispatch("getFireKisiselBilgiFormu");
                alert("Kişisel bilgi yükleme işleminiz tamamlandı.");
            })
        }
    },

    //  ############################### 
    //  ############################### 
    //  HOBİ BİLGİLERİNİN GÖNDERİLMESİ 
    //  ############################### 
    //  ############################### 
    setFireHobbies({ state, dispatch }, data) {
        let HobbiesList = [];
        if (state.isPageFullDTO) {
            if (state.HobbiesDTO) {
                for (let i = 0; i < state.HobbiesDTO.length; i++) {
                    HobbiesList.push(state.HobbiesDTO[i])
                }
                HobbiesList.push(data)
                Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                    "Hobiler": HobbiesList
                }).then(function () {
                    dispatch("getFireKisiselBilgiFormu");
                    alert("Hobi ekleme işleminiz tamamlandı.");
                });
            }
            else {
                HobbiesList.push(data)
                Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                    "Hobiler": HobbiesList
                }).then(function () {
                    dispatch("getFireKisiselBilgiFormu");
                    alert("Hobi ekleme işleminiz tamamlandı.");
                });
            }
        }
        else {
            HobbiesList.push(data)
            Firebase.db.collection('Admin').doc('KisiselBilgiler').set({
                "Hobiler": HobbiesList
            }).then(function () {
                dispatch("getFireKisiselBilgiFormu");
                alert("Hobi ekleme işleminiz tamamlandı.");
            });
        }
    },

    //  ############################### 
    //  ############################### 
    //  ÖN YAZI BİLGİLERİNİN GÖNDERİLMESİ 
    //  ############################### 
    //  ############################### 
    setFireCoverLetter({ state, dispatch }, data) {
        if (state.isPageFullDTO) {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                "OnYazi": data
            }).then(function () {
                dispatch("getFireKisiselBilgiFormu");
                alert("Ön yazı ekleme işleminiz tamamlandı.")
            });
        }
        else {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').set({
                "OnYazi": data
            }).then(function () {
                dispatch("getFireKisiselBilgiFormu");
                alert("Ön yazı ekleme işleminiz tamamlandı.")
            });
        }
    },

    //  ############################### 
    //  ############################### 
    //  CV VE PROFİL FOTOĞRAFI BİLGİLERİ FONKSİYONLARI
    //  ############################### 
    //  ############################### 
    setFireCv({ state, dispatch }, data) {
        if (data.cvFile == "" || data.cvName == "") {
            alert("Kaydedilecek dosya bulunamadı...");
        }
        else {
            if (state.fullPathCv == "" || state.fullPathCv == undefined) {
                dispatch("sendFireCv", data);
            }
            else {
                dispatch("deleteFireCv", data);
            }
        }
    },

    deleteFireCv({ dispatch, state }, data) {
        var desertRef = Firebase.storageRef.child(state.fullPathCv);
        desertRef.delete()
            .then(function () {
                if (data == "silVeDur") {
                    Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                        cvFullPath: firestore.FieldValue.delete(),
                        cvUrl: firestore.FieldValue.delete()
                    })
                        .then(function () {
                            dispatch("getFireKisiselBilgiFormu")
                            alert("CV dosyası silindi.");
                        })
                } else {
                    dispatch("sendFireCv", data)
                }
            })
    },

    sendFireCv({ state, dispatch }, data) {
        Firebase.storage.ref(`CV/${data.cvName}`).put(data.cvFile)
            .then(function (res) {
                dispatch("getFireCv", res.ref.fullPath);
            })
    },

    getFireCv({ dispatch, state }, data) {
        Firebase.storageRef.child(data).getDownloadURL()
            .then(function (res) {
                if (state.isPageFullDTO) {
                    Firebase.db.collection("Admin").doc("KisiselBilgiler").update({
                        "cvFullPath": data,
                        "cvUrl": res
                    }).then(function () {
                        alert("Cv kaydedilmiştir.");
                        dispatch("getFireKisiselBilgiFormu");
                    })
                }
                else {
                    Firebase.db.collection("Admin").doc("KisiselBilgiler").set({
                        "cvFullPath": data,
                        "cvUrl": res
                    }).then(function () {
                        alert("Cv kaydedilmiştir.");
                        dispatch("getFireKisiselBilgiFormu");
                    })
                }
            })
    },


    setFireFoto({ state, dispatch }, data) {
        if (data.fotoFile == "" || data.fotoName == "") {
            alert("Kaydedilecek dosya bulunamadı...");
        }
        else {
            if (state.fullPathFoto == "" || state.fullPathFoto == undefined) {
                dispatch("sendFireFoto", data);
            }
            else {
                dispatch("deleteFireFoto", data);
            }
        }
    },

    deleteFireFoto({ dispatch, state }, data) {
        var desertRef = Firebase.storageRef.child(state.fullPathFoto);
        desertRef.delete()
            .then(function () {
                if (data == "silVeDur") {
                    Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                        fotoFullPath: firestore.FieldValue.delete(),
                        fotoUrl: firestore.FieldValue.delete()
                    })
                        .then(function () {
                            dispatch("getFireKisiselBilgiFormu")
                            alert("Profil fotoğrafı silindi.");
                        })
                } else {
                    dispatch("sendFireFoto", data)
                }
            })
    },

    sendFireFoto({ state, dispatch }, data) {
        Firebase.storage.ref(`FOTO/${data.fotoName}`).put(data.fotoFile)
            .then(function (res) {
                dispatch("getFireFoto", res.ref.fullPath);
            })
    },

    getFireFoto({ state, dispatch }, data) {
        Firebase.storageRef.child(data).getDownloadURL()
            .then(function (res) {
                if (state.isPageFullDTO) {
                    Firebase.db.collection("Admin").doc("KisiselBilgiler").update({
                        "fotoFullPath": data,
                        "fotoUrl": res
                    }).then(function () {
                        alert("Profil fotoğrafı kaydedilmiştir.");
                        dispatch("getFireKisiselBilgiFormu");
                    })
                }
                else {
                    Firebase.db.collection("Admin").doc("KisiselBilgiler").set({
                        "fotoFullPath": data,
                        "fotoUrl": res
                    }).then(function () {
                        alert("Profil fotoğrafı kaydedilmiştir.");
                        dispatch("getFireKisiselBilgiFormu");
                    })
                }
            })
    },



    // *****************************************************************************************************************************************************************
    deleteKisiselBilgiFormu({ dispatch }) {
        if (window.confirm("Kişisel bilgi formunun tüm verilerini silmek üzeresiniz emin misiniz?") === true) {
            Firebase.db.collection("Admin").doc("KisiselBilgiler").delete()
                .then(function () {
                    alert("Kişisel bilgi formunun tüm verileri silinmiştir.");
                    window.location.reload();
                })
                .catch(function (error) {
                    alert(error)
                })
            dispatch("deleteFireCv", "hepsiniSil");
        }
    },

    deletePersonelBilgileri({ dispatch, state }) {
        if (state.PersonelBilgileriDTO == undefined || state.PersonelBilgileriDTO == "") {
            alert("Silinecek veri bulunamadı...")
        } else {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                PersonelBilgileri: firestore.FieldValue.delete()
            }).then(function () {
                alert("Personel bilgileri adlı veriler silinmiştir.");
                dispatch("getFireKisiselBilgiFormu");
            })
        }

    },

    deleteHobiler({ dispatch, state }) {
        if (state.HobbiesDTO == undefined || state.HobbiesDTO == "") {
            alert("Silinecek veri bulunamadı...")
        } else {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                Hobiler: firestore.FieldValue.delete()
            }).then(function () {
                alert("Hobiler adlı veriler silinmiştir.");
                dispatch("getFireKisiselBilgiFormu");
            })
        }

    },

    deleteHobi({ state }, index) {
        let HobbiesList = [];
        state.HobbiesDTO.splice(index, 1);
        HobbiesList = state.HobbiesDTO
        if (state.isPageFullDTO) {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                "Hobiler": HobbiesList
            })
        }
    },

    deleteOnYazi({ dispatch, state }) {
        if (state.CoverLetterDTO == undefined || state.CoverLetterDTO == "") {
            alert("Silinecek veri bulunamadı...")
        } else {
            Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
                OnYazi: firestore.FieldValue.delete()
            }).then(function () {
                alert("Ön yazı adlı veriler silinmiştir.");
                dispatch("getFireKisiselBilgiFormu");
            })
        }

    },
}

export default {
    state,
    getters,
    mutations,
    actions
}