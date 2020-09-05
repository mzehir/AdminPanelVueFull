<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3
          class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg"
        >Eğitim Bilgileri Formu</h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- EĞİTİM BİLGİLERİ BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Eğitim Bilgileri</h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Okul:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Mezun olunan okul ismi"
              v-model="educationInformation.okul"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Bölüm:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Mezun olunan bölüm ismi"
              v-model="educationInformation.bolum"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Derece:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Okulu bitirme derecesi"
              v-model="educationInformation.derece"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Mezuniyet Yılı:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Okuldan mezun olunan yıl"
              v-model="educationInformation.mezuniyetYili"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Okul Anısı:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Okul döneminde yaşanılan dikkat çekici bir yazı"
              v-model="educationInformation.okulAnisi"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="okulBilgileriKaydet" class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Eğitim Bilgileri Kayıtları</h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Okul</th>
                  <th scope="col">Derece</th>
                  <th scope="col">M.Yılı</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(okunanOkul, index) in getEgitimBilgileri">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{okunanOkul.okul}}</td>
                  <td>{{okunanOkul.derece}}</td>
                  <td>{{okunanOkul.mezuniyetYili}}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      @click="modelIndex(index)"
                    >Güncelle</button>
                  </td>
                  <td>
                    <button @click="okunanOkulSil(index)" class="btn btn-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="okunanOkullarsil" class="btn btn-danger btn-block mt-3">Sıfırla</button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button
            @click="egitimBilgileriFormuSil"
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
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pr-4">
            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Okul:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Mezun olunan okul ismi"
                v-model="changeOkulBilgisi.okul"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Bölüm:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Mezun olunan bölüm ismi"
                v-model="changeOkulBilgisi.bolum"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Derece:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Okulu bitirme derecesi"
                v-model="changeOkulBilgisi.derece"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Mezuniyet Yılı:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Okuldan mezun olunan yıl"
                v-model="changeOkulBilgisi.mezuniyetYili"
              />
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Okul Anısı:</strong>
              </span>
              <textarea
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Okul döneminde yaşanılan dikkat çekici bir yazı"
                v-model="changeOkulBilgisi.okulAnisi"
              />
            </div>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="changeOkulBilgisiKaydet">Kaydet</button>
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
      educationInformation: {
        okul: "",
        bolum: "",
        derece: "",
        mezuniyetYili: "",
        okulAnisi: "",
      },
      changeOkulBilgisi: [],
      changeIndex: "",
    };
  },

  methods: {
    modelIndex(index) {
      for (
        let i = 0;
        i < this.$store.state.education.OkulBilgileriDTO.length;
        i++
      ) {
        this.changeOkulBilgisi = this.$store.state.education.OkulBilgileriDTO[
          index
        ];
        this.changeIndex = index;
      }
    },

    changeOkulBilgisiKaydet() {
      this.$store.dispatch("changeOkulBilgisi", {
        changeOkulBilgisi: this.changeOkulBilgisi,
        changeIndex: this.changeIndex,
      });
    },

    okulBilgileriKaydet() {
      this.$store.dispatch("setFireOkulBilgileri", this.educationInformation);
    },

    egitimBilgileriFormuSil() {
      if (!this.$store.state.education.isPageEducationFullDTO) {
        alert("Silinecek veri bulunamadı.");
      } else {
        this.$store.dispatch("deleteEgitimBilgileriFormu");
      }
    },

    okunanOkulSil(index) {
      this.$store.dispatch("deleteOkunanOkul", index);
    },

    okunanOkullarsil() {
      this.$store.dispatch("deleteOkunanOkullar");
    },
  },
  
  computed: {
    getEgitimBilgileri() {
      return this.$store.state.education.OkulBilgileriDTO;
    },
  },
  created() {
    this.$store.dispatch("getFireOkulBilgileri");

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