<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button
          :icon="chevronBackOutline"
          mode="md"
          :default-href="'/tabs/category/products/'+id"
          slot="start"
        ></ion-back-button>
        <ion-title>{{products[id].name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="product">
        <ion-slides mode="ios" pager="ios" scrollbar="ios">
          <ion-slide :key="count" v-for="(img,count) in products[id].images">
            <ion-img class="w-full" :src="'products[id].name'+img"></ion-img>
          </ion-slide>
        </ion-slides>
        <ion-card>
          <ion-card-content>
            <div class="product-dec">
              <ion-text class="text-center text-xl py-2">
                <h1>{{products[id].name}}</h1>
              </ion-text>
              <div class="slid flex justify-center py-2 px-4 text-xl">
                <ion-text color="primary">
                  <h2>المقاس</h2>
                </ion-text>
                <ion-slides class="w-full">
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
              <div class="slid flex justify-between py-2 px-4 text-xl">
                <ion-text color="primary">
                  <h2>السعر</h2>
                </ion-text>
                <ion-text color="primary">
                  <h2>{{products[id].price}} $</h2>
                </ion-text>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="description">
        <ion-card>
          <ion-card-content>
            <ion-text color="primary">
              <h2>الوصف</h2>
            </ion-text>
            <ion-text>
              <p>{{products[id].descr}}</p>
            </ion-text>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="cart p-2">
        <ion-button expand="full" @click="openModal">اضف للسله</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonBackButton,
  alertController,
  modalController,
  IonCard,
  IonButton,
  IonCardContent,
  IonText,
  IonSlides,
  IonSlide,
  IonImg,
  loadingController
} from "@ionic/vue";
import validateProduct from "./validateProduct.vue";
import { chevronBackOutline } from "ionicons/icons";
import {  mapActions } from "vuex";

export default {
  name: "product",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonCard,
    IonButton,
    IonCardContent,
    IonText,
    IonSlides,
    IonSlide,
    IonImg
  },
  setup() {
    return {
      chevronBackOutline
    };
  },
  data() {
    return {
      id : '',
      products: []
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "تم اضافه العنصر للسله",
        message: "يمكنك التوجه للسله لاكمال الطلب",
        buttons: ["تم"]
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    async openModal() {
      const modal = await modalController.create({
        component: validateProduct,
        cssClass: "my-custom-class",
        componentProps: {
          product: this.products[this.$route.params.id]
        }
      });
      return modal.present();
    },
      async presentLoading() {
      const loading = await loadingController.create({
        cssClass: "loader",
        message: '<img src="https://st.depositphotos.com/47577860/52256/v/600/depositphotos_522560928-stock-illustration-loading-spanner-spinner-icon-solid.jpg" >',
        duration: 1000
      });

      await loading.present();

      setTimeout(function() {
        loading.dismiss();
      }, 1000);
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
    this.products = this.$store.getters.allProducts
    this.id = this.$route.params.id
  },
  mounted() {
    this.presentLoading()
  },
};
</script>

