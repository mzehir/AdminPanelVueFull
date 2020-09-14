<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3 class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg">Projeler Formu</h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- PROJELER BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Tamamlanan Projeler</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Proje Adı:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Projeye verilebilecek bir isim"
              v-model="tamalananProjeler.projeAdi"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Proje Hakkında:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Proje içeriği hakkında bilgi"
              v-model="tamalananProjeler.projeHakkinda"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Proje Ortağı:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Varsa ortak ismi"
              v-model="tamalananProjeler.projeOrtaklari"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Github Adresi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Varsa github adresi"
              v-model="tamalananProjeler.githubAdresi"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>URL Adresi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Varsa url adresi"
              v-model="tamalananProjeler.urlAdresi"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="tamalananProjelerKaydet" class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Tamamlanan Proje Kayıtları</h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Adı</th>
                  <th scope="col">Github Adresi</th>
                  <th scope="col">Url Adresi</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(tamamlananProje, index) in getTamamlananProjeler">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{tamamlananProje.projeAdi}}</td>
                  <td>{{tamamlananProje.githubAdresi}}</td>
                  <td>{{tamamlananProje.urlAdresi}}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >Güncelle</button>
                  </td>
                  <td>
                    <button class="btn btn-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div>

        <!-- ############################### -->
        <!-- ############################### -->
        <!-- PORTFOLİO BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >Portfolio</h4>
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
              placeholder="Fotoğrafa ait projenin müşteri bilgisi..."
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
            <button @click="portfolioKaydet" class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >Portfolio Kayıtları</h4>
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
                <tr :key="index" v-for="(portfoy, index) in getPortfolio">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{portfoy.portfoyBasligi}}</td>
                  <td>{{portfoy.musteriBilgisi}}</td>
                  <td>{{portfoy.tamamlanmaTarihi}}</td>
                  <td>
                    <img height="100" width="100" :src="portfoy.fotoUrl" alt />
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >Güncelle</button>
                  </td>
                  <td>
                    <button class="btn btn-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button class="btn btn-danger btn-block mt-5 mb-3">Tüm Bilgileri Sil</button>
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
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
      tamalananProjeler: {
        projeAdi: "",
        projeHakkinda: "",
        projeOrtaklari: "",
        githubAdresi: "",
        urlAdresi: "",
      },

      portfolio: {
        portfoyBasligi: "",
        portfoyKisaAciklama: "",
        portfoyUzunAciklama: "",
        musteriBilgisi: "",
        tamamlanmaTarihi: "",
        portfoyFotoName: "",
      },
      portfoyFoto: "",
    };
  },
  methods: {
    tamalananProjelerKaydet() {
      this.$store.dispatch("setFireTamamlananProjeler", this.tamalananProjeler);
    },

    portfolioFotoYakala(event) {
      this.portfoyFoto = event.target.files[0];
      this.portfolio.portfoyFotoName = event.target.files[0].name;
      console.log(this.portfolio.portfoyFotoName);
    },

    portfolioKaydet() {
      this.$store.dispatch("setFirePortfolio", {
        portfolio: this.portfolio,
        portfoyFoto: this.portfoyFoto,
      });
    },
  },
  created() {
    this.$store.dispatch("getFireProjelerFormu");
    this.$store.dispatch("getFirePortfoyFotolar");

    var hash = window.location.hash;
    var newString01 = hash.replace("#", "");
    localStorage.setItem("urlBilgisi", newString01);
  },
  computed: {
    getTamamlananProjeler() {
      return this.$store.state.projects.tamamlananProjelerDTO;
    },

    getPortfolio() {
      debugger
      if (
        this.$store.state.projects.portfoyDTO > 0 &&
        this.$store.state.projects.portfoyFotolarURLDTO > 0 &&
        this.$store.state.projects.portfoyDTO.length ==
          this.$store.state.projects.portfoyFotolarURLDTO.length
      ) {
        for (let i = 0; i < this.$store.state.projects.portfoyDTO.length; i++) {
          this.$store.state.projects.portfoyDTO[
            i
          ].fotoUrl = this.$store.state.projects.portfoyFotolarURLDTO[i];
        }
        console.log(this.$store.state.projects.portfoyDTO);
        return this.$store.state.projects.portfoyDTO;
      }
      else{
        console.log("Getirilecek veri bulunamadı...")
      }
      //  return this.$store.state.projects.portfoyDTO;
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