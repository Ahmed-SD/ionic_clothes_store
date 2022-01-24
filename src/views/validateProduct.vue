
<template>
  <!-- Default -->
  <div class="modal h-full">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="dismissModal()" class="text-4xl">
            <i class="fi fi-rr-cross"></i>
          </ion-button>
        </ion-buttons>
        <ion-title>تفاصيل الطلب</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="h-full py-4">
      <div class="flex justify-between pt-4 p-2">
        <h2>اللون</h2>
        <h2>اختر واحدا</h2>
      </div>
      <div class="grid grid-col grid-cols-3 gap-4 p-4 rounded w-full">
        <ion-img :src="product.image" class="w-full"></ion-img>
        <ion-img :src="product.image" class="w-full"></ion-img>
        <ion-img :src="product.image" class="w-full"></ion-img>
        <ion-img :src="product.image" class="w-full"></ion-img>
      </div>

      <div class="p-4">
        <div class="flex justify-between p-2">
          <h2>المقاس</h2>
          <h2>اختر واحدا</h2>
        </div>
        <div class="grid grid-col grid-cols-6 gap-4 p-4 rounded w-full">
          <div v-if="product.category=='اقمصة' || product.category=='تشيرتات'">
            t shirt
          </div>
          <div v-if="product.category=='أحذيه'">
            indigo
          </div>
          <div v-if="product.category=='بناطلين'">
            bntal
          </div>
          <!-- <span
            class="p-2 bg-white flex items-center justify-center rounded"
            :class="{'bg-red-500 text-white':bg[count]}"
            :key="count"
            v-for="(item, count) in 10"
            @click="size(count)"
          >{{item}}</span> -->
        </div>
      </div>
      <div class="qty py-4 px-2 flex justify-between items-center">
        <ion-label class="text-xl px-2">الكميه</ion-label>
        <div class="custom-number-input h-10 w-32">
          <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              class="bg-red-600 text-white hover:text-white hover:bg-red-700 p-3 rounded cursor-pointer flex flex-col items-center justify-center"
            >
              <i class="fi fi-rr-minus"></i>
            </button>
            <input
              type="number"
              class="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
              v-model="quant"
            >
            <button
              class="bg-red-600 text-white hover:text-white hover:bg-red-700 p-3 rounded cursor-pointer flex flex-col items-center justify-center"
            >
              <i class="fi fi-rr-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="cart p-2">
        <ion-button expand="full" @click="checkout()">شراء المنتج</ion-button>
        <ion-button expand="full" @click="cart()">اضف للسله</ion-button>
      </div>
    </ion-content>
  </div>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  alertController,
  modalController
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "validateProduct",
  props: ["product"],
  data() {
    return {
      bg: [false,false,false,false,false,false,false,false,false,false,],
      quant: 0,
      items: {
        name: this.product.name,
        size: "sm",
        color: "red",
        img:this.product.images[0]
      }
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  methods: {
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
    dismissModal() {
      modalController.dismiss({ dismissed: true });
    },
    checkout() {
      this.dismissModal();
      this.items = {...this.items, qty: this.quant}
      this.$store.dispatch("addToCart", this.items);
      this.$router.replace("/tabs/cart/checkout");
    },
    cart() {
      modalController.dismiss({ dismissed: true });
      this.items = {...this.items, qty: this.quant}
      this.$store.dispatch("addToCart", this.items);
      console.log(this.$store.state.cart);
      this.presentAlert();
    },
    size(count){
      this.bg[count]=!this.bg[count]
      this.qty++
      console.log(count)
    }
  }
});
</script>