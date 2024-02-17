<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table"


const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "ROLE", value: "role" },
  { text: "PLAN", value: "plan" },
  { text: "BILLING", value: "billing" },
  { text: "STATUS", value: "status" },
  { text: "ACTION", value: "action",}
]

const items: Item[] = [
  { name: "Stephen Curry", role: "GSW", plan: 30, billing: 'G', status: "Active", action: "edit delete"},
  { name: "Lebron James", role: "LAL", plan: 6, billing: 'F', status: "Active", action: "edit delete" },
  { name: "Kevin Durant", role: "BKN", plan: 7, billing: 'F', status: "Active", action: "edit delete" },
  { name: "Giannis Antetokounmpo", role: "MIL", plan: 34, billing: 'F', status: "Active", action: "edit delete"},
]
</script>

<template>
  <div class="app-content content mt-5">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <h3 class="mb-2">Permissions List</h3>
        <p class="mb-3">Each category (Basic, Professional, and Business) includes the four predefined roles shown below.</p>

        <!-- Permission Table -->
        <div class="glass-morphi-border bg-glass-morphi p-3 rounded blur-bg-3">
          <EasyDataTable
              :headers="headers"
              :items="items"
              table-class-name="customize-table"
              :multiselect="true"
              no-hover
          />
        </div>
        <!--/ Permission Table -->
        <!-- Add Permission Modal -->
        <div class="modal fade" id="addPermissionModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-transparent">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body px-sm-5 pb-5">
                <div class="text-center mb-2">
                  <h1 class="mb-1">Add New Permission</h1>
                  <p>Permissions you may use and assign to your users.</p>
                </div>
                <form id="addPermissionForm" class="row" onsubmit="return false">
                  <div class="col-12">
                    <label class="form-label" for="modalPermissionName">Permission Name</label>
                    <input type="text" id="modalPermissionName" name="modalPermissionName" class="form-control" placeholder="Permission Name" autofocus data-msg="Please enter permission name" />
                  </div>
                  <div class="col-12 mt-75">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="corePermission" />
                      <label class="form-check-label" for="corePermission"> Set as core permission </label>
                    </div>
                  </div>
                  <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary mt-2 me-1">Create Permission</button>
                    <button type="reset" class="btn btn-outline-secondary mt-2" data-bs-dismiss="modal" aria-label="Close">
                      Discard
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--/ Add Permission Modal -->
        <!-- Edit Permission Modal -->
        <div class="modal fade" id="editPermissionModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-transparent">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-3 pt-0">
                <div class="text-center mb-2">
                  <h1 class="mb-1">Edit Permission</h1>
                  <p>Edit permission as per your requirements.</p>
                </div>

                <div class="alert alert-warning" role="alert">
                  <h6 class="alert-heading">Warning!</h6>
                  <div class="alert-body">
                    By editing the permission name, you might break the system permissions functionality. Please ensure you're
                    absolutely certain before proceeding.
                  </div>
                </div>

                <form id="editPermissionForm" class="row" onsubmit="return false">
                  <div class="col-sm-9">
                    <label class="form-label" for="editPermissionName">Permission Name</label>
                    <input type="text" id="editPermissionName" name="editPermissionName" class="form-control" placeholder="Enter a permission name" tabindex="-1" data-msg="Please enter permission name" />
                  </div>
                  <div class="col-sm-3 ps-sm-0">
                    <button type="submit" class="btn btn-primary mt-2">Update</button>
                  </div>
                  <div class="col-12 mt-75">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="editCorePermission" />
                      <label class="form-check-label" for="editCorePermission"> Set as core permission </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--/ Edit Permission Modal -->

      </div>
    </div>
  </div>
</template>


<style scoped>

.customize-table {
  --easy-table-header-background-color: transparent !important;
  --easy-table-body-row-background-color: transparent !important;
  --easy-table-footer-background-color: transparent !important;
  --easy-table-border: transparent !important;
  --easy-table-body-row-hover-background-color: transparent !important;
  --easy-table-row-border: transparent;
  --easy-table-header-font-size: 17px !important;
  --easy-table-body-row-font-size: 15px !important;
  --easy-table-header-height: 40px !important;
  --easy-table-footer-font-color: #fff !important;
}
</style>