<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button :icon="chevronBackOutline" mode="md" default-href="/tabs/category/" slot="start">
        </ion-back-button>
        <ion-title>{{category[id].name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <products :products="products" :categoryName="id"></products>
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
  alertController
} from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

// custom components
import products from "../components/products/products.vue";

export default {
  name: "allProducts",
  data() {
    return {
      id: this.$route.params.id,
      category: [
        {
          name: "اقمصه سادة",
          img: "https://freepngimg.com/thumb/categories/627.png"
        },
        {
          name: "اقمصه ملونه",
          img:
            "https://pics.clipartpng.com/midle/Red_T_Shirt_PNG_Clip_Art-3105.png"
        },
        {
          name: "اقمصه مشجرة",
          img:
            "https://www.pngitem.com/pimgs/m/175-1751810_shirts-for-men-png-png-download-shirt-for.png"
        },
        {
          name: "اقمصه سادة",
          img: "https://freepngimg.com/thumb/categories/627.png"
        }
      ],
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
  setup() {
    return{
    chevronBackOutline
    }
  },
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton,
    products
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
    }
  }
};
</script>
