<template>
  <div class="pt-5 text-center textFamily">
    <div class="card pl-3 pr-3 scrollDiv">
      <div class="card-header row bg-dark">
        <h3
          class="col-xs-12 col-sm-12 col-md-12 bg-white p-3 rounded shadow-lg"
        >
          Yetkinlikler - Beceriler Formu
        </h3>
      </div>
      <div class="card-body row pb-0">
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- YETKİNLİKLER BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 mb-3 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Yetkinlikler
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Yetkinlik:</strong>
            </span>
            <select
              v-model="yetkinlikler.yetkinlikIconCode"
              name
              id
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
            >
              <option class="yetkinlik1" value="fab fa-html5">HTML</option>
              <option class="yetkinlik1" value="fab fa-css3-alt">CSS</option>
              <option class="yetkinlik1" value="fab fa-js-square">
                JAVASCRİPT
              </option>
              <option class="yetkinlik1" value="fab fa-bootstrap">
                BOOTSTRAP
              </option>
              <option class="yetkinlik1" value="fas fa-database">
                FİREBASE
              </option>
              <option class="yetkinlik1" value="fab fa-react">REACTJS</option>
              <option class="yetkinlik1" value="fab fa-vuejs">VUEJS</option>
              <option class="yetkinlik1" value="fab fa-node">NODEJS</option>
              <option class="yetkinlik1" value="fab fa-php">PHP</option>
              <option class="yetkinlik1" value="fab fa-cuttlefish">C</option>
              <option class="yetkinlik1" value="fab fa-python">PYTHON</option>
              <option class="yetkinlik1" value="fab fa-java">JAVA</option>
              <option class="yetkinlik1" value="fab fa-unity">UNİTY</option>
            </select>
          </div>

          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Seviye:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Yüzde cinsinden yetkinlik seviyesi. Mesela '50' gibi"
              v-model="yetkinlikler.yetkinlikSeviyesi"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="yetkinlik1Kaydet"
              class="btn btn-success btn-block mt-3"
            >
              Ekle
            </button>
          </div>
        </div>
        <!-- ------------------------------- -->
        <div class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 mb-3">
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Yetkinlik Kayıtları
            </h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Yetkinlik</th>
                  <th scope="col">Seviyesi</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(yetkinlik, index) in getYetkinlikler1">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    {{ yetkinlik.yetkinlikInnerHtml }}
                    <br />
                    <i :class="yetkinlik.yetkinlikIconCode"></i>
                  </td>
                  <td>%{{ yetkinlik.yetkinlikSeviyesi }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      @click="modelIndexYetkinlik1(index)"
                    >
                      Güncelle
                    </button>
                  </td>
                  <td>
                    <button
                      @click="yetkinlik1Sil(index)"
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
              @click="yetkinlikler1Sil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>
        <!-- ############################### -->
        <!-- ############################### -->
        <!-- DİĞER YETKİNLİKLER BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              Diğer Yetkinlikler
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Yetkinlik:</strong>
            </span>
            <select
              v-model="yetkinliklerExtra.yetkinlikIconCodeExtra"
              name
              id
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
            >
              <option class="yetkinlik2" value="fab fa-html5">HTML</option>
              <option class="yetkinlik2" value="fab fa-css3-alt">CSS</option>
              <option class="yetkinlik2" value="fab fa-js-square">
                JAVASCRİPT
              </option>
              <option class="yetkinlik2" value="fab fa-bootstrap">
                BOOTSTRAP
              </option>
              <option class="yetkinlik2" value="fas fa-database">
                FİREBASE
              </option>
              <option class="yetkinlik2" value="fab fa-react">REACTJS</option>
              <option class="yetkinlik2" value="fab fa-vuejs">VUEJS</option>
              <option class="yetkinlik2" value="fab fa-node">NODEJS</option>
              <option class="yetkinlik2" value="fab fa-php">PHP</option>
              <option class="yetkinlik2" value="fab fa-cuttlefish">C</option>
              <option class="yetkinlik2" value="fab fa-python">PYTHON</option>
              <option class="yetkinlik2" value="fab fa-java">JAVA</option>
              <option class="yetkinlik2" value="fab fa-unity">UNİTY</option>
            </select>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Seviye:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Yüzde cinsinden yetkinlik seviyesi."
              v-model="yetkinliklerExtra.yetkinlikSeviyesiExtra"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="yetkinlik2Kaydet"
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
              Diğer Yetkinlik Kayıtları
            </h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Yetkinlik</th>
                  <th scope="col">Seviyesi</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(yetkinlik, index) in getYetkinlikler2">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    {{ yetkinlik.yetkinlikInnerHtmlExtra }}
                    <br />
                    <i :class="yetkinlik.yetkinlikIconCodeExtra"></i>
                  </td>
                  <td>%{{ yetkinlik.yetkinlikSeviyesiExtra }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal2"
                      @click="modelIndexYetkinlik2(index)"
                    >
                      Güncelle
                    </button>
                  </td>
                  <td>
                    <button
                      @click="yetkinlik2Sil(index)"
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
              @click="yetkinlikler2Sil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <!-- ############################### -->
        <!-- ############################### -->
        <!-- YABANCI DİL BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-dark text-white shadow"
            >
              Yabancı Dil Bilgileri
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Yabancı Diller:</strong>
            </span>
            <select
              v-model="yabanciDil.yabanciDilInnerHtml"
              name
              id
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
            >
              <option value="İngilizce">İngilizce</option>
              <option value="Almanca">Almanca</option>
              <option value="Fransızca">Fransızca</option>
              <option value="Rusça">Rusça</option>
              <option value="Arapça">Arapça</option>
              <option value="İtalyanca">İtalyanca</option>
              <option value="İspanyolca">İspanyolca</option>
              <option value="Farsça">Farsça</option>
              <option value="Yunanca">Yunanca</option>
            </select>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Seviye:</strong>
            </span>
            <input
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Yüzde cinsinden yabancı dil seviyesi."
              v-model="yabanciDil.yabanciDilSeviyesi"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="yabanciDilKaydet"
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
              Yabancı Dil Kayıtları
            </h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Yabancı Dil</th>
                  <th scope="col">Seviyesi</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :key="index"
                  v-for="(yabanciDil, index) in getYabanciDiller"
                >
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ yabanciDil.yabanciDilInnerHtml }}</td>
                  <td>%{{ yabanciDil.yabanciDilSeviyesi }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal3"
                      @click="modelIndexYabanciDil(index)"
                    >
                      Güncelle
                    </button>
                  </td>
                  <td>
                    <button
                      @click="yabanciDilSil(index)"
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
              @click="yabanciDillerSil"
              class="btn btn-danger btn-block mt-3"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <!-- ############################### -->
        <!-- ############################### -->
        <!-- HİZMETLER BÖLÜMÜ -->
        <!-- ############################### -->
        <!-- ############################### -->
        <div
          class="col-xs-12 col-sm-12 col-md-6 pl-5 pr-5 mt-2 border-right border-dark"
        >
          <div class="row">
            <h4
              class="col-xs-12 col-sm-12 col-md-12 card-title border p-2 mb-4 rounded bg-warning text-white shadow"
            >
              Verilen Hizmetler
            </h4>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Hizmet:</strong>
            </span>
            <select
              v-model="hizmetler.hizmetIconCode"
              name
              id
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
            >
              <option class="hizmet" value="fas fa-desktop">Web Tasarım</option>
              <option class="hizmet" value="fas fa-cogs">Web Geliştirme</option>
              <option class="hizmet" value="fas fa-mobile-alt">
                Responsive Tasarım
              </option>
              <option class="hizmet" value="fas fa-medkit">Hızlı Destek</option>
              <option class="hizmet" value="fas fa-database">
                Database Kodlama
              </option>
              <option class="hizmet" value="fas fa-server">
                Server İşlemleri
              </option>
              <option class="hizmet" value="fab fa-wordpress">
                WordPress İşlemleri
              </option>
              <option class="hizmet" value="fas fa-book">Özel Ders</option>
            </select>
          </div>
          <div class="row mb-4">
            <span class="col-xs-12 col-sm-12 col-md-3 text-left">
              <strong>Açıklama:</strong>
            </span>
            <textarea
              class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              type="text"
              placeholder="Verilen hizmet ile alakalı açıklama..."
              v-model="hizmetler.hizmetDescription"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button
              @click="hizmetKaydet"
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
              Hizmet Kayıtları
            </h4>
          </div>

          <div class="table-responsive">
            <table id class="table table-striped">
              <thead class="bg-success text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Hizmet</th>
                  <th scope="col">Güncelle</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(hizmet, index) in getHizmetler">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    {{ hizmet.hizmetInnerHtml }}
                    <br />
                    <i :class="hizmet.hizmetIconCode"></i>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal4"
                      @click="modelIndexHizmetler(index)"
                    >
                      Güncelle
                    </button>
                  </td>
                  <td>
                    <button @click="hizmetSil(index)" class="btn btn-danger">
                      Sil
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 offset-md-4 text-center">
            <button @click="hizmetlerSil" class="btn btn-danger btn-block mt-3">
              Sıfırla
            </button>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <button
            @click="yetkinliklerFormuSil"
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
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu Yetkinlikler</strong>
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
                <strong>Yetkinlik:</strong>
              </span>
              <select
                v-model="changeYetkinlik.yetkinlikIconCode"
                name
                id
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              >
                <option class="yetkinlik1Modal" value="fab fa-html5">
                  HTML
                </option>
                <option class="yetkinlik1Modal" value="fab fa-css3-alt">
                  CSS
                </option>
                <option class="yetkinlik1Modal" value="fab fa-js-square">
                  JAVASCRİPT
                </option>
                <option class="yetkinlik1Modal" value="fab fa-bootstrap">
                  BOOTSTRAP
                </option>
                <option class="yetkinlik1Modal" value="fas fa-database">
                  FİREBASE
                </option>
                <option class="yetkinlik1Modal" value="fab fa-react">
                  REACTJS
                </option>
                <option class="yetkinlik1Modal" value="fab fa-vuejs">
                  VUEJS
                </option>
                <option class="yetkinlik1Modal" value="fab fa-node">
                  NODEJS
                </option>
                <option class="yetkinlik1Modal" value="fab fa-php">PHP</option>
                <option class="yetkinlik1Modal" value="fab fa-cuttlefish">
                  C
                </option>
                <option class="yetkinlik1Modal" value="fab fa-python">
                  PYTHON
                </option>
                <option class="yetkinlik1Modal" value="fab fa-java">
                  JAVA
                </option>
                <option class="yetkinlik1Modal" value="fab fa-unity">
                  UNİTY
                </option>
              </select>
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Seviye:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Yüzde cinsinden yetkinlik seviyesi"
                v-model="changeYetkinlik.yetkinlikSeviyesi"
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
              @click="changeYetkinlik1Kaydet"
              type="button"
              class="btn btn-success"
            >
              Kaydet
            </button>
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
              <strong>Güncelleme Tablosu Diğer Yetkinlikler</strong>
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
                <strong>Yetkinlik:</strong>
              </span>
              <select
                v-model="changeYetkinlikExtra.yetkinlikIconCodeExtra"
                name
                id
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              >
                <option class="yetkinlik2Modal" value="fab fa-html5">
                  HTML
                </option>
                <option class="yetkinlik2Modal" value="fab fa-css3-alt">
                  CSS
                </option>
                <option class="yetkinlik2Modal" value="fab fa-js-square">
                  JAVASCRİPT
                </option>
                <option class="yetkinlik2Modal" value="fab fa-bootstrap">
                  BOOTSTRAP
                </option>
                <option class="yetkinlik2Modal" value="fas fa-database">
                  FİREBASE
                </option>
                <option class="yetkinlik2Modal" value="fab fa-react">
                  REACTJS
                </option>
                <option class="yetkinlik2Modal" value="fab fa-vuejs">
                  VUEJS
                </option>
                <option class="yetkinlik2Modal" value="fab fa-node">
                  NODEJS
                </option>
                <option class="yetkinlik2Modal" value="fab fa-php">PHP</option>
                <option class="yetkinlik2Modal" value="fab fa-cuttlefish">
                  C
                </option>
                <option class="yetkinlik2Modal" value="fab fa-python">
                  PYTHON
                </option>
                <option class="yetkinlik2Modal" value="fab fa-java">
                  JAVA
                </option>
                <option class="yetkinlik2Modal" value="fab fa-unity">
                  UNİTY
                </option>
              </select>
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Seviye:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Yüzde cinsinden yetkinlik seviyesi"
                v-model="changeYetkinlikExtra.yetkinlikSeviyesiExtra"
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
              @click="changeYetkinlik2Kaydet"
              type="button"
              class="btn btn-success"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------- -->

    <!-- ############################### -->
    <!-- ############################### -->
    <!-- MODAL3 BÖLÜMÜ -->
    <!-- ############################### -->
    <!-- ############################### -->
    <div
      class="modal fade"
      id="exampleModal3"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu Yabancı Dil</strong>
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
                <strong>Yabancı Dil:</strong>
              </span>
              <select
                v-model="changeYabanciDil.yabanciDilInnerHtml"
                name
                id
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              >
                <option value="İngilizce">İngilizce</option>
                <option value="Almanca">Almanca</option>
                <option value="Fransızca">Fransızca</option>
                <option value="Rusça">Rusça</option>
                <option value="Arapça">Arapça</option>
                <option value="İtalyanca">İtalyanca</option>
                <option value="İspanyolca">İspanyolca</option>
                <option value="Farsça">Farsça</option>
                <option value="Yunanca">Yunanca</option>
              </select>
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Seviye:</strong>
              </span>
              <input
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Yüzde cinsinden yetkinlik seviyesi"
                v-model="changeYabanciDil.yabanciDilSeviyesi"
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
              @click="changeYabanciDilKaydet"
              type="button"
              class="btn btn-success"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------- -->

    <!-- ############################### -->
    <!-- ############################### -->
    <!-- MODAL4 BÖLÜMÜ -->
    <!-- ############################### -->
    <!-- ############################### -->
    <div
      class="modal fade"
      id="exampleModal4"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <strong>Güncelleme Tablosu Hizmetler</strong>
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
                <strong>Hizmet:</strong>
              </span>
              <select
                v-model="changeHizmetler.hizmetIconCode"
                name
                id
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
              >
                <option class="hizmetModal" value="fas fa-desktop">
                  Web Tasarım
                </option>
                <option class="hizmetModal" value="fas fa-cogs">
                  Web Geliştirme
                </option>
                <option class="hizmetModal" value="fas fa-mobile-alt">
                  Responsive Tasarım
                </option>
                <option class="hizmetModal" value="fas fa-medkit">
                  Hızlı Destek
                </option>
                <option class="hizmetModal" value="fas fa-database">
                  Database Kodlama
                </option>
                <option class="hizmetModal" value="fas fa-server">
                  Server İşlemleri
                </option>
                <option class="hizmetModal" value="fab fa-wordpress">
                  WordPress İşlemleri
                </option>
                <option class="hizmetModal" value="fas fa-book">
                  Özel Ders
                </option>
              </select>
            </div>

            <div class="row mb-4">
              <span class="col-xs-12 col-sm-12 col-md-3 text-left">
                <strong>Açıklama:</strong>
              </span>
              <textarea
                class="col-xs-12 col-sm-12 col-md-9 pr-3 ml-0 form-control"
                type="text"
                placeholder="Yüzde cinsinden yetkinlik seviyesi"
                v-model="changeHizmetler.hizmetDescription"
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
              @click="changeHizmetKaydet"
              type="button"
              class="btn btn-success"
            >
              Kaydet
            </button>
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
      yetkinlikler: {
        yetkinlikIconCode: "",
        yetkinlikInnerHtml: "",
        yetkinlikSeviyesi: "",
      },

      yetkinliklerExtra: {
        yetkinlikIconCodeExtra: "",
        yetkinlikInnerHtmlExtra: "",
        yetkinlikSeviyesiExtra: "",
      },

      yabanciDil: {
        yabanciDilInnerHtml: "",
        yabanciDilSeviyesi: "",
      },

      hizmetler: {
        hizmetIconCode: "",
        hizmetInnerHtml: "",
        hizmetDescription: "",
      },

      changeYetkinlik: [],
      changeYetkinlikIndex: "",

      changeYetkinlikExtra: [],
      changeYetkinlikExtraIndex: "",

      changeYabanciDil: [],
      changeYabanciDilIndex: "",

      changeHizmetler: [],
      changeHizmetlerIndex: "",
    };
  },

  methods: {
    yetkinlik1Kaydet() {
      let classNameYetkinlik1 = document.getElementsByClassName("yetkinlik1");
      for (let i = 0; i < classNameYetkinlik1.length; i++) {
        if (
          classNameYetkinlik1[i].value == this.yetkinlikler.yetkinlikIconCode
        ) {
          this.yetkinlikler.yetkinlikInnerHtml =
            classNameYetkinlik1[i].innerHTML;
        }
      }
      this.$store.dispatch("setFireYetkinlik1", this.yetkinlikler);
    },

    yetkinlik2Kaydet() {
      let classNameYetkinlik2 = document.getElementsByClassName("yetkinlik2");
      for (let i = 0; i < classNameYetkinlik2.length; i++) {
        if (
          classNameYetkinlik2[i].value ==
          this.yetkinliklerExtra.yetkinlikIconCodeExtra
        ) {
          this.yetkinliklerExtra.yetkinlikInnerHtmlExtra =
            classNameYetkinlik2[i].innerHTML;
        }
      }
      this.$store.dispatch("setFireYetkinlik2", this.yetkinliklerExtra);
    },

    yabanciDilKaydet() {
      this.$store.dispatch("setFireYabanciDil", this.yabanciDil);
    },

    //Burası bugün yapıldı...
    hizmetKaydet() {
      let classNameHizmet = document.getElementsByClassName("hizmet");
      for (let i = 0; i < classNameHizmet.length; i++) {
        if (classNameHizmet[i].value == this.hizmetler.hizmetIconCode) {
          this.hizmetler.hizmetInnerHtml = classNameHizmet[i].innerHTML;
        }
      }
      this.$store.dispatch("setFireHizmet", this.hizmetler);
    },

    yetkinliklerFormuSil() {
      if (!this.$store.state.skills.isPageYetkinlikFullDTO) {
        alert("Silinecek veri bulunamadı.");
      } else {
        this.$store.dispatch("deleteYetkinliklerFormu");
      }
    },

    yetkinlikler1Sil() {
      this.$store.dispatch("deleteYetkinlikler1");
    },

    yetkinlikler2Sil() {
      this.$store.dispatch("deleteYetkinlikler2");
    },

    //Burası bugün yapıldı...
    hizmetlerSil() {
      this.$store.dispatch("deleteHizmetler");
    },

    yabanciDillerSil() {
      this.$store.dispatch("deleteYabanciDiller");
    },

    yetkinlik1Sil(index) {
      this.$store.dispatch("deleteYetkinlik1", index);
    },

    yetkinlik2Sil(index) {
      this.$store.dispatch("deleteYetkinlik2", index);
    },

    yabanciDilSil(index) {
      this.$store.dispatch("deleteYabanciDil", index);
    },

    //Burası bugün yapıldı...
    hizmetSil(index) {
      this.$store.dispatch("deleteHizmet", index);
    },

    modelIndexYetkinlik1(index) {
      for (
        let i = 0;
        i < this.$store.state.skills.AnaYetkinliklerDTO.length;
        i++
      ) {
        this.changeYetkinlik = this.$store.state.skills.AnaYetkinliklerDTO[
          index
        ];
        this.changeYetkinlikIndex = index;
      }
    },

    modelIndexYetkinlik2(index) {
      for (
        let i = 0;
        i < this.$store.state.skills.YanYetkinliklerDTO.length;
        i++
      ) {
        this.changeYetkinlikExtra = this.$store.state.skills.YanYetkinliklerDTO[
          index
        ];
        this.changeYetkinlikExtraIndex = index;
      }
    },

    modelIndexYabanciDil(index) {
      for (
        let i = 0;
        i < this.$store.state.skills.YabanciDillerDTO.length;
        i++
      ) {
        this.changeYabanciDil = this.$store.state.skills.YabanciDillerDTO[
          index
        ];
        this.changeYabanciDilIndex = index;
      }
    },

    //Burası bugün yapıldı...
    modelIndexHizmetler(index) {
      for (let i = 0; i < this.$store.state.skills.HizmetlerDTO.length; i++) {
        this.changeHizmetler = this.$store.state.skills.HizmetlerDTO[index];
        this.changeHizmetlerIndex = index;
      }
    },

    changeYetkinlik1Kaydet() {
      let classNameYetkinlik1Modal = document.getElementsByClassName(
        "yetkinlik1Modal"
      );
      for (let i = 0; i < classNameYetkinlik1Modal.length; i++) {
        if (
          classNameYetkinlik1Modal[i].value ==
          this.changeYetkinlik.yetkinlikIconCode
        ) {
          this.changeYetkinlik.yetkinlikInnerHtml =
            classNameYetkinlik1Modal[i].innerHTML;
        }
      }
      this.$store.dispatch("changeYetkinlik1", {
        changeYetkinlik1: this.changeYetkinlik,
        changeYetkinlik1Index: this.changeYetkinlikIndex,
      });
    },

    changeYetkinlik2Kaydet() {
      let classNameYetkinlik2Modal = document.getElementsByClassName(
        "yetkinlik2Modal"
      );
      for (let i = 0; i < classNameYetkinlik2Modal.length; i++) {
        if (
          classNameYetkinlik2Modal[i].value ==
          this.changeYetkinlikExtra.yetkinlikIconCodeExtra
        ) {
          this.changeYetkinlikExtra.yetkinlikInnerHtmlExtra =
            classNameYetkinlik2Modal[i].innerHTML;
        }
      }
      this.$store.dispatch("changeYetkinlik2", {
        changeYetkinlik2: this.changeYetkinlikExtra,
        changeYetkinlik2Index: this.changeYetkinlikExtraIndex,
      });
    },

    changeYabanciDilKaydet() {
      this.$store.dispatch("changeYabanciDil", {
        changeYabanciDil: this.changeYabanciDil,
        changeYabanciDilIndex: this.changeYabanciDilIndex,
      });
    },

    //Burası bugün yapıldı...
    changeHizmetKaydet() {
      let classNameHizmetModal = document.getElementsByClassName("hizmetModal");
      for (let i = 0; i < classNameHizmetModal.length; i++) {
        if (
          classNameHizmetModal[i].value == this.changeHizmetler.hizmetIconCode
        ) {
          this.changeHizmetler.hizmetInnerHtml =
            classNameHizmetModal[i].innerHTML;
        }
      }
      this.$store.dispatch("changeHizmet", {
        changeHizmetler: this.changeHizmetler,
        changeHizmetlerIndex: this.changeHizmetlerIndex,
      });
    },
  },

  computed: {
    getYetkinlikler1() {
      return this.$store.state.skills.AnaYetkinliklerDTO;
    },

    getYetkinlikler2() {
      return this.$store.state.skills.YanYetkinliklerDTO;
    },

    getYabanciDiller() {
      return this.$store.state.skills.YabanciDillerDTO;
    },

    //Burası bugün yapıldı...
    getHizmetler() {
      return this.$store.state.skills.HizmetlerDTO;
    },
  },

  created() {
    this.$store.dispatch("getFireYetkinliklerFormu");

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