<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3
          class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg"
        >
          Kişisel Bilgiler Formu
        </h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- KİŞİSEL BİLGİLER BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Kişisel Bilgiler
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>İsim:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'AHMET' gibi"
              v-model="personelBilgileri.name"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Soyisim:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'SARI' gibi"
              v-model="personelBilgileri.surName"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Doğum Tarihi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin '25.06.1992' gibi"
              v-model="personelBilgileri.birtday"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Meslek 1:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'Developer' gibi"
              v-model="personelBilgileri.business"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Meslek 2:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'Web Developer' gibi"
              v-model="personelBilgileri.business2"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Meslek 3:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin 'Backend Developer' gibi"
              v-model="personelBilgileri.business3"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Deneyim Yılı:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin '7' gibi"
              v-model="personelBilgileri.totalExperience"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Toplam Proje:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Örneğin '30' gibi"
              v-model="personelBilgileri.totalProjects"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Mevcut İş:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Çalışmıyorsa 'freelancer' gibi ya da 'şirket ismi' gibi"
              v-model="personelBilgileri.isWorking"
            />
          </div>

          <div
            class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center mb-3"
          >
            <button
              @click="personelBilgileriKaydet"
              class="btn btn-success btn-block mt-3"
            >
              Kaydet
            </button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Kişisel Bilgi Kayıtları
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-md-12">
              İsim:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.name : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Soyisim:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.surName : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Doğum Yılı:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.birtday : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Meslek 1:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.business : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Meslek 2:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.business2 : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Meslek 3:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.business3 : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Deneyim Yılı:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.totalExperience : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Toplam Proje:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.totalProjects : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Mevcut İş:
              <strong>{{
                getPersonelBilgileri ? getPersonelBilgileri.isWorking : ""
              }}</strong>
            </span>
          </div>

          <div
            class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center mb-3"
          >
            <button
              @click="personelBilgileriSil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <!-- ############################### -->
        <!-- ############################### -->
        <!-- CV BÖLÜMÜ && PROFİL FOTOĞRAFI && SES DOSYASI BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->

        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              CV & Foto & Ses Dosyası
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>CV:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-6 pr-3 ml-0 pb-3 pt-1 form-control-file"
              type="file"
              placeholder="Bu alandan cv'nizi yükleyiniz."
              @change="cvDataTut($event)"
            />
            <button
              @click="cvKaydet"
              class="btn btn-outline-success btn-lg rounded-circle ml-4 mt-0"
            >
              <i class="fas fa-check-circle"></i>
            </button>
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Fotoğraf:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-6 pr-3 ml-0 pb-3 pt-1 form-control-file"
              type="file"
              placeholder="Bu alandan cv'nizi yükleyiniz."
              @change="fotoDataTut($event)"
            />
            <button
              @click="fotoKaydet"
              class="btn btn-outline-success btn-lg rounded-circle ml-4 mt-0"
            >
              <i class="fas fa-check-circle"></i>
            </button>
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Favori Müzik:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-6 pr-3 ml-0 pb-3 pt-1 form-control-file"
              type="file"
              placeholder="Bu alandan favori müziğinizi yükleyiniz."
              @change="muzikDataTut($event)"
            />
            <button
              @click="muzikKaydet"
              class="btn btn-outline-success btn-lg rounded-circle ml-4 mt-0"
            >
              <i class="fas fa-check-circle"></i>
            </button>
          </div>
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">UYARI!!!</h4>
            <p>
              Cv, fotoğraf ve ses dosyası yükleme işlemi tamamlanana kadar
              bekleyiniz. Tamamlandığında ekrana tamamlanmayla alakalı uyarı
              gelecektir.
            </p>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              CV & Foto & Ses Dosyası Kaydı
            </h4>
          </div>

          <div class="row mb-4">
            <div class="col-md-6">
              <img
                v-if="getCv"
                class="img-fluid"
                height="100"
                width="100"
                src="../.././assets/pdfBg.png"
              />
              <br />
              <a v-if="getCv" :href="getCv" target="_blank">Görüntüle</a>
              <br />
              <button
                @click="cvSil"
                class="btn btn-outline-danger btn-lg rounded-circle"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="col-md-6">
              <img
                v-if="getFoto"
                class="img-fluid"
                height="100"
                width="100"
                :src="getFoto"
              />
              <br />
              <br />
              <button
                @click="fotoSil"
                class="btn btn-outline-danger btn-lg rounded-circle"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>

            <div class="col-md-12 mt-4">
              <audio preload="auto" controls autoplay loop>
                <source id="mpeg" :src="getMuzik" type="audio/mpeg" />
                Burası tarayıcınız tarafından desteklenmiyor.
              </audio>
              <br>
              <a target="_blank" :href="getMuzik">Ses Dosyası Yeni Sayfada Aç </a>
              <br />
              <button
                @click="muzikSil"
                class="btn btn-outline-danger btn-lg rounded-circle"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- ############################### -->
        <!-- ############################### -->
        <!-- HOBİLER BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Hobiler
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Hobiler:</strong>
            </span>
            <select
              v-model="hobbies.hobi"
              id
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
            >
              <option value="fas fa-campground">Seyahat</option>
              <option value="fas fa-film">Film</option>
              <option value="fas fa-chess">Satranç</option>
              <option value="fas fa-book">Kitap Okuma</option>
              <option value="fas fa-swimmer">Yüzmek</option>
              <option value="fas fa-music">Müzikle İlgilenme</option>
              <option value="fab fa-blogger-b">Blog Yazma</option>
              <option value="fas fa-dumbbell">Spor Yapma</option>
              <option value="fas fa-camera-retro">Fotoğrafçılık</option>
              <option value="fas fa-laptop">PC Oynamak</option>
              <option value="fab fa-searchengin">Araştırma Yapma</option>
            </select>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center mb-3"
          >
            <button
              @click="hobilerKaydet"
              class="btn btn-success btn-block mt-3"
            >
              Ekle
            </button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Hobi Kayıtları
            </h4>
          </div>
          <div
            :key="index"
            v-for="(hobi, index) in getHobiler"
            class="row mb-2 p-1 rounded shadow-lg"
          >
            <span class="col-md-12">
              <strong class="bg-success rounded-circle p-2">{{
                index + 1 + "-"
              }}</strong>
              <strong>{{ hobi.hobiInnerHtml }}</strong>
              <a>
                <i :class="hobi.hobi"></i>
              </a>
              <br />
              <button
                @click="hobiSil(index)"
                class="btn btn-danger btn-small mt-2"
              >
                Sil
              </button>
            </span>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center mb-3"
          >
            <button @click="hobilerSil" class="btn btn-danger btn-block mt-3">
              Sıfırla
            </button>
          </div>
        </div>
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- HAKKIMDA(ÖNYAZI) BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              Hakkımda(Ön Yazı)
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Ön Yazı:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder
              v-model="coverLetter"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="onYaziKaydet"
              class="btn btn-success btn-block mt-3"
            >
              Kaydet
            </button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              Hakkımda(Ön Yazı) Kayıtları
            </h4>
          </div>

          <div class="row mb-4">
            <p class="col-md-12">
              Ön Yazı:
              <br />
              <strong>{{ getOnYazi }}</strong>
            </p>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="onYaziSil" class="btn btn-danger btn-block mt-3">
              Sıfırla
            </button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button
            @click="kisiselBilgiFormuSil"
            class="btn btn-danger btn-block mt-5 mb-3"
          >
            Tüm Bilgileri Sil
          </button>
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">HATIRLATMA!!!</h4>
            <p>
              KAYDETTİĞİNİZ BİLGİLER İLE OLUŞTURULAN SİTEYE <a target="_blank" href="https://vueclient.limiyum.com/">buradan</a> ULAŞABİLİRSİNİZ.
            </p>
            <P>PROJENİN GİTHUB ADRESİNE <a target="_blank" href="https://github.com/mzehir/AdminPanelVueFull">buradan</a> ULAŞABİLİRSİNİZ.</P>
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
      personelBilgileri: {
        name: "",
        surName: "",
        birtday: "",
        business: "",
        business2: "",
        business3: "",
        totalExperience: "",
        totalProjects: "",
        isWorking: "",
      },
      hobbies: {
        hobi: "",
        hobiInnerHtml: "",
      },
      coverLetter: "",
      cvBilgisi: {
        cvFile: "",
        cvName: "",
      },
      fotoBilgisi: {
        fotoFile: "",
        fotoName: "",
      },
      muzikBilgisi: {
        muzikFile: "",
        muzikName: "",
      },
    };
  },
  methods: {
    personelBilgileriKaydet() {
      this.$store.dispatch("setFirePersonelBilgileri", this.personelBilgileri);
    },
    hobilerKaydet() {
      let tagNameOption = document.getElementsByTagName("option");
      for (let i = 0; i < tagNameOption.length; i++) {
        if (tagNameOption[i].value == this.hobbies.hobi) {
          this.hobbies.hobiInnerHtml = tagNameOption[i].innerText;
        }
      }
      this.$store.dispatch("setFireHobbies", this.hobbies);
    },
    onYaziKaydet() {
      this.$store.dispatch("setFireCoverLetter", this.coverLetter);
    },
    cvDataTut(event) {
      if (event.target.files.length > 0) {
        this.cvBilgisi.cvFile = event.target.files[0];
        this.cvBilgisi.cvName = event.target.files[0].name;
      } else {
        this.cvBilgisi.cvFile = "";
        this.cvBilgisi.cvName = "";
      }
    },
    fotoDataTut(event) {
      if (event.target.files.length > 0) {
        this.fotoBilgisi.fotoFile = event.target.files[0];
        this.fotoBilgisi.fotoName = event.target.files[0].name;
      } else {
        this.fotoBilgisi.fotoFile = "";
        this.fotoBilgisi.fotoName = "";
      }
    },
    muzikDataTut(event) {
      if (event.target.files.length > 0) {
        this.muzikBilgisi.muzikFile = event.target.files[0];
        this.muzikBilgisi.muzikName = event.target.files[0].name;
      } else {
        this.muzikBilgisi.muzikFile = "";
        this.muzikBilgisi.muzikName = "";
      }
    },
    cvKaydet() {
      this.$store.dispatch("setFireCv", this.cvBilgisi);
    },
    fotoKaydet() {
      this.$store.dispatch("setFireFoto", this.fotoBilgisi);
    },
    muzikKaydet() {
      this.$store.dispatch("setFireMuzik", this.muzikBilgisi);
    },

    kisiselBilgiFormuSil() {
      var isPageFullDTO = this.$store.state.personelInformation.isPageFullDTO;
      var isFotoFullDTO = this.$store.state.personelInformation.foto;
      var isCvFullDTO = this.$store.state.personelInformation.Cv;
      if (!isPageFullDTO && !isFotoFullDTO && !isCvFullDTO) {
        alert("Silinecek veri bulunamadı.");
      } else {
        this.$store.dispatch("deleteKisiselBilgiFormu");
      }
    },
    personelBilgileriSil() {
      this.$store.dispatch("deletePersonelBilgileri");
    },
    hobilerSil() {
      this.$store.dispatch("deleteHobiler");
    },
    hobiSil(index) {
      this.$store.dispatch("deleteHobi", index);
    },
    onYaziSil() {
      this.$store.dispatch("deleteOnYazi");
    },
    cvSil() {
      if (
        this.$store.state.personelInformation.urlCv == undefined ||
        this.$store.state.personelInformation.urlCv == ""
      ) {
        alert("Silinecek veri bulunamadı...");
      } else {
        this.$store.dispatch("deleteFireCv", "silVeDur");
      }
    },
    fotoSil() {
      if (
        this.$store.state.personelInformation.urlFoto == undefined ||
        this.$store.state.personelInformation.urlFoto == ""
      ) {
        alert("Silinecek veri bulunamadı...");
      } else {
        this.$store.dispatch("deleteFireFoto", "silVeDur");
      }
    },
    muzikSil() {
      if (
        this.$store.state.personelInformation.urlMuzik == undefined ||
        this.$store.state.personelInformation.urlMuzik == ""
      ) {
        alert("Silinecek veri bulunamadı...");
      } else {
        this.$store.dispatch("deleteFireMuzik", "silVeDur");
      }
    },
  },
  computed: {
    getPersonelBilgileri() {
      return this.$store.state.personelInformation.PersonelBilgileriDTO;
    },
    getHobiler() {
      return this.$store.state.personelInformation.HobbiesDTO;
    },
    getOnYazi() {
      return this.$store.state.personelInformation.CoverLetterDTO;
    },
    getCv() {
      return this.$store.state.personelInformation.urlCv;
    },
    getFoto() {
      return this.$store.state.personelInformation.urlFoto;
    },
    getMuzik() {
      return this.$store.state.personelInformation.urlMuzik;
    },
  },
  created() {
    this.$store.dispatch("getFireKisiselBilgiFormu");

    var hash = window.location.hash;
    var newString01 = hash.replace("#", "");
    localStorage.setItem("urlBilgisi", newString01);
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
.pdfBg {
  background-image: url("../.././assets/pdfBg.png");
  /* height: 100px;
  width: 100px;
  margin-left: 50px; */
}
</style>