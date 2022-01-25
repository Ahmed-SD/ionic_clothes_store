<template>
  <div class="cats">
    <div class="hidden">{{scet()}}</div>
    <div class="cat" v-if="shown">
      <div class="flex justify-between p-4">
        <ion-text>
          <h1>الاقمصه</h1>
        </ion-text>
        <ion-text class="flex items-center justify-between" color="primary">
          <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
        </ion-text>
      </div>
      <div class="products grid grid-col gap-4 grid-cols-2">
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <div class="flex justify-between p-4">
        <ion-text>
          <h1>التشيرتات</h1>
        </ion-text>
        <ion-text class="flex items-center justify-between" color="primary">
          <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
        </ion-text>
      </div>
      <div class="products grid grid-col gap-4 grid-cols-2">
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <div class="flex justify-between p-4">
        <ion-text>
          <h1>الاحذيه</h1>
        </ion-text>
        <ion-text class="flex items-center justify-between" color="primary">
          <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
        </ion-text>
      </div>
      <div class="products grid grid-col gap-4 grid-cols-2">
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="flex justify-between p-4">
        <ion-text>
          <h1>البناطلين</h1>
        </ion-text>
        <ion-text class="flex items-center justify-between" color="primary">
          <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
        </ion-text>
      </div>
      <div class="products grid grid-col gap-4 grid-cols-2">
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card class="w-full h-min">
          <ion-card-header>
            <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
          </ion-card-header>

          <ion-card-content>
            <div class="title text-center">
              <ion-text>
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>

            <div class="button text-center space-y-2">
              <ion-text color="primary">
                <h2>
                  <ion-skeleton-text animated></ion-skeleton-text>
                </h2>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </div>
    <div class="cat p-2" v-if="!shown">
      <div class="el" :key="cat.id" v-for="cat in category">
        <div class="flex justify-between p-">
          <ion-text>
            <h1>{{cat.name}}</h1>
          </ion-text>
          <ion-text class="flex items-center justify-between" color="primary">
            <router-link to="/tabs/category/products/0">عرض المزيد</router-link>
          </ion-text>
        </div>
        <ion-slides
          mode="ios"
          pager="ios"
          :options="{slidesPerView: 1.5,spaceBetween: 0}"
          class="pb-4"
        >
          <ion-slide class="w-full" :key="product.id" v-for="product in allProducts">
            <ion-card class="w-full h-128">
              <router-link to="/tabs/category/products/product/0">
                <ion-card-header>
                  <ion-img
                    :src="'https://polar-journey-85906.herokuapp.com'+product.images[0]"
                    class="w-full"
                  ></ion-img>
                </ion-card-header>
              </router-link>

              <ion-card-content>
                <div class="title text-center">
                  <ion-text>
                    <h2>Product</h2>
                  </ion-text>
                </div>
                <div class="button text-center space-y-2">
                  <ion-text color="primary">
                    <h2>{{product.price}}$</h2>
                  </ion-text>
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
  </div>
</template>
<script>
import {
  IonText,
  IonSlide,
  IonSlides,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonImg
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cat",
  components: {
    IonText,
    IonSlide,
    IonSlides,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonImg
  },
  data() {
    return {
      category: [
        {
          name: "الاقمصه"
        },
        {
          name: "الاحذيه"
        },
        {
          name: "التشبرتات"
        },
        {
          name: "البناطلين"
        }
      ],
      shown: true
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    scet() {
      if (this.allProducts.length > 0) {
        this.shown = false;
      }
      return this.shown;
    }
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
};
</script>

