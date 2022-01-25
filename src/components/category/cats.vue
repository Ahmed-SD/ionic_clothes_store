<template>
  <div class="marka py-4">
    <div class="flex justify-between p-2">
      <ion-text>
        <h1>افضل الماركات</h1>
      </ion-text>
      <ion-text class="flex items-center justify-between" color="primary">
        <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
      </ion-text>
    </div>
    <div class="">
      <ion-slides
        mode="ios"
        pager="ios"
        :options="{slidesPerView: 2,spaceBetween: 0}"
        class="py-4"
      >
        <ion-slide :key="item.id" v-for="item in allBrands">
          <ion-card class="w-full h-full flex flex-col justify-between">
            <ion-card-header>
              <ion-card-title>
                <ion-img :src="'https://polar-journey-85906.herokuapp.com'+item.img" class="w-full h-32"></ion-img>
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-text class="text-center">
                <h1>{{item.name}}</h1>
              </ion-text>
            </ion-card-content>
          </ion-card>
        </ion-slide>
      
      </ion-slides>
    </div>
  </div>
</template>
<script>
import {IonText,IonSlides,IonSlide,IonCard,IonCardHeader,IonCardTitle,IonImg,IonCardContent} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cats",
  components: {IonText,IonSlides,IonSlide,IonCard,IonCardHeader,IonCardTitle,IonImg,IonCardContent},
  methods: {
        ...mapActions(["fetchBrands"]),

  },
   computed: mapGetters([ "allBrands"]),
  created() {
    this.fetchBrands();
  },
};
</script>

