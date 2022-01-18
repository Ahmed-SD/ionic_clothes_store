<template>
  <div class="marka py-4">
    <div class="flex justify-between p-2">
      <ion-text>
        <h1>افضل الماركات</h1>
      </ion-text>
      <ion-text class="flex items-center justify-between" color="primary">
        <router-link to="/tabs/category/products">عرض المزيد</router-link>
        <ion-icon :icon="arrowBackOutline"/>
      </ion-text>
    </div>
    <div class="">
      <ion-slides
        mode="ios"
        pager="ios"
        :options="{slidesPerView: 2,spaceBetween: 0}"
        class="py-4"
      >
        <ion-slide :key="item.id" v-for="item in marka">
          <ion-card class="w-full h-full flex flex-col justify-between">
            <ion-card-header>
              <ion-card-title>
                <ion-img :src="item.img" class="w-full h-32"></ion-img>
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
import {} from "@ionic/vue";
export default {
  name: "cats",
  props :["marka"],
  components: {}
};
</script>

