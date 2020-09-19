<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3 class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg">Blog Formu</h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- BLOG BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Blog Girişi</h4>
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Ana Fotoğraf:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0"
              type="file"
              placeholder="Çalışılan firma ismi"
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Ana Başlık:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Yazı ana başlığı"
            />
          </div>

          <div class="row mb-4">
            <button
              class="btn btn-outline-success col-xs-3 col-sm-3 col-md-4 rounded-pill"
            >+ ALT BAŞLIK</button>
            <button
              class="btn btn-outline-success col-xs-3 col-sm-3 col-md-4 rounded-pill"
            >+ PARAGRAF</button>
            <button
              class="btn btn-outline-success col-xs-3 col-sm-3 col-md-4 rounded-pill"
            >+ FOTOĞRAF</button>
          </div>

          <div class="row mb-4"></div>

          <div class="row mb-4"></div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-success btn-block mt-3">Ekle</button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >Blog Çıktısı</h4>
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
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
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
                <strong>Firma:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Çalışılan firma ismi"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
            <button type="button" class="btn btn-success">Kaydet</button>
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
        post:{
            anaFoto: "",
            anaBaslik: "",
        },
    };
  },
};
</script>

<style scoped>
</style>