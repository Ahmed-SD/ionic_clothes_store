<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button
          :icon="chevronBackOutline"
          default-href="/tabs/cart"
          mode="md"
          slot="start"
        ></ion-back-button>
        <ion-title>اتمام الطلب</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form action @submit.prevent="checkout()">
        <div class="p-4" :class="{hidden:validate}">
          <div class="w-full bg-red-300 border border-red-800 p-4">
            <h2 class="text-red-800">الرحاء ملء كل الحقول</h2>
          </div>
        </div>
        <div class="checkout py-4">
          <ion-card>
            <ion-card-content>
              <div class="mb-4">
                <label class="text-gray-600">
                  الاسم
                  <span class="text-red-500">*</span>
                </label>
                <br>
                <input
                  type="text"
                  class="border-2 border-gray-300 p-2 w-full"
                  v-model="fullName"
                  id="title"
                >
              </div>
              <div class="mb-4">
                <label class="text-gray-600">
                  رقم الهاتف
                  <span class="text-red-500">*</span>
                </label>
                <br>
                <input
                  type="number"
                  class="border-2 border-gray-300 p-2 w-full"
                  v-model="phone"
                  id="title"
                >
              </div>
              <div class="mb-4">
                <label class="text-gray-600">
                  العنوان
                  <span class="text-red-500">*</span>
                </label>
                <br>
                <textarea class="border-2 border-gray-300 p-2 w-full" v-model="addr"></textarea>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <!-- details -->
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

        <!-- checkout -->
        <div class="checkout p-2">
          <ion-button type="submit" expand="full">اتمام الطلب</ion-button>
        </div>
      </form>
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
  IonText,
  IonButton,
  toastController
} from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from 'axios'
export default {
  name: "checkout",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonCard,
    IonCardContent,
     IonText,
  IonButton
  },
  data() {
    return {
      cart: [],
      v$: useVuelidate(),
      fullName: "",
      phone: "",
      addr: "",
      validate: true
    };
  },
  setup() {
    return {
      chevronBackOutline
    };
  },

  validations() {
    return {
      phone: { required }
    };
  },
  methods: {
    async checkout() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.validate = true;
        // do order function here
        this.cart = this.$store.getters.cart
        const data = {
          name: this.fullName,
          phone: this.phone,
          addr: this.add,
          cart: this.cart
        }
        const response = await axios.post('https://polar-journey-85906.herokuapp.com/api/orders', data)
        if (response.status == 200) {
        this.$router.replace("/tabs/cart/checkout/order");
        }else{
          alert("try again later")
        }
      } else if (this.v$.$error) {
        this.failed()
        console.log(this.v$, this.phone);
      }
    },
       async failed() {
      const toast = await toastController.create({
        message: " الرجاء ادخال رقم الهاتف ",
        duration: 4000,
        position: "top",

        color: "primary"
      });
      return toast.present();
    }
  }
};
</script>

