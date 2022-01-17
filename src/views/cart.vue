<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button slot="start"></ion-back-button>
        <ion-title>السله</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div :class="{hidden:empty}" class="flex flex-col justify-center items-center h-full">
        <ion-text>
          <p>عفوا السله فارغه الرحاء اصافه بعض المنتجات اولا</p>
        </ion-text>
      </div>
      <div :class="{hidden:full}">
        <div class="cart">
          <ion-card :key="item.id" v-for="(item,index) in cart">
            <ion-card-header>
              <ion-card-title class="text-center">{{item.name}}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="head flex items-center">
                <ion-img :src="item.immg" class="w-48"></ion-img>
                <div class="content">
                  <div class="qty px-2">
                    <ion-label class="text-xl px-2">الكميه</ion-label>
                    <div class="custom-number-input h-10 w-32">
                      <div
                        class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
                      >
                        <button
                          @click="remQty(index)"
                          class="bg-red-600 text-white hover:text-white hover:bg-red-700 p-3 rounded cursor-pointer flex flex-col items-center justify-center"
                        >
                          <i class="fi fi-rr-minus"></i>
                        </button>
                        <input
                          type="number"
                          class="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                          name="custom-input-number"
                          v-model="item.qty"
                        >
                        <button
                          @click="addQty(index)"
                          class="bg-red-600 text-white hover:text-white hover:bg-red-700 p-3 rounded cursor-pointer flex flex-col items-center justify-center"
                        >
                          <i class="fi fi-rr-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="price py-4 flex justify-between items-center">
                <ion-text color="primary" class="flex space-x-4">
                  <h2 class="text-black w-full">السعر الكلي :</h2>
                  <h2>{{item.price}}$</h2>
                </ion-text>
                <ion-text color="primary">
                  <ion-icon @click="removeProduct(index)" class="text-2xl" :icon="trashOutline"/>
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
                  <b>{{cart.length}} منتجات</b>
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
                  <span>{{totalprice()}}$</span>
                </ion-text>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <!-- checkout section -->
        <div class="checkout p-2">
          <router-link to="/tabs/cart/checkout/">
            <ion-button expand="full">اتمام الطلب</ion-button>
          </router-link>
        </div>
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
  IonBackButton
} from "@ionic/vue";
import { addOutline, removeOutline, trashOutline } from "ionicons/icons";
export default {
  name: "cart",
  data() {
    return {
      cart: [
        {
          id: 1,
          name: "Nike air max",
          price: 300,
          immg:
            "https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png",
          qty: 1
        },
        {
          id: 2,
          name: "Nike air max",
          price: 300,
          immg:
            "https://www.pngitem.com/pimgs/m/175-1751810_shirts-for-men-png-png-download-shirt-for.png",
          qty: 1
        },
        {
          id: 3,
          name: "Nike air max",
          price: 300,
          immg:
            "https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png",
          qty: 1
        },
        {
          id: 4,
          name: "Nike air max",
          price: 300,
          immg:
            "https://www.pngitem.com/pimgs/m/175-1751810_shirts-for-men-png-png-download-shirt-for.png",
          qty: 1
        }
      ],
      empty: true,
      full: false
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton
  },
  methods: {
    addQty(index) {
      this.cart[index].qty++;
      this.cart[index].price += this.cart[index].price;
    },
    remQty(index) {
      if (this.cart[index].qty == 0) {
        this.cart.splice(index, 1);
        if (this.cart.length == 0) {
          this.empty = !this.empty;
          this.full = !this.full;
        } else {
          this.full = false;
          this.empty = true;
        }
      } else {
        this.cart[index].qty--;
      }
    },
    removeProduct(index) {
      this.cart.splice(index, 1);
      if (this.cart.length == 0) {
        this.empty = !this.empty;
        this.full = !this.full;
      } else {
        this.full = false;
        this.empty = true;
      }
    },
    totalprice() {
      let sum = 0;
      this.cart.forEach(item => {
        sum += item.price;
      });
      return sum;
    }
  },
  created() {
    if (this.cart.length == 0) {
      this.empty = !this.empty;
      this.full = !this.full;
    } else {
      this.full = false;
      this.empty = true;
    }
  },
  setup() {
    return {
      addOutline,
      removeOutline,
      trashOutline
    };
  }
};
</script>

<style scoped>
</style>


