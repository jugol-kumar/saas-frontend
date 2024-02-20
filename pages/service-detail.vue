<script setup>
const isToggled = ref(false);
</script>

<template>
  <div class="bg-glass-morphi glass-morphi-border d-flex align-items-center justify-content-between p-4 rounded mt-4">
    <h3>Packages</h3>
    <button class="primary-button" data-bs-toggle="offcanvas" data-bs-target="#addPackageModal">Add New</button>
  </div>
  <div class="row mt-4 services-detail">
    <div class="col-lg-4 col-md-6 col-12">
      <div class="glass-morphi-border bg-glass-morphi p-3 rounded mb-4 position-relative">

        <button @click="isToggled = !isToggled" class="position-absolute z-3" style="top:10px;right:10px;">
          <Icon name="ph:dots-three-outline-vertical-bold" />
        </button>
        <div class="bg-glass-morphi glass-morphi-border  actions" :class="{'actions--toggled': isToggled}">
          <button class="">
            <Icon name="material-symbols:edit" /> Edit
          </button>
          <button class="">
            <Icon name="material-symbols:delete-outline" /> Delete
          </button>
        </div>

        <div data-bs-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseOne">
          <button class="position-absolute" style="bottom:10px;right:4px;">
            <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24" />
          </button>
          <h4 class="mb-4">Informative Website Package 1 (WordPress)</h4>
          <p>Price: 15000</p>
        </div>

        <div class="collapse" id="collapseOne">
          <div class="card card-body bg-transparent pt-4 border-0">
            <ul class="d-flex flex-column gap-2">
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">1 Domain (.com .net .org .info)</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">Web Hosting - 2 GB</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">Monthly Data Transfer- 20 GB</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">Email Address (Business) - 10</span>
              </li>
            </ul>
            <p class="pt-3 ms-n3">Position: 11</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-12">
      <div class="glass-morphi-border bg-glass-morphi p-3 rounded mb-4 position-relative">

        <button @click="isToggled = !isToggled" class="position-absolute z-3" style="top:10px;right:10px;">
          <Icon name="ph:dots-three-outline-vertical-bold" />
        </button>
        <div class="bg-glass-morphi glass-morphi-border  actions" :class="{'actions--toggled': isToggled}">
          <button class="" data-bs-toggle="offcanvas" data-bs-target="#addPackageModal">
            <Icon name="material-symbols:edit" /> Edit
          </button>
          <button class="">
            <Icon name="material-symbols:delete-outline" /> Delete
          </button>
        </div>

        <div data-bs-toggle="collapse" href="#collapseTow" role="button" aria-expanded="false" aria-controls="collapseTow">
          <button class="position-absolute" style="bottom:10px;right:4px;">
            <Icon name="material-symbols:keyboard-arrow-down-rounded" size="24" />
          </button>
          <h4 class="mb-4">Informative Website Package 1 (WordPress)</h4>
          <p>Price: 15000</p>
        </div>

        <div class="collapse" id="collapseTow">
          <div class="card card-body bg-transparent pt-4 border-0">
            <ul class="d-flex flex-column gap-2">
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">1 Domain (.com .net .org .info)</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">Web Hosting - 2 GB</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">Monthly Data Transfer- 20 GB</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <Icon name="material-symbols:check-circle-outline" size="20" />
                <span class="fw-semibold">Email Address (Business) - 10</span>
              </li>
            </ul>
            <p class="pt-3 ms-n3">Position: 11</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Offcanvas id="addPackageModal" title="Add Package">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Price</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Detail</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Position</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="primary-button">Save</button>
    </form>
  </Offcanvas>

  <Offcanvas id="editPackageModal" title="Edit Package">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Price</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Detail</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Position</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="primary-button">Save</button>
    </form>
  </Offcanvas>

  <Modal id="packageModal" title="Add Package" size="lg">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Price</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Detail</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Position</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
    </form>
  </Modal>

</template>