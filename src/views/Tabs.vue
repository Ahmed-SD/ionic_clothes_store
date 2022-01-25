<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <h2 class="text-center">الرئيسيه</h2>
        </ion-tab-button>

        <ion-tab-button tab="category" href="/tabs/category">
          <i class="fi fi-rr-apps text-2xl"></i>
          <h2 class="text-center">الفئات</h2>
        </ion-tab-button>

        <ion-tab-button dir="ltr" tab="cart" href="/tabs/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <ion-badge class="mx-2" outline size="large" color="primary" mode="ios"></ion-badge>
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
    this.presentLoading();
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
        message:
          '<img src="https://st.depositphotos.com/47577860/52256/v/600/depositphotos_522560928-stock-illustration-loading-spanner-spinner-icon-solid.jpg" >',
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