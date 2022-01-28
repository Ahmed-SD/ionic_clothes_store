
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
    <ion-content class="h-full bg-white py-4">
      <div class="flex justify-between pt-4 p-2">
        <h2>اللون</h2>
        <h2>اختر واحدا</h2>
      </div>
      <div class="grid grid-col grid-cols-3 gap-4 p-4 rounded w-full">
        <div :key="count" v-for="(img,count) in product.images"></div>
        <ion-img @click="img(count,img)" :src="'https://serene-beach-63236.herokuapp.com'+img"></ion-img>
      </div>

      <div class="p-4">
        <div class="flex justify-between p-2">
          <h2>المقاس</h2>
          <h2>اختر واحدا</h2>
        </div>
        <div v-if="product.category=='اقمصة' || product.category=='تشيرتات'">
          <div class="grid grid-col grid-cols-6 gap-4">
            <span
              class="p-2 bg-white flex items-center justify-center rounded"
              @click="size(index,item)"
              :key="index"
              v-for="(item,index) in shirt"
              :class="{'bg-red-500 text-white':bg[index]}"
            >{{item}}</span>
          </div>
        </div>
        <div v-if="product.category=='أحذيه'">indigo</div>
        <div v-if="product.category=='بناطلين'">bntal</div>
        <!-- <span
            class="p-2 bg-white flex items-center justify-center rounded"
            :class="{'bg-red-500 text-white':bg[count]}"
            :key="count"
            v-for="(item, count) in 10"
            @click="size(count)"
        >{{item}}</span>-->
      </div>
      <div class="qty py-4 px-2 flex justify-between items-center">
        <ion-label class="text-xl px-2">الكميه</ion-label>
        <div class="qty px-2">
          <div class="custom-number-input h-10 w-32">
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <button
                @click="remQty()"
                class="bg-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-red-700 p-3 rounded cursor-pointer flex flex-col items-center justify-center"
              >
                <i class="fi fi-rr-minus"></i>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                v-model="quant"
                min="0"
              >
              <button
                @click="addQty()"
                class="bg-gray-200 rounded-full text-gray-600 hover:text-white hover:bg-red-700 p-3 rounded cursor-pointer flex flex-col items-center justify-center"
              >
                <i class="fi fi-rr-plus"></i>
              </button>
            </div>
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
  modalController,
  toastController
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "validateProduct",
  props: ["product"],
  data() {
    return {
      bg: [false, false, false, false],
      shirt: [],
      quant: 1,
      items: {
        name: this.product.name,
        size: "",
        color: "",
        img: this.product.images[0]
      }
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  created() {
    console.log(this.product);
    this.shirt[0] = "S";
    this.shirt[1] = "M";
    this.shirt[2] = "XL";
    this.shirt[3] = "XXL";
    // if (this.product.redSize[0] == true) {
    //   this.shirt[0] = "S";
    // } else if (this.product.redSize[1] == true) {
    //   this.shirt[1] = "M";
    // } else if (this.product.redSize[2] == true) {
    //   this.shirt[2] = "XL";
    // } else if (this.product.redSize[3] == true) {
    //   this.shirt[3] = "XXL";
    // }
  },
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
      this.items = { ...this.items, qty: this.quant };
      this.$store.dispatch("addToCart", this.items);
      console.log(this.$store.state.cart);

      this.$router.replace("/tabs/cart/checkout");
    },
    cart() {
      if (this.items.size == "") {
        this.failed();
      } else {
        this.carte = this.$store.getters.cart;
        console.log(this.carte.length);
        if (this.carte.length == 0) {
          this.items = {
            ...this.items,
            qty: this.quant,
            price:this.product.price,
            newPrice : this.product.price * this.quant
          };
          this.$store.dispatch("addToCart", this.items);
          console.log(this.$store.state.cart);
          this.presentAlert();
          modalController.dismiss({ dismissed: true });
        } else {
          this.carte.forEach(element => {
            if (
              element.name == this.items.name &&
              element.color == this.items.color
            ) {
              element.qty++;
              this.presentAlert();
              modalController.dismiss({ dismissed: true });
            } else {
              this.items = { ...this.items, qty: this.quant };
              this.$store.dispatch("addToCart", this.items);
              console.log(this.$store.state.cart);
              this.presentAlert();
              modalController.dismiss({ dismissed: true });
            }
          });
        }
      }
    },
    size(index, item) {
      this.bg[index] = !this.bg[index];
      if (this.bg[index] == false) {
        this.items.size = "";
      } else {
      this.items.size = item;
      }
    },
    img(count, img) {
      this.br[count] = !this.br[count];
      this.items.img = img;
      if (count == 0) {
        this.items.color = "red";
      } else if (count == 1) {
        this.items.color = "green";
      } else if (count == 2) {
        this.items.color = "blue";
      }
    },
    async failed() {
      const toast = await toastController.create({
        message: "الرجاء اختيار المقاس ",
        duration: 4000,
        position: "top",

        color: "primary"
      });
      return toast.present();
    },
    addQty() {
      this.quant++;
    },
    remQty() {
      if (this.quant == 1) {
        this.quant = 1;
      } else {
        this.quant--;
      }
    }
  }
});
</script>