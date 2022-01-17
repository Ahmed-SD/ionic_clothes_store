<template>
  <div class="cat p-2" >
    <div class="el" :key="cat.id" v-for="cat in category">
      <div class="flex justify-between p-">
        <ion-text>
          <h1>{{cat.name}}</h1>
        </ion-text>
        <ion-text class="flex items-center justify-between" color="primary">
          <router-link to="/tabs/category/products">عرض المزيد</router-link>
          <ion-icon :icon="arrowBackOutline"/>
        </ion-text>
      </div>
      <ion-slides
        mode="ios"
        pager="ios"
        scrollbar="ios"
        :options="{slidesPerView: 1.5,spaceBetween: 0}"
      >
        <ion-slide class="w-full" :key="product.id" v-for="product in products">
          <ion-card class="w-full h-128">
            <router-link to="/tabs/category/products/product">
              <ion-card-header>
                <ion-img :src="product.image" class="w-full"></ion-img>
              </ion-card-header>
            </router-link>

            <ion-card-content>
              <div class="title text-center">
                <ion-text>
                  <h2>Product</h2>
                </ion-text>
              </div>
              <div class="slid flex py-2">
                <ion-text color="primary">
                  <h2>المقاس</h2>
                </ion-text>
                <ion-slides>
                  <ion-slide>
                    <h2>40</h2>
                  </ion-slide>
                  <ion-slide>
                    <h2>39</h2>
                  </ion-slide>
                  <ion-slide>
                    <h2>42</h2>
                  </ion-slide>
                  <ion-slide>
                    <h2>45</h2>
                  </ion-slide>
                </ion-slides>
              </div>
              <div class="button text-center space-y-2">
                <ion-text color="primary">
                  <h2>{{product.price}}$</h2>
                </ion-text>
                <ion-button expand="full" @click="presentAlert">اضف للسله</ion-button>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-slide>
      </ion-slides>
    </div>

    <!-- <div class="categories">
      <ion-slides
        mode="ios"
        pager="ios"
        scrollbar="ios"
        :options="{slidesPerView: 2,spaceBetween: 20}"
        class="py-4"
      >
        <ion-slide :key="item.id" v-for="item in category">
          <router-link to="/tabs/category/products">
            <ion-card class="w-full h-full flex flex-col justify-between">
              <ion-card-content>
                <ion-img :src="item.img" class="w-full h-32 py-2"></ion-img>
                <ion-text class="text-center">
                  <h1>{{item.name}}</h1>
                </ion-text>
              </ion-card-content>
            </ion-card>
          </router-link>
        </ion-slide>
      </ion-slides>
    </div>-->
  </div>
</template>
<script>
import {} from "@ionic/vue";

export default {
  name: "cat",
  props: ["category", "products"],
  components: {}
};
</script>

