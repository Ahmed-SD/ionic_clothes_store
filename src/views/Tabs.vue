<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <i class="fi fi-rr-home text-2xl"></i>
          <h2 class="text-center">الرئيسيه</h2>
        </ion-tab-button>

        <ion-tab-button tab="category" href="/tabs/category">
          <i class="fi fi-rr-apps text-2xl"></i>
          <h2 class="text-center">الفئات</h2>
        </ion-tab-button>

        <ion-tab-button dir="ltr" tab="cart" href="/tabs/cart">
          <i class="fi fi-rr-shopping-cart-add text-2xl"></i>
          <ion-badge class="mx-2" outline size="large" color="primary" mode="ios"> </ion-badge>
          <h2 class="text-center">السله</h2>
        </ion-tab-button>
        <ion-tab-button tab="contact" href="/tabs/contact">
          <i class="fi fi-rr-comment text-2xl"></i>
          <h2 class="text-center">تواصل معنا</h2>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonRouterOutlet,
  loadingController,
  IonBadge
} from "@ionic/vue";

export default {
  name: "Tabs",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonBadge,
    IonRouterOutlet
  },
  mounted() {
    this.presentLoading()
  },

  data() {
    return {
      timeout: { type: Number, default: 1000 }
    };
  },
  methods: {
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
  }
};
</script>