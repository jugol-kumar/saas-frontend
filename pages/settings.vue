<script setup>
</script>
<template>
  <div class="row align-items-start py-5 setting-tab">

    <div class="col-lg-3">
      <div class="nav flex-column nav-pills me-3 d-flex flex-column gap-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-smtp-tab" data-bs-toggle="pill" data-bs-target="#v-pills-smtp" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">SMTP Setup</button>
        <button class="nav-link" id="v-pills-terms-tab" data-bs-toggle="pill" data-bs-target="#v-pills-terms" type="button" role="tab" aria-controls="v-pills-terms" aria-selected="false">Terms and conditions</button>
        <button class="nav-link" id="v-pills-policy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-policy" type="button" role="tab" aria-controls="v-pills-policy" aria-selected="false">Payment Policy</button>
        <button class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-payment" type="button" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payment Methods</button>
        <button class="nav-link" id="v-pills-quotaiton-tab" data-bs-toggle="pill" data-bs-target="#v-pills-quotaiton" type="button" role="tab" aria-controls="v-pills-quotaiton" aria-selected="false">Quotaiton Template</button>
        <button class="nav-link" id="v-pills-invoice-tab" data-bs-toggle="pill" data-bs-target="#v-pills-invoice" type="button" role="tab" aria-controls="v-pills-invoice" aria-selected="false">Invoice Template</button>
      </div>
    </div>

    <div class="col-lg-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-smtp" role="tabpanel" aria-labelledby="v-pills-smtp-tab" tabindex="0">
          <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
            <h3 class="mb-4">SMTP Setting</h3>
            <div class="mb-4">
              <label for="mail-driver" class="d-block mb-2">Mail Driver</label>
              <select >
                <option>SMTP</option>
                <option>Send Mail</option>
                <option>Post Mark</option>
              </select>
            </div>
            <div class="mb-4 row">
              <div class="col-6">
                <label for="mail-host" class="d-block mb-2">Mail Host</label>
                <input type="text" class="p-2 rounded border w-100" />
              </div>
              <div class="col-6">
                <label for="mail-port" class="d-block mb-2">Mail Port</label>
                <input type="text" class="p-2 rounded border w-100" />
              </div>
            </div>
            <div class="mb-4 row">
              <div class="col-6">
                <label for="username" class="d-block mb-2">Username</label>
                <input type="text" class="p-2 rounded border w-100" />
              </div>
              <div class="col-6">
                <label for="password" class="d-block mb-2">Password</label>
                <input type="text" class="p-2 rounded border w-100" />
              </div>
            </div>
            <div class="mb-4 row">
              <div class="col-6">
                <label for="form email" class="d-block mb-2">Form Email</label>
                <input type="text" class="p-2 rounded border w-100" />
              </div>
              <div class="col-lg-6">
                <label for="encryption" class="d-block mb-2">Encryption</label>
                <input type="text" class="p-2 rounded border w-100" />
              </div>
            </div>
            <div>
              <button class="primary-button">Submit</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-terms" role="tabpanel" aria-labelledby="v-pills-terms-tab" tabindex="0">
          <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
            <h3 class="mb-3">Terms And Condition</h3>
            <div class="mb-4">
              <textarea class="w-100 bg-transparent border rounded p-2 text-white fs-5" rows="8"></textarea>
            </div>
            <div>
              <button class="primary-button">Submit</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-policy" role="tabpanel" aria-labelledby="v-pills-policy-tab" tabindex="0">
          <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
            <h3 class="mb-3">Payment Policy</h3>
            <div class="mb-4">
              <textarea class="w-100 bg-transparent border rounded p-2 text-white fs-5" rows="8"></textarea>
            </div>
            <div>
              <button class="primary-button">Submit</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab" tabindex="0">
          <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
            <h3 class="mb-3">Payment Methods</h3>
            <div class="mb-4">
              <textarea class="w-100 bg-transparent border rounded p-2 text-white fs-5" rows="8"></textarea>
            </div>
            <div>
              <button class="primary-button">Submit</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-quotaiton" role="tabpanel" aria-labelledby="v-pills-quotaiton-tab" tabindex="0">
          <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
            <h3 class="mb-3">Quotaiton Email Template</h3>
            <div class="mb-4">
              <textarea class="w-100 bg-transparent border rounded p-2 text-white fs-5" rows="8"></textarea>
            </div>
            <div>
              <button class="primary-button">Submit</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="v-pills-invoice" role="tabpanel" aria-labelledby="v-pills-invoice-tab" tabindex="0">
          <div class="bg-glass-morphi glass-morphi-border p-3 rounded">
            <h3 class="mb-3">Invoice Email Template</h3>
            <div class="mb-4">
              <textarea class="w-100 bg-transparent border rounded p-2 text-white fs-5" rows="8"></textarea>
            </div>
            <div>
              <button class="primary-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>