<template>
  <div>
    <div class="hidden">{{scet()}}</div>
    <div v-if="shown" class="products grid grid-col gap-4 grid-cols-2">
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
    <div v-if="!shown" class="products grid grid-col gap-4 grid-cols-2">
      <ion-card class="w-full h-min" :key="product.id" v-for="(product,index) in allProducts">
        <router-link :to="'/tabs/category/products/product/'+index">
          <ion-card-header>
            <ion-img :src="product.image" class="w-full"></ion-img>
          </ion-card-header>
        </router-link>

        <ion-card-content>
          <div class="title text-center">
            <ion-text>
              <h2>{{product.name}}</h2>
            </ion-text>
          </div>

          <div class="button text-center space-y-2">
            <ion-text color="primary">
              <h2>{{product.price}}$</h2>
            </ion-text>
          </div>
        </ion-card-content>
      </ion-card>
    </div>
  </div>
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonText,
  toastController
} from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "productPage",
  setup() {
    return {
      chevronBackOutline
    };
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
    IonText
  },
  data() {
    return {
      shown: true
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    async openToast() {
      const toast = await toastController.create({
        message: "الرجاء التحقق من الاتصال بالانترنت",
        duration: 6000,
        position: "top",

        color: "primary"
      });
      return toast.present();
    },
    scet() {
      if (this.allProducts.length > 0) {
        this.shown = false;
      } else {
        setTimeout(() => {
          this.openToast();
        }, 10000);
      }
      return this.shown;
    }
  },
  computed: mapGetters(["allProducts"]),
  mounted() {
    this.fetchProducts();
    this.sectl = this.allProducts;
    console.log(this.sectl.length);
  }
};
</script>

