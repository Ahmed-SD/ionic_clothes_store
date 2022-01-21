<template>
  <ion-page>
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <search></search>
      <!-- sections of cat -->
      <main-cat></main-cat>
      <!-- categroy -->
      <cat :category="category" :products="products"></cat>
      <!-- marka sec -->

      <cats :marka="marka"></cats>
      <!-- products -->

      <productsHeaeder :catName="catName"></productsHeaeder>

      <products :products="products"></products>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, alertController } from "@ionic/vue";

import { arrowBackOutline, cartOutline } from "ionicons/icons";
// home components
import search from "../components/search.vue";
import mainCat from "../components/category/mainCat.vue";
import cats from "../components/category/cats.vue";
import cat from "../components/category/cat.vue";
import products from "../components/products/products.vue";
import productsHeaeder from "../components/productsHeader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    IonPage,
    IonContent,
    search,
    mainCat,
    cats,
    cat,
    products,
    productsHeaeder
  },
  data() {
    return {
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
      ],

      category: [
        {
          id: 1,
          name: "اقمصه سادة",
          img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        },
        {
          id: 2,
          name: "اقمصه ملونه",
          img:
            "https://pics.clipartpng.com/midle/Red_T_Shirt_PNG_Clip_Art-3105.png"
        },
        {
          id: 3,
          name: "اقمصه مشجرة",
          img:
            "https://www.pngitem.com/pimgs/m/175-1751810_shirts-for-men-png-png-download-shirt-for.png"
        }
      ],
      marka: [
        {
          name: "NIKE",
          img: "https://freepngimg.com/thumb/categories/290.png"
        },
        {
          name: "ADIDAS",
          img: "https://www.freepnglogos.com/uploads/adidas-logo-png-26.png"
        },
        {
          name: "ZARA",
          img:
            "data:image/png;base64,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"
        }
      ]
    };
  },
  setup() {
    return {
      arrowBackOutline,
      cartOutline
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchTypes", "fetchBrands"]),
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
      console.log(this.allProducts, this.allTypes, this.allBrands)
    }
  },
  computed: mapGetters(["allProducts", "allTypes", "allBrands"]),
  created() {
    this.fetchProducts();
    this.fetchTypes();
    this.fetchBrands();
  },
};
</script>