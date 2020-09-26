<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3 class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg">İletişim Formu</h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- İLETİŞİM BİLGİLERİ BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >İletişim Bilgileri</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>GSM:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin '0 541 555 5555' gibi"
              v-model="iletisimBilgileri.gsm"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Lokasyon:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'Beşiktaş / İSTANBUL' gibi"
              v-model="iletisimBilgileri.lokasyon"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Email:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'deneme@gmail.com' gibi"
              v-model="iletisimBilgileri.email"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Website:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'mynet'"
              v-model="iletisimBilgileri.website"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="iletisimBilgileriKaydet" class="btn btn-success btn-block mt-3">Kaydet</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >İletişim Bilgi Kayıtları</h4>
          </div>
          <div class="row mb-4">
            <span class="col-md-12">
              GSM:
              <strong>{{getIletisimBilgileri ? getIletisimBilgileri.gsm : ""}}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Lokasyon:
              <strong>{{getIletisimBilgileri ? getIletisimBilgileri.lokasyon : ""}}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Email:
              <strong>{{getIletisimBilgileri ? getIletisimBilgileri.email : ""}}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Website:
              <strong>{{getIletisimBilgileri ? getIletisimBilgileri.website : ""}}</strong>
            </span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="iletisimBilgileriSil" class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div>
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- SOSYAL MEDYA HESAPLARI BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >Sosyal Medya Hesapları</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Hesap:</strong>
            </span>
            <select
              v-model="sosyalMedyaHesaplari.smIconCode"
              name
              id
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
            >
              <option class="smHesapOption" value="fab fa-facebook-f">Facebook</option>
              <option class="smHesapOption" value="fab fa-twitter">Twitter</option>
              <option class="smHesapOption" value="fab fa-instagram">İnstagram</option>
              <option class="smHesapOption" value="fab fa-github">Github</option>
              <option class="smHesapOption" value="fab fa-linkedin-in">Linkedin</option>
              <option class="smHesapOption" value="fab fa-youtube">Youtube</option>
              <option class="smHesapOption" value="fab fa-pinterest-p">Pinterest</option>
              <option class="smHesapOption" value="fab fa-reddit-alien">Reddit</option>
              <option class="smHesapOption" value="fab fa-vimeo-v">Vimeo</option>
              <option class="smHesapOption" value="fab fa-blogger-b">Blogger</option>
              <option class="smHesapOption" value="fab fa-tumblr">Tumblr</option>
              <option class="smHesapOption" value="fab fa-flickr">Flickr</option>
              <option class="smHesapOption" value="fab fa-google-plus-g">Google Plus</option>
            </select>
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Hesap Adresi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Hesap profil adresi"
              v-model="sosyalMedyaHesaplari.smUrlAdress"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="smHesaplariKaydet" class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >S.M.Hesap Kayıtları</h4>
          </div>
          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Hesap</th>
                  <th scope="col">Hesap Adresi</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(smHesap, index) in getsmHesaplari">
                  <th scope="row">{{index + 1}}</th>
                  <td>
                    {{smHesap.smInnerHtml}}
                    <br />
                    <i :class="smHesap.smIconCode"></i>
                  </td>
                  <td>{{smHesap.smUrlAdress}}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      @click="tekSMGuncelle(index)"
                    >Güncelle</button>
                  </td>
                  <td>
                    <button @click="tekSMSil(index)" class="btn btn-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="smHesaplariSil" class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div>
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- REFERANSLAR BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Referanslar</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Ad ve Soyad:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Referans olan kişinin adı ve soyadı"
              v-model="referanslar.nameAndSurname"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>GSM:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Referans olan kişinin telefon numarası"
              v-model="referanslar.gsm"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Email:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Referans olan kişinin email adresi"
              v-model="referanslar.email"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Website:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Referans olan kişinin websitesi"
              v-model="referanslar.website"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Çalıştığı Şirket:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Referans olan kişinin çalıştığı yer, kurum, şirket ismi"
              v-model="referanslar.calisilanSirket"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="referanslarKaydet" class="btn btn-success btn-block mt-3">Kaydet</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Referans Bilgi Kayıtları</h4>
          </div>
          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ad ve Soyad</th>
                  <th scope="col">GSM</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(referans, index) in getReferanslar">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{referans.nameAndSurname}}</td>
                  <td>{{referans.gsm}}</td>
                  <td>{{referans.email}}</td>
                  <td>{{referans.website}}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal2"
                      @click="tekReferansGuncelle(index)"
                    >Güncelle</button>
                  </td>
                  <td>
                    <button class="btn btn-danger" @click="tekReferansSil(index)">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="referanslarSil" class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div>
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- HARİTA BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >Konum Kaydedici</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>xxx:</strong>
            </span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="smHesaplariKaydet" class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div> -->
        <!-- ------------------------------- -->
        <!-- <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >Konum Gösterici</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>xxx:</strong>
            </span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="smHesaplariSil" class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div> -->

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button
            @click="iletisimFormuSil"
            class="btn btn-danger btn-block mt-5 mb-3"
          >Tüm Bilgileri Sil</button>
        </div>
      </div>
    </div>
    <!-- ############################### -->
    <!-- ############################### -->
    <!-- MODAL BÖLÜMÜ -->
    <!-- ############################### -->
    <!-- ############################### -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu SM Hesapları</strong>
            </h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body pr-4">
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Hesap:</strong>
              </span>
              <select
                v-model="changeSmHesaplar.smIconCode"
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              >
                <option class="smHesapOptionModal" value="fab fa-facebook-f">Facebook</option>
                <option class="smHesapOptionModal" value="fab fa-twitter">Twitter</option>
                <option class="smHesapOptionModal" value="fab fa-instagram">İnstagram</option>
                <option class="smHesapOptionModal" value="fab fa-github">Github</option>
                <option class="smHesapOptionModal" value="fab fa-linkedin-in">Linkedin</option>
                <option class="smHesapOptionModal" value="fab fa-youtube">Youtube</option>
                <option class="smHesapOptionModal" value="fab fa-pinterest-p">Pinterest</option>
                <option class="smHesapOptionModal" value="fab fa-reddit-alien">Reddit</option>
                <option class="smHesapOptionModal" value="fab fa-vimeo-v">Vimeo</option>
                <option class="smHesapOptionModal" value="fab fa-blogger-b">Blogger</option>
                <option class="smHesapOptionModal" value="fab fa-tumblr">Tumblr</option>
                <option class="smHesapOptionModal" value="fab fa-flickr">Flickr</option>
                <option class="smHesapOptionModal" value="fab fa-google-plus-g">Google Plus</option>
              </select>
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Adresi:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Hesap profil adresi"
                v-model="changeSmHesaplar.smUrlAdress"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
            <button @click="changeSMKaydet" type="button" class="btn btn-success">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------- -->

    <!-- ############################### -->
    <!-- ############################### -->
    <!-- MODAL2 BÖLÜMÜ -->
    <!-- ############################### -->
    <!-- ############################### -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu Referanslar</strong>
            </h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body pr-4">
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Ad ve Soyad:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Referans olan kişinin adı ve soyadı"
                v-model="changeReferans.nameAndSurname"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>GSM:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Referans olan kişinin telefon numarası"
                v-model="changeReferans.gsm"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Email:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Referans olan kişinin email adresi"
                v-model="changeReferans.email"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Website:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Referans olan kişinin websitesi"
                v-model="changeReferans.website"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Çalışılan Şirket:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Referans olan kişinin çalıştığı yer, kurum veya şirket ismi"
                v-model="changeReferans.calisilanSirket"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
            <button @click="changeReferansKaydet" type="button" class="btn btn-success">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iletisimBilgileri: {
        gsm: "",
        lokasyon: "",
        email: "",
        website: "",
      },
      referanslar: {
        nameAndSurname: "",
        gsm: "",
        email: "",
        website: "",
        calisilanSirket: "",
      },
      sosyalMedyaHesaplari: {
        smInnerHtml: "",
        smIconCode: "",
        smUrlAdress: "",
      },

      changeSmHesaplar: [],
      changeSmHesaplarIndex: "",

      changeReferans: [],
      changeReferansIndex: "",
    };
  },
  methods: {
    iletisimBilgileriKaydet() {
      this.$store.dispatch("iletisimBilgileriToFire", this.iletisimBilgileri);
    },

    referanslarKaydet() {
      this.$store.dispatch("referanslarToFire", this.referanslar);
    },

    smHesaplariKaydet() {
      let classNamesmHesapOption = document.getElementsByClassName(
        "smHesapOption"
      );
      for (let i = 0; i < classNamesmHesapOption.length; i++) {
        if (
          classNamesmHesapOption[i].value ==
          this.sosyalMedyaHesaplari.smIconCode
        ) {
          this.sosyalMedyaHesaplari.smInnerHtml =
            classNamesmHesapOption[i].innerHTML;
        }
      }
      this.$store.dispatch("smHesaplariToFire", this.sosyalMedyaHesaplari);
    },

    iletisimFormuSil() {
      if (!this.$store.state.contact.isPageIletisimFormuFullDTO) {
        alert("Silinecek veri bulunamadı.");
      } else {
        this.$store.dispatch("deleteIletisimFormu");
      }
    },

    iletisimBilgileriSil() {
      this.$store.dispatch("deleteIletisimBilgileri");
    },

    smHesaplariSil() {
      this.$store.dispatch("deleteSMHesaplari");
    },

    referanslarSil() {
      this.$store.dispatch("deleteReferanslar");
    },

    tekSMSil(index) {
      this.$store.dispatch("deleteTekSMHesap", index);
    },

    tekReferansSil(index) {
      this.$store.dispatch("deleteTekReferans", index);
    },

    tekSMGuncelle(index) {
      for (
        let i = 0;
        i < this.$store.state.contact.smHesaplariDTO.length;
        i++
      ) {
        this.changeSmHesaplar = this.$store.state.contact.smHesaplariDTO[index];
        this.changeSmHesaplarIndex = index;
      }
    },

    tekReferansGuncelle(index) {
      for (
        let i = 0;
        i < this.$store.state.contact.referanslarDTO.length;
        i++
      ) {
        this.changeReferans = this.$store.state.contact.referanslarDTO[index];
        this.changeReferansIndex = index;
      }
    },

    changeSMKaydet() {
      let classNameSMHesapOptionModal = document.getElementsByClassName(
        "smHesapOptionModal"
      );
      for (let i = 0; i < classNameSMHesapOptionModal.length; i++) {
        if (
          classNameSMHesapOptionModal[i].value ==
          this.changeSmHesaplar.smIconCode
        ) {
          this.changeSmHesaplar.smInnerHtml =
            classNameSMHesapOptionModal[i].innerHTML;
        }
      }
      this.$store.dispatch("changeSMToFire", {
        changeSmHesaplar: this.changeSmHesaplar,
        changeSmHesaplarIndex: this.changeSmHesaplarIndex,
      });
    },

    changeReferansKaydet() {
      this.$store.dispatch("changeReferansToFire", {
        changeReferans: this.changeReferans,
        changeReferansIndex: this.changeReferansIndex,
      });
    },
  },
  created() {
    this.$store.dispatch("getIletisimFormu");

    var hash = window.location.hash;
    var newString01 = hash.replace("#", "");
    localStorage.setItem("urlBilgisi", newString01);
  },

  computed: {
    getIletisimBilgileri() {
      return this.$store.state.contact.iletisimBilgileriDTO;
    },

    getReferanslar() {
      return this.$store.state.contact.referanslarDTO;
    },

    getsmHesaplari() {
      return this.$store.state.contact.smHesaplariDTO;
    },
  },
};
</script>
<style scoped>
.scrollDiv {
  overflow-y: scroll;
  height: 650px;
}
.textFamily {
  font-family: "Times New Roman", Times, serif;
}
span {
  padding-top: 8px;
}
</style>