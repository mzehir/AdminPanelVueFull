<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3
          class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg"
        >
          Mesleki Deneyim Formu
        </h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- MESLEKİ DENEYİM BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Mesleki Deneyim
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Firma:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Çalışılan firma ismi"
              v-model="experienceInformation.firma"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Poziyon:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Çalışılan pozisyon ismi"
              v-model="experienceInformation.pozisyon"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Başlama Tarihi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Firmaya başlama zamanı"
              v-model="experienceInformation.baslangicYili"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Bitiş Tarihi:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Firmadan ayrılış zamanı"
              v-model="experienceInformation.bitisYili"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Süre:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Firmada çalışılan süre"
              v-model="experienceInformation.sure"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Firma Anısı:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Çalışma döneminde yaşanılan dikkat çekici bir yazı"
              v-model="experienceInformation.firmaAnisi"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="firmaBilgileriKaydet"
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
              Deneyim Bilgileri Kayıtları
            </h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Firma</th>
                  <th scope="col">Pozisyon</th>
                  <th scope="col">Süre</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :key="index"
                  v-for="(calisilanFirma, index) in getFirmaBilgileri"
                >
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ calisilanFirma.firma }}</td>
                  <td>{{ calisilanFirma.pozisyon }}</td>
                  <td>{{ calisilanFirma.sure }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      @click="modelIndex(index)"
                    >
                      Güncelle
                    </button>
                  </td>
                  <td>
                    <button
                      @click="calisilanFirmaSil(index)"
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
              @click="calisilanFirmalarSil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button
            @click="firmaBilgileriFormuSil"
            class="btn btn-danger btn-block mt-5 mb-3"
          >
            Tüm Bilgileri Sil
          </button>
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
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu</strong>
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

          <div class="modal-body pr-4">
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Firma:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Çalışılan firma ismi"
                v-model="changeFirmaBilgisi.firma"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Pozisyon:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Çalışılan poziyon ismi"
                v-model="changeFirmaBilgisi.pozisyon"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Başlama Tarihi:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Firmaya başlama zamanı"
                v-model="changeFirmaBilgisi.baslangicYili"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Bitiş Tarihi:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Firmadan ayrılış zamanı"
                v-model="changeFirmaBilgisi.bitisYili"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Süre:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Firmada çalışılan süre"
                v-model="changeFirmaBilgisi.sure"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Firma Anısı:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Çalışma döneminde yaşanılan dikkat çekici bir yazı"
                v-model="changeFirmaBilgisi.firmaAnisi"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Kapat
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="changeFirmaBilgisiKaydet"
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
      experienceInformation: {
        firma: "",
        pozisyon: "",
        sure: "",
        baslangicYili: "",
        bitisYili: "",
        firmaAnisi: "",
      },
      changeFirmaBilgisi: [],
      changeIndex: "",
    };
  },

  methods: {
    firmaBilgileriKaydet() {
      this.$store.dispatch("setFireFirmaBilgileri", this.experienceInformation);
    },

    firmaBilgileriFormuSil() {
      if (!this.$store.state.experience.isPageExperienceFullDTO) {
        alert("Silinecek veri bulunamadı.");
      } else {
        this.$store.dispatch("deleteFirmaBilgileriFormu");
      }
    },

    calisilanFirmalarSil() {
      this.$store.dispatch("deleteCalisilanFirmalar");
    },

    calisilanFirmaSil(index) {
      this.$store.dispatch("deleteCalisilanFirma", index);
    },

    modelIndex(index) {
      for (
        let i = 0;
        i < this.$store.state.experience.FirmaBilgileriDTO.length;
        i++
      ) {
        this.changeFirmaBilgisi = this.$store.state.experience.FirmaBilgileriDTO[
          index
        ];
        this.changeIndex = index;
      }
    },

    changeFirmaBilgisiKaydet() {
      this.$store.dispatch("changeFirmaBilgisi", {
        changeFirmaBilgisi: this.changeFirmaBilgisi,
        changeIndex: this.changeIndex,
      });
    },
  },

  computed: {
    getFirmaBilgileri() {
      return this.$store.state.experience.FirmaBilgileriDTO;
    },
  },

  created() {
    this.$store.dispatch("getFireFirmaBilgileriFormu");

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
</style>