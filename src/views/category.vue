<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-title>الفئات</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
     <search></search>
      <div class="tabs grid grid-col grid-cols-3 relative">
       <catTabs></catTabs>
        <category></category>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent } from "@ionic/vue";
// custom components
import category from '../components/category/category.vue'
import catTabs from '../components/category/catTabs.vue'
import search from "../components/search.vue";

export default {
  name: "categoryPage",
  components: {
    IonPage,IonHeader,IonToolbar,IonTitle,IonContent,
    category,
    search,
    catTabs
  },
};
</script>