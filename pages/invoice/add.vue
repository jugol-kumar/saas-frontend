<script setup>
</script>

<template>
  <div class="app-content content mt-5">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="invoice-add-wrapper">
          <div class="row invoice-add">
            <!-- Invoice Add Left starts -->
            <div class="col-xl-9 col-md-8 col-12">
              <div class="card invoice-preview-card   glass-morphi-border bg-glass-morphi">
                <!-- Header starts -->
                <div class="card-body invoice-padding pb-0">
                  <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                    <div>
                      <div class="logo-wrapper">
                        <h3 class="primary-color mb-3">Takar Hisab</h3>
                      </div>
                      <p class="card-text mb-25">Office 149, 450 South Brand Brooklyn</p>
                      <p class="card-text mb-25">San Diego County, CA 91905, USA</p>
                      <p class="card-text mb-0">+1 (123) 456 7891, +44 (876) 543 2198</p>
                    </div>
                    <div class="invoice-number-date mt-md-0 mt-2">
                      <div class="d-flex align-items-center justify-content-md-end mb-1">
                        <h4 class="invoice-title">Invoice</h4>
                        <div class="input-group input-group-merge invoice-edit-input-group ">
                          <div class="input-group-text primary-bg primary-border">
                            <Icon name="ph:hash" />
                          </div>
                          <input type="text" class="form-control invoice-edit-input glass-morphi-border" placeholder="53634" />
                        </div>
                      </div>
                      <div class="d-flex align-items-center mb-1">
                        <span class="title">Date:</span>
                        <input type="text" class="form-control invoice-edit-input date-picker" />
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="title">Due Date:</span>
                        <input type="text" class="form-control invoice-edit-input due-date-picker" />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Header ends -->

                <hr class="invoice-spacing" />

                <!-- Address and Contact starts -->
                <div class="card-body invoice-padding pt-0">
                  <div class="row row-bill-to invoice-spacing">
                    <div class="col-xl-8 mb-lg-1 col-bill-to ps-0">
                      <h6 class="invoice-to-title">Invoice To:</h6>
                      <div class="invoice-customer">
                        <v-select />
                        <button
                            class="glass-morphi-button mt-2 d-flex align-items-center gap-2"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#add-new-customer-sidebar"
                        >
                          <Icon name="material-symbols:add" />
                          Add New Customer
                        </button>
                      </div>
                    </div>
                    <div class="col-xl-4 p-0 ps-xl-2 mt-xl-0 mt-2">
                      <h6 class="mb-2">Payment Details:</h6>
                      <table>
                        <tbody>
                        <tr>
                          <td class="pe-1">Total Due:</td>
                          <td><strong>$12,110.55</strong></td>
                        </tr>
                        <tr>
                          <td class="pe-1">Bank name:</td>
                          <td>American Bank</td>
                        </tr>
                        <tr>
                          <td class="pe-1">Country:</td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td class="pe-1">IBAN:</td>
                          <td>ETD95476213874685</td>
                        </tr>
                        <tr>
                          <td class="pe-1">SWIFT code:</td>
                          <td>BR91905</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Address and Contact ends -->

                <!-- Product Details starts -->
                <div class="card-body invoice-padding invoice-product-details bg-transparent">
                  <form class="source-item">
                    <div data-repeater-list="group-a">
                      <div class="repeater-wrapper" data-repeater-item>
                        <div class="row">
                          <div class="col-12 d-flex position-relative pe-0 border">
                            <div class="row w-100 pe-lg-0 pe-1 py-2">
                              <div class="col-lg-5 col-12 mb-lg-0 mb-2 mt-lg-0 mt-2">
                                <p class="card-text col-title mb-md-50 mb-0">Item</p>
                                <v-select />

                                <textarea class="form-control mt-2 bg-transparent text-white" rows="1">Customization & Bug Fixes</textarea>
                              </div>
                              <div class="col-lg-3 col-12 my-lg-0 my-2">
                                <p class="card-text col-title mb-md-2 mb-0">Cost</p>
                                <input type="number" class="form-control" value="24" placeholder="24" />
                                <div class="mt-2">
                                  <span>Discount:</span>
                                  <span class="discount">0%</span>
                                  <span class="tax-1 ms-50" data-bs-toggle="tooltip" data-bs-placement="top" title="Tax 1">0%</span>
                                  <span class="tax-2 ms-50" data-bs-toggle="tooltip" data-bs-placement="top" title="Tax 2">0%</span>
                                </div>
                              </div>
                              <div class="col-lg-2 col-12 my-lg-0 my-2">
                                <p class="card-text col-title mb-md-2 mb-0">Qty</p>
                                <input type="number" class="form-control" value="1" placeholder="1" />
                              </div>
                              <div class="col-lg-2 col-12 mt-lg-0 mt-2">
                                <p class="card-text col-title mb-md-50 mb-0">Price</p>
                                <p class="card-text mb-0">$24.00</p>
                              </div>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-between border-start invoice-product-actions py-50 px-25 p-2">
                              <Icon name="material-symbols:close" size="20" />
                              <div class="dropdown">
                                <Icon name="material-symbols:settings" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" size="20" />
                                <div class="dropdown-menu dropdown-menu-end item-options-menu p-1 bg-transparent blur-bg bg-glass-morphi glass-morphi-border p-2" aria-labelledby="dropdownMenuButton">
                                  <div class="mb-1">
                                    <label for="discount-input" class="form-label text-white">Discount(%)</label>
                                    <input type="number" class="form-control" id="discount-input" />
                                  </div>
                                  <div class="form-row mt-50">
                                    <div class="mb-1 col-md-6">
                                      <label for="tax-1-input" class="form-label text-white">Tax 1</label>
                                      <select name="tax-1-input" id="tax-1-input" class="form-select tax-select bg-transparent text-white">
                                        <option value="0%" selected>0%</option>
                                        <option value="1%">1%</option>
                                        <option value="10%">10%</option>
                                        <option value="18%">18%</option>
                                        <option value="40%">40%</option>
                                      </select>
                                    </div>
                                    <div class="mb-1 col-md-6">
                                      <label for="tax-2-input" class="form-label text-white">Tax 2</label>
                                      <select name="tax-2-input" id="tax-2-input" class="form-select tax-select bg-transparent text-white">
                                        <option value="0%" selected>0%</option>
                                        <option value="1%">1%</option>
                                        <option value="10%">10%</option>
                                        <option value="18%">18%</option>
                                        <option value="40%">40%</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="dropdown-divider my-1"></div>
                                  <div class="d-flex align-items-center gap-3">
                                    <button type="button" class="primary-button">Apply</button>
                                    <button type="button" class="glass-morphi-button">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-12 px-0 mt-3">
                        <button type="button" class="primary-button p-1 d-flex align-items-center" data-repeater-create>
                          <Icon name="material-symbols:add-rounded" size="20" />
                          <span class="align-middle fs-6 ">Add Item</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- Product Details ends -->

                <!-- Invoice Total starts -->
                <div class="card-body invoice-padding">
                  <div class="row invoice-sales-total-wrapper">
                    <div class="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                      <div class="d-flex align-items-center mb-1">
                        <label for="salesperson" class="form-label text-white me-2">Salesperson:</label>
                        <input type="text" class="form-control ms-50" id="salesperson" placeholder="Edward Crowley" />
                      </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end order-md-2 order-1">
                      <div class="invoice-total-wrapper">
                        <div class="invoice-total-item">
                          <p class="invoice-total-title">Subtotal:</p>
                          <p class="invoice-total-amount">$1800</p>
                        </div>
                        <div class="invoice-total-item">
                          <p class="invoice-total-title">Discount:</p>
                          <p class="invoice-total-amount">$28</p>
                        </div>
                        <div class="invoice-total-item">
                          <p class="invoice-total-title">Tax:</p>
                          <p class="invoice-total-amount">21%</p>
                        </div>
                        <hr class="my-50" />
                        <div class="invoice-total-item">
                          <p class="invoice-total-title">Total:</p>
                          <p class="invoice-total-amount">$1690</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Invoice Total ends -->

                <hr class="invoice-spacing mt-0" />

                <div class="card-body invoice-padding py-0">
                  <!-- Invoice Note starts -->
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-2">
                        <label for="note" class="form-label fw-bold text-white">Note:</label>
                        <textarea class="form-control bg-transparent text-white" rows="2" id="note">It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</textarea>
                      </div>
                    </div>
                  </div>
                  <!-- Invoice Note ends -->
                </div>
              </div>
            </div>
            <!-- Invoice Add Left ends -->

            <!-- Invoice Add Right starts -->
            <div class="col-xl-3 col-md-4 col-12">
              <div>
                <div class="bg-glass-morphi glass-morphi-border p-2 mb-4 rounded">
                  <img src="/images/scan.png" class="w-100 h-auto" alt="">
                </div>
              </div>
              <div class="card glass-morphi-border bg-glass-morphi">
                <div class="card-body d-flex flex-column gap-3">
                  <button class="primary-button w-100 mb-75" disabled>Send Invoice</button>
                  <a href="" class="glass-morphi-button text-center w-100 mb-75">Preview</a>
                  <button type="button" class="glass-morphi-button w-100">Save</button>
                </div>
              </div>
              <div class="mt-2">
                <p class="mb-3">Accept payments via</p>
                <v-select />
                <div class="invoice-terms mt-3">
                  <div class="d-flex justify-content-between">
                    <label class="invoice-terms-title mb-0 text-white" for="paymentTerms">Payment Terms</label>
                    <Switch />
                  </div>
                  <div class="d-flex justify-content-between py-1">
                    <label class="invoice-terms-title mb-0 text-white" for="clientNotes">Client Notes</label>
                    <Switch />
                  </div>
                  <div class="d-flex justify-content-between">
                    <label class="invoice-terms-title mb-0 text-white" for="paymentStub">Payment Stub</label>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
            <!-- Invoice Add Right ends -->
          </div>

          <Offcanvas id="add-new-customer-sidebar" title="Add new customer">
            <form>
              <div class="mb-1">
                <label for="customer-name" class="form-label">Customer Name</label>
                <input type="text" class="form-control" id="customer-name" placeholder="John Doe" />
              </div>
              <div class="mb-1">
                <label for="customer-email" class="form-label">Email</label>
                <input type="email" class="form-control" id="customer-email" placeholder="example@domain.com" />
              </div>
              <div class="mb-1">
                <label for="customer-address" class="form-label">Customer Address</label>
                <textarea class="form-control bg-transparent text-white" id="customer-address" cols="2" rows="2"></textarea>
              </div>
              <div class="mb-1 position-relative">
                <label for="customer-country" class="form-label">Country</label>
                <v-select />
              </div>
              <div class="mb-1">
                <label for="customer-contact" class="form-label">Contact</label>
                <input type="number" class="form-control" id="customer-contact" placeholder="763-242-9206" />
              </div>
              <div class="mb-1 d-flex flex-wrap mt-2 gap-2">
                <button type="button" class="primary-button me-1" data-bs-dismiss="offcanvas">Add</button>
                <button type="button" class="glass-morphi-button btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </form>
          </Offcanvas>

        </section>

      </div>
    </div>
  </div>
</template>