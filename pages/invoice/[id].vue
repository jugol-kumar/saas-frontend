<script setup>
import {useToast} from "vue-toastification";

definePageMeta({
  middleware:['auth']
})

const toast = useToast();


const {data, error, pending} = useApiFetch(`customer/order/${useRoute().params?.id}`)
watch(error, ()=>{
  if(error?.value){
    toast.error(error?.value?.data?.message)
  }
})



const printInvoice = () =>{
  window.frames["print_frame"].document.title = document.title;
  window.frames["print_frame"].document.body.innerHTML = data.value?.invoice
  window.frames["print_frame"].window.focus();
  window.frames["print_frame"].window.print();
}

const addPayment = () =>{

}


</script>
<template>
  <div class="app-content content mt-5">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper container-xxl p-0">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="invoice-preview-wrapper">
          <div v-if="pending">
            <h1>Loading.........</h1>
          </div>
          <div v-else class="row invoice-preview">
            <!-- Invoice -->
            <div class="col-xl-9 col-md-8 col-12">
              <div class="card invoice-preview-card bg-glass-morphi glass-morphi-border">
                <div class="card-body invoice-padding pb-0">
                  <!-- Header starts -->
                  <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
                    <div>
                      <div class="logo-wrapper">
                        <h3 class="primary-color mb-3">Takar Hisab</h3>
                      </div>
                      <p class="card-text mb-25" style="width:60%">{{ data?.store?.address }}</p>
                      <p class="card-text mb-25">{{ data.store?.phone}}</p>
                      <p class="card-text mb-0">{{ data.store?.email }}</p>
                    </div>
                    <div class="mt-md-0 mt-2">
                      <h4 class=" mb-4 d-flex invoice-title">
                        Invoice
                        <span class="invoice-number ms-3">  {{ data.order_id }}</span>
                      </h4>
                      <div class="invoice-date-wrapper">
                        <p class="invoice-date-title fw-bold">Order Date:</p>
                        <p class="invoice-date">{{ data.order_date }}</p>
                      </div>
<!--                      <div class="invoice-date-wrapper">-->
<!--                        <p class="invoice-date-title fw-bold">Due Date:</p>-->
<!--&lt;!&ndash;                        <p class="invoice-date">29/08/2020</p>&ndash;&gt;-->
<!--                      </div>-->
                    </div>
                  </div>
                  <!-- Header ends -->
                </div>

                <hr class="invoice-spacing" />

                <!-- Address and Contact starts -->
                <div class="card-body invoice-padding pt-0">
                  <div class="row invoice-spacing">
                    <div class="col-xl-8 p-0">
                      <h6 class="mb-4">Invoice To:</h6>
                      <div v-if="data?.customer">
                        <h6 class="mb-25">{{ data?.customer?.name }}</h6>
                        <p class="card-text mb-25">{{ data?.custoemr?.address }}</p>
                        <p class="card-text mb-25">{{ data?.customer?.phone }}</p>
                        <p class="card-text mb-0">{{ data?.customer?.email }}</p>
                      </div>
                    </div>


                    <div class="col-xl-4 p-0 mt-xl-0 mt-2">
                      <h6 class="mb-4">Payment Details:</h6>
                      <table>
                        <tbody>
                          <tr v-if="data?.pay_due">
                            <td class="pe-1">Total Due:</td>
                            <td><span class="fw-bold">{{ data?.pay_due }}</span></td>
                          </tr>

                          <tr v-if="data?.pay_due">
                            <td class="pe-1">Payment Status: </td>
                            <td><span class="fw-bold">Due</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Address and Contact ends -->

                <!-- Invoice Description starts -->
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                    <tr>
                      <th class="py-3">Task description</th>
                      <th class="py-3">Qty</th>
                      <th class="py-3">Price</th>
                      <th class="py-3">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-if="data?.order_details.length">
                      <tr v-for="(item, i) in data?.order_details" :key="`single-item-${i}`">
                        <td class="py-3">
                          <p class="card-text fw-bold mb-25">{{ item?.item_details?.name }}</p>
                          <p class="card-text text-nowrap">
                            Type: {{ item?.item_details?.type }}
                          </p>
                        </td>
                        <td class="py-3">
                          <span class="fw-bold">{{ item?.quantity }}</span>
                        </td>
                        <td class="py-3">
                          <span class="fw-bold">{{ item?.item_details?.price }} ৳</span>
                        </td>
                        <td class="py-3">
                          <span class="fw-bold">{{ item?.quantity * item?.item_details?.price }} ৳</span>
                        </td>
                      </tr>
                    </template>
                    </tbody>
                  </table>
                </div>

                <div class="card-body invoice-padding pb-0">
                  <div class="row invoice-sales-total-wrapper">
                    <div class="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                      <p class="card-text mb-0">
                        <span class="fw-bold">Salesperson:</span> <span class="ms-75">Alfie Solomons</span>
                      </p>
                    </div>
                    <div class="col-md-6 d-flex justify-content-end order-md-2 order-1">
                      <div class="invoice-total-wrapper">
                        <div class="invoice-total-item d-flex">
                          <p class="invoice-total-title">Subtotal:</p>
                          <p class="invoice-total-amount">{{ data?.sub_total }} ৳</p>
                        </div>
                        <div class="invoice-total-item  d-flex">
                          <p class="invoice-total-title">Total Pay:</p>
                          <p class="invoice-total-amount">{{ data?.pay_bill}} ৳</p>
                        </div>
<!--                        <div class="invoice-total-item  d-flex ">-->
<!--                          <p class="invoice-total-title">Tax:</p>-->
<!--                          <p class="invoice-total-amount">21%</p>-->
<!--                        </div>-->
                        <hr class="my-50" />
                        <div class="invoice-total-item d-flex">
                          <p class="invoice-total-title">Total Due:</p>
                          <p class="invoice-total-amount">{{ data?.pay_due }} ৳</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Invoice Description ends -->

                <hr class="invoice-spacing" />

                <!-- Invoice Note starts -->
                <div class="card-body invoice-padding pt-0">
                  <div class="row">
                    <div class="col-12">
                      <span class="fw-bold">Note:</span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <!-- Invoice Note ends -->
              </div>
            </div>
            <!-- /Invoice -->
            <!-- Invoice Actions -->
            <div class="col-xl-3 col-md-4 col-12">
              <button class="btn bg-grayscale glass-morphi-button" @click="printInvoice">Print Invoice</button>
              <button class="btn bg-grayscale glass-morphi-button" @click="addPayment">Add Payment</button>
            </div>
            <!-- /Invoice Actions -->
          </div>
        </section>

        <!-- Send Invoice Sidebar -->
        <Offcanvas id="send-invoice-sidebar" title="Invoce Send To">
          <form>
            <div class="mb-3">
              <label for="invoice-from" class="form-label text-white">From</label>
              <input type="text" class="form-control" id="invoice-from" value="shelbyComapny@email.com" placeholder="company@email.com" />
            </div>
            <div class="mb-3">
              <label for="invoice-to" class="form-label text-white">To</label>
              <input type="text" class="form-control" id="invoice-to" value="qConsolidated@email.com" placeholder="company@email.com" />
            </div>
            <div class="mb-3">
              <label for="invoice-subject" class="form-label text-white">Subject</label>
              <input type="text" class="form-control" id="invoice-subject" value="Invoice of purchased Admin Templates" placeholder="Invoice regarding goods" />
            </div>
            <div class="mb-3">
              <label for="invoice-message" class="form-label text-white">Message</label>
              <textarea class="form-control  bg-transparent text-white" name="invoice-message" id="invoice-message" cols="3" rows="11" placeholder="Message...">Dear Queen Consolidated, Thank you for your business, always a pleasure to work with you! We have generated a new invoice in the amount of $95.59 We would appreciate payment of this invoice by 05/11/2019</textarea>
            </div>
            <div class="mb-3">
                      <span class="badge badge-light-primary">
                          <i data-feather="link" class="me-25"></i>
                          <span class="align-middle">Invoice Attached</span>
                      </span>
            </div>
            <div class="mb-1 d-flex flex-wrap mt-2">
              <button type="button" class="primary-button me-1" data-bs-dismiss="modal">Send</button>
              <button type="button" class="glass-morphi-button" data-bs-dismiss="modal">Cancel</button>
            </div>
          </form>
        </Offcanvas>

        <!-- /Send Invoice Sidebar -->

        <!-- Add Payment Sidebar -->
        <Offcanvas id="add-payment-sidebar" title="Add Payment">
          <form>
            <div class="mb-3">
              <input id="balance" class="form-control" type="text" value="Invoice Balance: 5000.00" disabled />
            </div>
            <div class="mb-3">
              <label class="form-label text-white" for="amount">Payment Amount</label>
              <input id="amount" class="form-control" type="number" placeholder="$1000" />
            </div>
            <div class="mb-3">
              <label class="form-label text-white" for="payment-date">Payment Date</label>
              <input id="payment-date" class="form-control date-picker" type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label text-white" for="payment-method">Payment Method</label>
              <v-select />
            </div>
            <div class="mb-3">
              <label class="form-label text-white" for="payment-note">Internal Payment Note</label>
              <textarea class="form-control bg-transparent text-white" id="payment-note" rows="5"></textarea>
            </div>
            <div class="d-flex flex-wrap mb-0">
              <button type="button" class="primary-button me-1" data-bs-dismiss="offcanvas">Send</button>
              <button type="button" class="glass-morphi-button" data-bs-dismiss="offcanvas">Cancel</button>
            </div>
          </form>
        </Offcanvas>

        <!-- /Add Payment Sidebar -->

      </div>
    </div>
  </div>


  <iframe id="printing-frame" name="print_frame" src="about:blank" style="display:none;"/>
</template>