<script setup>

definePageMeta({
  layout: false,
  middleware: ['auth']
})

const printInvoice = () => {
  const printContent = document.getElementById("invoice").outerHTML;
  const printWindow = window.open("", "_blank");

  if (printWindow) {
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');

    printWindow.document.close();
    printWindow.print();
  } else {
    console.error("Failed to open print window");
  }
};

</script>



<template>
  <div class="h-100 min-vh-100 d-flex align-items-center justify-content-center py-5">
    <button onclick="window.print()"  class="primary-button position-fixed" style="top: 30px;right: 30px;">
      <Icon name="material-symbols:print-add-outline" />
      PRINT
    </button>
<!--    Invoice-->
    <div class="bg-white p-5 rounded-3 text-center" style="max-width:400px" id="invoice">

      <div>
        <h1 class="fs-2 mb-3" style="color:red">Creative Tech Park</h1>
        <p class="text-dark">QCCF+7R3, The Imperial Irish Kingdom, Mo-03 (3rd Floor, Bir Uttam Rafiqul Islam Ave, Dhaka 1212</p>
      </div>

      <div class="mt-4 text-dark">
        Mobile: 9876543
        https://creativetechpark.com/
      </div>

      <div class="py-3">
        VAT: 1111111
      </div>

      <div class="py-3 border-top">
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold">Invoice No</p>
          <p>5467890</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold">Date</p>
          <p>3-4-2019</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold">Customer</p>
          <p>Walk-In-Customer</p>
        </div>
      </div>

      <div class="py-3">
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold w-80 text-start">#1. Apple Watch </p>
          <p>৳500.00</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold w-80 text-start">#2. Apple Watch</p>
          <p>৳500.00</p>
        </div>
      </div>

      <div class="py-3 border-bottom">
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold">Sub Total</p> <p class="fw-semibold">৳500</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p>Discount</p> <p> - ৳50</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="fw-semibold">Total</p> <p class="fw-semibold">৳500</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p>Cash</p> <p>৳500</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p>Total Paid</p> <p>৳500</p>
        </div>
      </div>


      <div class="py-3">
        <img src="https://img.freepik.com/premium-vector/qr-code-vector-icon_389832-989.jpg?w=1060"
             style="width: 200px;height: auto;"
             alt="">
        <p>No return. No exchange</p>
      </div>

      <div>
        <p>Developed By Creative Tech Park</p>
      </div>
    </div>


  </div>
</template>



<style lang="scss" scoped>
p {
  color: #000;
  margin-bottom: 4px;
}
</style>