<template>
  <div class="productsHeader">
    <div class="flex justify-between p-4">
      <ion-text>
        <h1>افضل المنتجات</h1>
      </ion-text>
      <ion-text class="flex items-center justify-between" color="primary">
        <router-link to="/tabs/category/products">عرض المزيد</router-link>
        <ion-icon :icon="arrowBackOutline"/>
      </ion-text>
    </div>
  </div>
</template>
<script>
import {} from "@ionic/vue";
export default {
  name: "productsHeader",
  props: ["catName"],
  components: {}
};
</script>

