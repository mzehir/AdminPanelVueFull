<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3
          class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg"
        >
          Projeler Formu
        </h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- ÇALIŞMA SÜRECİ BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Çalışma Süreci
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 1</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 1 başlığı"
              v-model="calismaSureci.surec1"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 1 Açıklama</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 1 açıklaması"
              v-model="calismaSureci.surec1Aciklama"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 2</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 2 başlığı"
              v-model="calismaSureci.surec2"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 2 Açıklama:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 2 açıklaması"
              v-model="calismaSureci.surec2Aciklama"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 3:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 3 başlığı"
              v-model="calismaSureci.surec3"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 3 Açıklama:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 3 açıklamasıi"
              v-model="calismaSureci.surec3Aciklama"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 4:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 4 başlığı"
              v-model="calismaSureci.surec4"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süreç 4 Açıklama:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Süreç 4 açıklaması"
              v-model="calismaSureci.surec4Aciklama"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="calismaSureciKaydet"
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
              Çalışma Süreci Kayıtları
            </h4>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Süreç 1:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec1 : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Açıklaması:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec1Aciklama : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Süreç 2:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec2 : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Açıklaması:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec2Aciklama : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Süreç 3:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec3 : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Açıklaması:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec3Aciklama : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Süreç 4:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec4 : ""
              }}</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Açıklaması:
              <strong>{{
                getCalismaSureci ? getCalismaSureci.surec4Aciklama : ""
              }}</strong>
            </span>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="calismaSureciSil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <!-- ############################### -->
        <!-- ############################### -->
        <!-- PORTFOLİO BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              Portfolio
            </h4>
          </div>

          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">UYARI!</h4>
            <p>
              Aynı portfoy projesine ait ikinci bir fotoğraf için
              <strong>Portfoy Başlığı</strong> bilgisini ilk fotoğraftaki
              girilen bilgi ile aynı giriniz.
            </p>
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Portföy Başlığı:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Fotoğrafa verilebilecek bir başlık..."
              v-model="portfolio.portfoyBasligi"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Öz Portföy Açıklaması:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Fotoğrafla ilgili kısa bilgilendirme..."
              v-model="portfolio.portfoyKisaAciklama"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Tam Portföy Açıklaması:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Fotoğrafla ilgili tam bilgilendirme..."
              v-model="portfolio.portfoyUzunAciklama"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Müşteri Bilgisi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Fotoğrafa ait projenin müşteri bilgisi 'gmail' ya da 'gsm'"
              v-model="portfolio.musteriBilgisi"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Tamamlanma Tarihi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Projenin tamamlanma tarihi..."
              v-model="portfolio.tamamlanmaTarihi"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Proje Fotoğrafı:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control-file"
              type="file"
              @change="portfolioFotoYakala($event)"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="portfolioKaydet"
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
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              Portfolio Kayıtları
            </h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Portföy Başlığı</th>
                  <th scope="col">Müşteri Bilgisi</th>
                  <th scope="col">Tamamlanma Tarihi</th>
                  <th scope="col">Portföy Fotoğrafı</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(portfoy, index) in getPortfoyler">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ portfoy.portfoyBasligi }}</td>
                  <td>{{ portfoy.musteriBilgisi }}</td>
                  <td>{{ portfoy.tamamlanmaTarihi }}</td>
                  <td>
                    <img
                      height="100"
                      width="100"
                      :src="portfoy.portfoyFotoUrl"
                      alt
                    />
                    <a :href="portfoy.portfoyFotoUrl">Tam Görüntü</a>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModa2"
                      @click="portfolioGuncelle(index)"
                    >
                      Güncelle
                    </button>
                  </td>
                  <td>
                    <button
                      @click="tekPortfolioSil(index)"
                      class="btn btn-danger"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="portfolioKayitlariSil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button
            @click="projelerFormuSil"
            class="btn btn-danger btn-block mt-5 mb-3"
          >
            Tüm Bilgileri Sil
          </button>
        </div>
      </div>
    </div>
    <!-- ############################### -->
    <!-- ############################### -->
    <!-- MODAL2 BÖLÜMÜ -->
    <!-- ############################### -->
    <!-- ############################### -->
    <div
      class="modal fade"
      id="exampleModa2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu Portfolio</strong>
            </h5>
            <button
              type="button"
              class="close text-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Portföy Başlığı:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Fotoğrafa verilebilecek bir başlık"
                v-model="changePortfolio.portfoyBasligi"
              />
            </div>
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Öz Portföy Açıklaması:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Fotoğrafla ilgili kısa bilgilendirme"
                v-model="changePortfolio.portfoyKisaAciklama"
              />
            </div>
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Tam Portföy Açıklaması:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Fotoğrafla ilgili tam bilgilendirme"
                v-model="changePortfolio.portfoyUzunAciklama"
              />
            </div>
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Müşteri Bilgisi:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Fotoğrafa ait müşteri bilgisi"
                v-model="changePortfolio.musteriBilgisi"
              />
            </div>
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Tamamlanma Tarihi:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Projenin tamamlanma tarihi"
                v-model="changePortfolio.tamamlanmaTarihi"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Proje Fotoğrafı:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0"
                type="file"
                placeholder
                @change="fotoYakalaGuncelle($event)"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="changePortfolioKaydet"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------- -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      calismaSureci: {
        surec1: "",
        surec1Aciklama: "",
        surec2: "",
        surec2Aciklama: "",
        surec3: "",
        surec3Aciklama: "",
        surec4: "",
        surec4Aciklama: "",
      },

      portfolio: {
        portfoyBasligi: "",
        portfoyKisaAciklama: "",
        portfoyUzunAciklama: "",
        musteriBilgisi: "",
        tamamlanmaTarihi: "",
        portfoyFotoName: "",
        portfoyFotoUrl: "",
      },
      portfoyFoto: "",

      changePortfolio: [],
      changePortfolioIndex: "",
      changePortfoyFoto: "",
    };
  },
  methods: {
    calismaSureciKaydet() {
      this.$store.dispatch("setFireCalismaSureci", this.calismaSureci);
    },

    portfolioFotoYakala(event) {
      this.portfoyFoto = event.target.files[0];
      this.portfolio.portfoyFotoName = event.target.files[0].name;
    },

    portfolioKaydet() {
      this.$store.dispatch("setFirePortfolio", {
        portfolio: this.portfolio,
        portfoyFoto: this.portfoyFoto,
      });
    },

    projelerFormuSil() {
      if (!this.$store.state.projects.isPageProjectsFullDTO) {
        alert("Silinecek veri bulunamadı.");
      } else {
        this.$store.dispatch("deleteProjelerFormu");
      }
    },

    calismaSureciSil() {
      this.$store.dispatch("deleteCalismaSureci");
    },

    portfolioKayitlariSil() {
      this.$store.dispatch("deletePortfolioKayitlari");
    },

    tekPortfolioSil(index) {
      this.$store.dispatch("deletePortfolioToFire", index);
    },

    portfolioGuncelle(index) {
      for (let i = 0; i < this.$store.state.projects.portfoyDTO.length; i++) {
        this.changePortfolio = this.$store.state.projects.portfoyDTO[index];
        this.changePortfolioIndex = index;
      }
    },

    fotoYakalaGuncelle(event) {
      this.changePortfoyFoto = event.target.files[0];
    },

    changePortfolioKaydet() {
      this.$store.dispatch("changePortfolioToFire", {
        changePortfolio: this.changePortfolio,
        changePortfolioIndex: this.changePortfolioIndex,
        changePortfoyFoto: this.changePortfoyFoto,
      });
    },
  },
  created() {
    this.$store.dispatch("getFireProjelerFormu");

    var hash = window.location.hash;
    var newString01 = hash.replace("#", "");
    localStorage.setItem("urlBilgisi", newString01);
  },
  computed: {
    getCalismaSureci() {
      return this.$store.state.projects.calismaSureciDTO;
    },

    getPortfoyler() {
      return this.$store.state.projects.portfoyDTO;
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