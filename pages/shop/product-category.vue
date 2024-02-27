<script setup>

const categories = ref(null);
</script>

<template>
  <div class="row flex-column py-4">
    <div class="col-lg-5">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h3>All Category</h3>
        <button class="primary-button d-flex align-items-center gap-2 p-2" data-bs-target="#addCategoryModel" data-bs-toggle="modal">
          <Icon name="material-symbols:playlist-add-rounded" size="20" />
        </button>
      </div>
      <div class="bg-glass-morphi glass-morphi-border p-4 d-flex aling-item-center justify-content-between gap-2 rounded">
        <div class="d-flex align-items-center gap-3">
          <img src="https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150713961.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=sph" class="width-40px height-40px rounded-3" alt="">
          <h3>Gadget</h3>
        </div>

        <div class="d-flex align-items-center gap-3">
          <button class="primary-icon-button" data-bs-target="#addCategoryModel" data-bs-toggle="modal">
            <Icon name="material-symbols:box-edit-outline" />
          </button>
          <button class="primary-icon-button">
            <Icon name="material-symbols:delete-outline" />
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal -->
  <div class="modal fade blur-bg" id="addCategoryModel" tabindex="-1" aria-labelledby="addCategoryModelLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-glass-morphi glass-morphi-border">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Category</h1>
          <button type="button" class="btn-close d-flex align-items-center justify-content-center " data-bs-dismiss="modal" aria-label="Close">
            <Icon name="material-symbols:close" />
          </button>
        </div>
        <div class="modal-body d-flex flex-column gap-3">
          <input type="text" class="border p-2 rounded w-100" placeholder="Category name..">
          <input type="file" class="border p-2 rounded w-100">
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="glass-morphi-button" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="primary-button">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>