<script setup>

definePageMeta({
  layout:false
})
</script>

<template>
  <div class="p-2 pos">
    <div class="bg-glass-morphi glass-morphi-border p-3 rounded d-flex align-items-center justify-content-between">
      <p>Total Amount: <span class="fw-semibold">560</span></p>
      <div class="d-flex align-items-center gap-3">
        <NuxtLink to="/" class="bg-glass-morphi width-30px height-30px d-flex align-items-center justify-content-center glass-morphi-border rounded-3 primary-bg-hover">
          <Icon name="material-symbols:android-google-home" size="20" class="icon" />
        </NuxtLink>
        <NuxtLink to="/dashboard" class="d-flex align-items-center gap-2 text-white bg-glass-morphi glass-morphi-border py-1 px-3 rounded-4 pe-2 primary-bg-hover">
          Close Terminal
          <Icon name="material-symbols:close-rounded" size="20" />
        </NuxtLink>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-lg-8">
          <div class="pos-filter">
            <div class="d-flex align-items-center">
              <input type="text" class="w-100 p-2 rounded glass-morphi-border bg-glass-morphi" placeholder="search product" >
              <Icon name="material-symbols:search" size="20" class="ms-n4" />
            </div>
            <div class="d-flex align-items-center justify-content-between py-2">
              <div class="d-flex align-items-center gap-2 py-3">
                <input type="radio" name="category" value="all-category" id="all-category" hidden checked>
                <label for="all-category" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">All Category</label>

                <input type="radio" name="category" value="electric" id="electric" hidden>
                <label for="electric" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">Electric</label>

                <input type="radio"  name="category" value="gadget" id="gadget" hidden>
                <label for="gadget" class="bg-glass-morphi glass-morphi-border text-white py-1 px-3 rounded-4">Gadget</label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <NuxtLink to="" class="me-2 w-50 glass-morphi-border bg-glass-morphi py-1 px-3 rounded-4 text-center">
                  Products
                </NuxtLink>
                <NuxtLink to="" class="ms2 w-50 glass-morphi-border bg-glass-morphi py-1 px-3 rounded-4 text-center">
                  Services
                </NuxtLink>
              </div>
            </div>

          </div>
          <div class="row overflow-y-scroll" style="max-height: 80vh">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div class="col-lg-4 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex align-items-center mb-4">
              <button class="bg-glass-morphi glass-morphi-border glass-morphi-button d-flex align-items-center gap-2 rounded-5">
                Add New Product
              <Icon name="material-symbols:add" class="icon" size="20" />
              </button>
              <div class="scan glass-morphi-border bg-glass-morphi">
                <p>Scan QR Code</p>
              </div>
            </div>
            <div class="bg-glass-morphi glass-morphi-border rounded mt-4 overflow-hidden p-1 blur-bg">
              <table class="w-100 overflow-y-scroll">
                <thead>
                <tr>
                  <th class="p-2">NAME</th>
                  <th class="p-2">QTY</th>
                  <th class="p-2">TAX</th>
                  <th class="p-2">PRICE</th>
                  <th class="p-2">SUB TOTAL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="p-2">
                    <div class="d-flex align-items-center gap-2">
                      <img src="https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?size=626&ext=jpg&uid=R102446229&ga=GA1.1.1037843751.1707219469&semt=ais" class="width-40px height-40px rounded" alt="">
                      <h4 class="fs-6">Apple Watch</h4>
                    </div>
                  </td>
                  <td class="p-2">
                    qty
                  </td>
                  <td class="p-2">
                    <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span>
                  </td>
                  <td class="p-2">$56</td>
                  <td class="p-2">$61</td>
                  <td class="p-2">
                    <span class="delete">
                    <Icon name="material-symbols:delete-outline"/>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <div class="d-flex align-items-center gap-2">
                      <img src="/images/product.png" class="width-40px height-40px rounded" alt="">
                      <h4 class="fs-6">Apple Watch</h4>
                    </div>
                  </td>
                  <td class="p-2">
                    qty
                  </td>
                  <td class="p-2">
                    <span class="primary-bg px-1 rounded" style="font-size: 12px">GST 7%</span>
                  </td>
                  <td class="p-2">$56</td>
                  <td class="p-2">$61</td>
                  <td class="p-2">
                    <span class="delete">
                    <Icon name="material-symbols:delete-outline"/>
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="bg-glass-morphi glass-morphi-border rounded d-flex justify-content-between p-4 blur-bg mt-5">
            <div>
              <div class="d-flex gap-2">
              <span class="p-2 glass-morphi-border bg-glass-morphi rounded d-flex align-items-center justify-content-center">
                <Icon name="ph:currency-dollar-simple-thin" />
              </span>
                <input type="number" class="p-2 glass-morphi-border shadow rounded" placeholder="Discount">
              </div>
              <button class="primary-button mt-3">PAY</button>
            </div>
            <div class="d-flex flex-column align-items-end">
              <h3 class="fs-5">Sub Total: $0.00</h3>
              <h4 class="fs-6">Total: $0.00</h4>
              <button class="glass-morphi-button mt-3">Empty Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

