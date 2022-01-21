<template>
  <div class="productsHeader">
    <div class="flex justify-between p-4">
      <ion-text>
        <h1>افضل المنتجات</h1>
      </ion-text>
      <ion-text class="flex items-center justify-between" color="primary">
        <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
      </ion-text>
    </div>
  </div>
</template>
<script>
import {IonText} from "@ionic/vue";
export default {
  name: "productsHeader",
  components: {IonText}
};
</script>

