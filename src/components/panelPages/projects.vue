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
            />
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Proje Ortakları:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Varsa ortakların isimleri"
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
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button class="btn btn-success btn-block mt-3">Ekle</button>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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
                <tr>
                  <th scope="row">2</th>
                  <td>Jacobsssssssssssssssssss</td>
                  <td>Thorntonssssssssssssssssss</td>
                  <td>@fat</td>
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
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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

                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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

                <tr>
                  <th scope="row">5</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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