<script setup>

</script>
<template>
  <div class="side-bar">
    <div class="side-bar-top">
      <p>Takar hisab</p>
    </div>
    <div class="side-bar-body">
        <ul class="items">
          <li>
            <NuxtLink to="/dashboard" class="items-link items-link--active">
              <span class="icon">
                <Icon name="material-symbols-light:home-app-logo"></Icon>
              </span>
              <span class="text">Dashboard</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pos" class="items-link">
              <span class="icon">
                <Icon name="mdi:shopping"></Icon>
              </span>
              <span class="text">POS</span>
            </NuxtLink>
          </li>
          <li>
            <a class="items-link" data-bs-toggle="collapse" href="#collapseShope" role="button" aria-expanded="false" aria-controls="collapseShop">
              <span class="icon">
                <Icon name="oui:app-users-roles"></Icon>
              </span>
              <span class="text">Shop</span>
            </a>
            <ul class="collapse ps-3" id="collapseShope">
              <li class="my-3">
                <NuxtLink to="/shop/products" class="items-link items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Products</span>
                </NuxtLink>
              </li>

              <li class="my-3">
                <NuxtLink to="/shop/barcode" class="items-link items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Barcode</span>
                </NuxtLink>
              </li>
              <li class="mb-3">
                <NuxtLink to="/shop/product-category" class="items-link  items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Product Category</span>
                </NuxtLink>
              </li>
              <li class="mb-3">
                <NuxtLink to="/shop/shipping" class="items-link  items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Shipping</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/services" class="items-link">
              <span class="icon">
                <Icon name="material-symbols:settings-account-box-outline"></Icon>
              </span>
              <span class="text">Services</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop/customer" class="items-link">
              <span class="icon">
                <Icon name="mdi:shopping"></Icon>
              </span>
              <span class="text">Customer</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/stores" class="items-link">
              <span class="icon">
                <Icon name="mdi:storefront-check"></Icon>
              </span>
              <span class="text">Stores</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/plans" class="items-link">
              <span class="icon">
                <Icon name="material-symbols:rocket"></Icon>
              </span>
              <span class="text">Plans</span>
            </NuxtLink>
          </li>
          <li>
            <a class="items-link" data-bs-toggle="collapse" href="#collapseInvoice" role="button" aria-expanded="false" aria-controls="collapseInvoice">
              <span class="icon">
                <Icon name="oui:app-users-roles"></Icon>
              </span>
              <span class="text">Invoice</span>
            </a>
            <ul class="collapse ps-3" id="collapseInvoice">
              <li class="my-3">
                <NuxtLink to="/invoice/list" class="items-link items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">List</span>
                </NuxtLink>
              </li>
              <li class="mb-3">
                <NuxtLink to="/invoice/preview" class="items-link items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Preview</span>
                </NuxtLink>
              </li>
              <li class="mb-3">
                <NuxtLink to="/invoice/edit" class="items-link items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Edit</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/invoice/add" class="items-link items-link--sub">
                  <span class="icon">
                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>
                  </span>
                  <span class="text">Add</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        <!--    Role And Permission      -->
<!--          <li>-->
<!--            <a class="items-link" data-bs-toggle="collapse" href="#collapseRole" role="button" aria-expanded="false" aria-controls="collapseRole">-->
<!--              <span class="icon">-->
<!--                <Icon name="oui:app-users-roles"></Icon>-->
<!--              </span>-->
<!--              <span class="text">Role & Permission</span>-->
<!--            </a>-->
<!--            <ul class="collapse ps-3" id="collapseRole">-->
<!--              <li class="my-3">-->
<!--                <NuxtLink to="/roles" class="items-link items-link&#45;&#45;sub">-->
<!--                  <span class="icon">-->
<!--                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>-->
<!--                  </span>-->
<!--                    <span class="text">Roles</span>-->
<!--                </NuxtLink>-->
<!--              </li>-->
<!--              <li>-->
<!--                <NuxtLink to="/permission" class="items-link items-link&#45;&#45;sub">-->
<!--                  <span class="icon">-->
<!--                    <Icon name="mdi:checkbox-blank-circle-outline"></Icon>-->
<!--                  </span>-->
<!--                  <span class="text">Permission</span>-->
<!--                </NuxtLink>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </li>-->
          <li>
            <NuxtLink to="/transaction" class="items-link">
              <span class="icon">
                <Icon name="icon-park-outline:transaction"></Icon>
              </span>
              <span class="text">Transaction</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/file-manager" class="items-link">
              <span class="icon">
                <Icon name="material-symbols:drive-file-move-rounded"></Icon>
              </span>
              <span class="text">File Manager</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/settings" class="items-link">
              <span class="icon">
                <Icon name="material-symbols:settings-b-roll-rounded"></Icon>
              </span>
              <span class="text">Settings</span>
            </NuxtLink>
          </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
</style>