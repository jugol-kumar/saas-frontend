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
  <div class="app-content content my-5">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">

      <div class="content-body">
        <h3 class="fw-semibold">Roles List</h3>
        <p class="mb-4">
          A role provided access to predefined menus and features so that depending <br />
          on assigned role an administrator can have access to what he need
        </p>
        <!-- Role cards -->
        <div class="row">
          <div class="col-xl-4 col-lg-6 col-md-6">
            <div class="card bg-glass-morphi glass-morphi-border">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <span class="text-white">Total 4 users</span>
                  <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy" class="avatar avatar-sm pull-up">
                      <img class="rounded-circle" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.2.1037843751.1707219469&semt=sph" alt="Avatar" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Allen Rieske" class="avatar avatar-sm pull-up">
                      <img class="rounded-circle" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.2.1037843751.1707219469&semt=sph" alt="Avatar" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Julee Rossignol" class="avatar avatar-sm pull-up">
                      <img class="rounded-circle" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.2.1037843751.1707219469&semt=sph" alt="Avatar" />
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kaith D'souza" class="avatar avatar-sm pull-up">
                      <img class="rounded-circle" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.2.1037843751.1707219469&semt=sph" alt="Avatar" />
                    </li>
                  </ul>
                </div>
                <div class="d-flex justify-content-between align-items-end mt-1 pt-25">
                  <div class="role-heading">
                    <h4 class="fw-bolder mb-2">Administrator</h4>
                    <a href="javascript:;" class="role-edit-modal" data-bs-toggle="modal" data-bs-target="#addRoleModal">
                      <small class="fw-bolder primary-color">Edit Role</small>
                    </a>
                  </div>
                  <a href="javascript:void(0);" class="text-body">
                    <Icon name="carbon:copy" class="icon width-20px height-20px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6">
            <div class="card bg-glass-morphi glass-morphi-border">
              <div class="row">
                <div class="col-sm-5">
                  <div class="d-flex align-items-end justify-content-center h-100">
                    <img src="/images/role-bg.png" class="img-fluid mt-2" alt="Image" width="85" />
                  </div>
                </div>
                <div class="col-sm-7">
                  <div class="card-body text-sm-end text-center ps-sm-0">
                    <a href="javascript:void(0)" data-bs-target="#addRoleModal" data-bs-toggle="modal" class="stretched-link text-nowrap add-new-role">
                      <span class="primary-button mb-1">Add New Role</span>
                    </a>
                    <p class="mb-0">Add role, if it does not exist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/ Role cards -->

        <h3 class="mt-5">Total users with their roles</h3>
        <p class="mb-4">Find all of your company’s administrator accounts and their associate roles.</p>
        <!-- table -->
        <div class="glass-morphi-border bg-glass-morphi p-3 rounded blur-bg-3">
          <EasyDataTable
              :headers="headers"
              :items="items"
              table-class-name="customize-table"
              :multiselect="true"
              no-hover
          />
        </div>
        <!-- table -->
        <!-- Add Role Modal -->
        <div class="modal fade  blur-bg" id="addRoleModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
            <div class="modal-content  bg-glass-morphi glass-morphi-border">
              <div class="modal-header d-flex justify-content-end bg-transparent">
                <button type="button" class="d-flex align-items-center justify-content-between" data-bs-dismiss="modal" aria-label="Close">
                  <Icon name="material-symbols:close" class="icon" size="30" />
                </button>
              </div>
              <div class="modal-body px-5 pb-5 ">
                <div class="text-center mb-4">
                  <h1 class="role-title">Add New Role</h1>
                  <p>Set role permissions</p>
                </div>
                <!-- Add role form -->
                <form id="addRoleForm" class="row" onsubmit="return false">
                  <div class="col-12">
                    <label class="form-label text-white" for="modalRoleName">Role Name</label>
                    <input type="text" id="modalRoleName" name="modalRoleName" class="form-control" placeholder="Enter role name" tabindex="-1" data-msg="Please enter role name" />
                  </div>
                  <div class="col-12">
                    <h4 class="mt-2 pt-50">Role Permissions</h4>
                    <!-- Permission table -->
                    <div class="table-responsive">
                      <table class="table table-flush-spacing bg-transparent">
                        <tbody>
                        <tr>
                          <td class="text-nowrap fw-bolder">
                            Administrator Access
                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Allows a full access to the system">
                                                                <i data-feather="info"></i>
                                                            </span>
                          </td>
                          <td>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="selectAll" />
                              <label class="form-check-label" for="selectAll"> Select All </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">User Management</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="userManagementRead" />
                                <label class="form-check-label" for="userManagementRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="userManagementWrite" />
                                <label class="form-check-label" for="userManagementWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="userManagementCreate" />
                                <label class="form-check-label" for="userManagementCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Content Management</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="contentManagementRead" />
                                <label class="form-check-label" for="contentManagementRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="contentManagementWrite" />
                                <label class="form-check-label" for="contentManagementWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="contentManagementCreate" />
                                <label class="form-check-label" for="contentManagementCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Disputes Management</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="dispManagementRead" />
                                <label class="form-check-label" for="dispManagementRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="dispManagementWrite" />
                                <label class="form-check-label" for="dispManagementWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="dispManagementCreate" />
                                <label class="form-check-label" for="dispManagementCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Database Management</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="dbManagementRead" />
                                <label class="form-check-label" for="dbManagementRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="dbManagementWrite" />
                                <label class="form-check-label" for="dbManagementWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="dbManagementCreate" />
                                <label class="form-check-label" for="dbManagementCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Financial Management</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="finManagementRead" />
                                <label class="form-check-label" for="finManagementRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="finManagementWrite" />
                                <label class="form-check-label" for="finManagementWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="finManagementCreate" />
                                <label class="form-check-label" for="finManagementCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Reporting</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="reportingRead" />
                                <label class="form-check-label" for="reportingRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="reportingWrite" />
                                <label class="form-check-label" for="reportingWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="reportingCreate" />
                                <label class="form-check-label" for="reportingCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">API Control</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="apiRead" />
                                <label class="form-check-label" for="apiRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="apiWrite" />
                                <label class="form-check-label" for="apiWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="apiCreate" />
                                <label class="form-check-label" for="apiCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Repository Management</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="repoRead" />
                                <label class="form-check-label" for="repoRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="repoWrite" />
                                <label class="form-check-label" for="repoWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="repoCreate" />
                                <label class="form-check-label" for="repoCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-nowrap fw-bolder">Payroll</td>
                          <td>
                            <div class="d-flex">
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="payrollRead" />
                                <label class="form-check-label" for="payrollRead"> Read </label>
                              </div>
                              <div class="form-check me-3 me-lg-5">
                                <input class="form-check-input" type="checkbox" id="payrollWrite" />
                                <label class="form-check-label" for="payrollWrite"> Write </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="payrollCreate" />
                                <label class="form-check-label" for="payrollCreate"> Create </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- Permission table -->
                  </div>
                  <div class="col-12 text-center mt-2">
                    <button type="submit" class="primary-button me-1">Submit</button>
                    <button type="reset" class="glass-morphi-button" data-bs-dismiss="modal" aria-label="Close">
                      Discard
                    </button>
                  </div>
                </form>
                <!--/ Add role form -->
              </div>
            </div>
          </div>
        </div>
        <!--/ Add Role Modal -->

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