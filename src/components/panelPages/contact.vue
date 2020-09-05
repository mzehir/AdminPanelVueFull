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
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-success btn-block mt-3">Kaydet</button>
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
              <strong>0 541 952 5959</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Lokasyon:
              <strong>Beşiktaş / İSTANBUL</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Email:
              <strong>deneme@gmail.com</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Website:
              <strong>mynet</strong>
            </span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-danger btn-block mt-3">Sıfırla</button>
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
              <strong>Hobiler:</strong>
            </span>
            <select name id class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control">
              <option value="fab fa-facebook-f">Facebook</option>
              <option value="fab fa-twitter">Twitter</option>
              <option value="fab fa-instagram">İnstagram</option>
              <option value="fab fa-github">Github</option>
              <option value="fab fa-linkedin-in">Linkedin</option>
              <option value="fab fa-youtube">Youtube</option>
              <option value="fab fa-pinterest-p">Pinterest</option>
              <option value="fab fa-reddit-alien">Reddit</option>
              <option value="fab fa-vimeo-v">Vimeo</option>
              <option value="fab fa-blogger-b">Blogger</option>
              <option value="fab fa-tumblr">Tumblr</option>
              <option value="fab fa-flickr">Flickr</option>
              <option value="fab fa-google-plus-g">Google Plus</option>
            </select>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >S.M.Hesap Kayıtları</h4>
          </div>
          <div class="row mb-2">
            <span class="col-md-12">
              <button class="btn btn-danger btn-small">Sil</button>
              1:
              <strong>Facebook</strong>
            </span>
          </div>
          <div class="row mb-2">
            <span class="col-md-12">
              <button class="btn btn-danger btn-small">Sil</button>
              2:
              <strong>Twitter</strong>
            </span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-danger btn-block mt-3">Sıfırla</button>
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
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-success btn-block mt-3">Kaydet</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Referans Bilgi Kayıtları</h4>
          </div>
          <div class="row mb-4">
            <span class="col-md-12">
              Ad ve Soyad:
              <strong>0 541 952 5959</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              GSM:
              <strong>Beşiktaş / İSTANBUL</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Email:
              <strong>deneme@gmail.com</strong>
            </span>
          </div>

          <div class="row mb-4">
            <span class="col-md-12">
              Website:
              <strong>https://www.limiyum.com/</strong>
            </span>
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
  </div>
</template>
<script>
export default {
  methods: {},
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