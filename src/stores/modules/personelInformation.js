import Firebase from "../../config/firebase";
import { router } from "../../routes/router";
import { firestore } from "firebase";

const state = {
    PersonelBilgileriDTO: [],
    HobbiesDTO: [],
    CoverLetterDTO: "",
    Cv: "",
    foto: "",
    isPageFullDTO: false,
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
    },

    setCVDTO(state, CvURL) {
        state.Cv = CvURL
    },

    setFotoDTO(state, fotoURL) {
        state.foto = fotoURL
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

    //  ############################### 
    //  ############################### 
    //  CV VE FOTO BİLGİLERİNİN GETİRİLMESİ 
    //  ############################### 
    //  ############################### 
    getFireCVAndFoto({ commit }) {
        var CVFullPath;
        var FotoFullPath;
        Firebase.storageRef.child("CV/").listAll()
            .then(function (res) {
                if (res.items.length > 0) {
                    CVFullPath = res.items[0].fullPath;
                }
            })
            .then(function () {
                if (CVFullPath) {
                    Firebase.storageRef.child(CVFullPath).getDownloadURL()
                        .then(function (res2) {
                            commit("setCVDTO", res2)
                        })
                }
            })

        Firebase.storageRef.child("ProfilFoto/").listAll()
            .then(function (res) {
                if (res.items.length > 0) {
                    FotoFullPath = res.items[0].fullPath;
                }
            })
            .then(function () {
                if (FotoFullPath) {
                    Firebase.storageRef.child(FotoFullPath).getDownloadURL()
                        .then(function (res2) {
                            commit("setFotoDTO", res2)
                        })
                }
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
    //  CV VE PROFİL FOTOĞRAFI BİLGİLERİNİN GÖNDERİLMESİ 
    //  ############################### 
    //  ############################### 
    setFireCvAndFoto({ dispatch }, data) {
        if (data.cvAndFoto.cv == "" && data.cvAndFoto.foto == "") {
            alert("Lütfen yüklemek istediğiniz döküman ya da dökümanları seçiniz.")
        }

        else if (data.cvAndFoto.cv !== "" && data.cvAndFoto.foto == "") {
            Firebase.storage.ref(`CV/${data.cvAndFoto.cv.name}`).put(data.cvAndFoto.cv)
                .then(function () {
                    dispatch("getFireKisiselBilgiFormu");
                    dispatch("getFireCVAndFoto");
                    alert("Cv yükleme işleminiz tamamlanmıştır.");
                })

            if (state.isPageFullDTO) {
                Firebase.db.collection("Admin").doc("KisiselBilgiler").update({ "cvName": data.cvAndFotoName.cvName });
            }
            else {
                Firebase.db.collection("Admin").doc("KisiselBilgiler").set({ "cvName": data.cvAndFotoName.cvName });
            }

        }

        else if (data.cvAndFoto.cv == "" && data.cvAndFoto.foto !== "") {
            Firebase.storage.ref(`ProfilFoto/${data.cvAndFoto.foto.name}`).put(data.cvAndFoto.foto)
                .then(function () {
                    dispatch("getFireKisiselBilgiFormu");
                    dispatch("getFireCVAndFoto");
                    alert("Profil fotoğrafı yükleme işleminiz tamamlanmıştır.");
                })
            if (state.isPageFullDTO) {
                Firebase.db.collection("Admin").doc("KisiselBilgiler").update({ "fotoName": data.cvAndFotoName.fotoName });
            }
            else {
                Firebase.db.collection("Admin").doc("KisiselBilgiler").set({ "fotoName": data.cvAndFotoName.fotoName });
            }

        }

        else {
            Firebase.storage.ref(`CV/${data.cvAndFoto.cv.name}`).put(data.cvAndFoto.cv);
            Firebase.storage.ref(`ProfilFoto/${data.cvAndFoto.foto.name}`).put(data.cvAndFoto.foto)
                .then(function () {
                    dispatch("getFireKisiselBilgiFormu");
                    dispatch("getFireCVAndFoto");
                    alert("Cv ve profil fotoğrafı yükleme işleminiz tamamlanmıştır.");
                })
            if (state.isPageFullDTO) {
                Firebase.db.collection("Admin").doc("KisiselBilgiler").update({ "cvName": data.cvAndFotoName.cvName });
                Firebase.db.collection("Admin").doc("KisiselBilgiler").update({ "fotoName": data.cvAndFotoName.fotoName });
            }
            else {
                Firebase.db.collection("Admin").doc("KisiselBilgiler").set({ "cvName": data.cvAndFotoName.cvName });
                Firebase.db.collection("Admin").doc("KisiselBilgiler").set({ "fotoName": data.cvAndFotoName.fotoName });
            }
        }

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
            dispatch("deleteCvAndFoto")
        }
    },

    deletePersonelBilgileri({ dispatch }) {
        Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
            PersonelBilgileri: firestore.FieldValue.delete()
        }).then(function () {
            alert("Personel bilgileri adlı veriler silinmiştir.");
            dispatch("getFireKisiselBilgiFormu");
        })
    },

    deleteHobiler({ dispatch }) {
        Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
            Hobiler: firestore.FieldValue.delete()
        }).then(function () {
            alert("Hobiler adlı veriler silinmiştir.");
            dispatch("getFireKisiselBilgiFormu");
        })
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

    deleteOnYazi({ dispatch }) {
        Firebase.db.collection('Admin').doc('KisiselBilgiler').update({
            OnYazi: firestore.FieldValue.delete()
        }).then(function () {
            alert("Ön yazı adlı veriler silinmiştir.");
            dispatch("getFireKisiselBilgiFormu");
        })
    },

    deleteCvAndFoto({ }) {
        var CVFullPath;
        var FotoFullPath;
        Firebase.storageRef.child("CV/").listAll()
            .then(function (res) {
                if (res.items.length > 0) {
                    CVFullPath = res.items[0].fullPath;
                }
            })
            .then(function () {
                if (CVFullPath != undefined) {
                    var desertRef = Firebase.storageRef.child(CVFullPath);
                    // Delete the file
                    desertRef.delete().then(function () {
                        // File deleted successfully
                    }).catch(function (error) {
                        // Uh-oh, an error occurred!
                    });
                }
            })

        Firebase.storageRef.child("ProfilFoto/").listAll()
            .then(function (res) {
                if (res.items.length > 0) {
                    FotoFullPath = res.items[0].fullPath;
                }
            })
            .then(function () {
                if (FotoFullPath != undefined) {
                    var desertRef = Firebase.storageRef.child(FotoFullPath);
                    // Delete the file
                    desertRef.delete().then(function () {
                        // File deleted successfully
                    }).catch(function (error) {
                        // Uh-oh, an error occurred!
                    });
                }
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}