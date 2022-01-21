<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button slot="start"></ion-back-button>
        <ion-title>السله</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="cart" :class="{hidden : dis}">
        <ion-card>
          <ion-card-header>
            <ion-card-title class="text-center">حذاء نايك</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="head flex items-center">
              <img src="../../public/assets/1.jpg" alt class="w-32">
              <div class="content">
                <div class="qty px-2">
                  <ion-label class="text-xl px-2">الكميه</ion-label>
                  <div class="flex items-center">
                    <ion-button size="small" v-on:click="qty=qty+1">
                      <ion-icon :icon="addOutline"/>
                    </ion-button>
                    <ion-input
                      type="number"
                      class="w-full text-center font-weight-bolder text-xl"
                      placeholder="Quantaty"
                      v-model="qty"
                      :value="qty"
                      min="1"
                    ></ion-input>
                    <ion-button size="small" v-on:click="qty=qty-1">
                      <ion-icon :icon="removeOutline"/>
                    </ion-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="price py-4 flex justify-between items-center">
              <ion-text color="primary" class="flex space-x-4">
                <h2 class="text-black w-full">السعر الكلي :</h2>
                <h2>1500$</h2>
              </ion-text>
              <ion-text color="primary">
                <ion-icon @click="dis=true" class="text-2xl" :icon="trashOutline"/>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <!-- total price section -->

      <div class="total-price">
        <ion-card>
          <ion-card-content>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <b>ملخص الطبيه</b>
              </ion-text>
              <ion-text color="dark">
                <b>3 منتجات</b>
              </ion-text>
            </div>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <span>رسوم التوصيل</span>
              </ion-text>
              <ion-text color="dark">
                <span>0$</span>
              </ion-text>
            </div>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <span>المجموع الكلي</span>
              </ion-text>
              <ion-text color="dark">
                <span>4500$</span>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <!-- checkout section -->
      <div class="checkout p-2">
        <router-link to="/tabs/cart/checkout">
          <ion-button expand="full">اتمام الطلب</ion-button>
        </router-link>
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonLabel,
  IonText,
  IonIcon
} from "@ionic/vue";
import { addOutline, removeOutline, trashOutline } from "ionicons/icons";
export default {
  name: "cart",
  data() {
    return {
      qty: 1,
      dis: false
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonLabel,
    IonText,
    IonIcon
  }
};
</script>

