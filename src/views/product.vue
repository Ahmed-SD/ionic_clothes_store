<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button mode="md" default-href="/tabs/category/products" slot="start">
          <ion-icon :icon="chevronBackOutline"/>
        </ion-back-button>
        <ion-title>Air max</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="product">
        <ion-slides mode="ios" pager="ios" scrollbar="ios">
          <ion-slide>
            <ion-img
              class="w-full"
              :src="products[id].image"
            ></ion-img>
          </ion-slide>
            </ion-slides>
        <ion-card>
          <ion-card-content>
            <div class="product-dec">
              <ion-text class="text-center text-xl py-2">
                <h1>{{products[id].title}}</h1>
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
              <p>{{products[id].description}}</p>
            </ion-text>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="cart p-2">
        <ion-button expand="full" @click="openModal">شراء المنتج</ion-button>
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
  modalController
} from "@ionic/vue";
import validateProduct from './validateProduct.vue'

export default {
  name: "product",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton,
  },
  data() {
    return {
      id: this.$route.params.id,
      products: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9, count: 120 }
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: { rate: 4.1, count: 259 }
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          rating: { rate: 4.7, count: 500 }
        }
      ]
    };
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
      async openModal() {
      const modal = await modalController
        .create({
          component: validateProduct,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'New Title',
            isOpent : false
          },
        })
      return modal.present();
    },
  }
};
</script>

