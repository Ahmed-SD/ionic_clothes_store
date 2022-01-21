<template>
  <div>
    <div class="products grid grid-col gap-4 grid-cols-2">
      <ion-card class="w-full h-min" :key="product.id" v-for="(product,index) in allProducts">
        <router-link :to="'/tabs/category/products/product/'+index">
          <ion-card-header>
            <ion-img :src="product.image" class="w-full"></ion-img>
          </ion-card-header>
        </router-link>

        <ion-card-content>
          <div class="title text-center">
            <ion-text>
              <h2>{{product.name}}</h2>
            </ion-text>
          </div>

          <div class="button text-center space-y-2">
            <ion-text color="primary">
              <h2>{{product.price}}$</h2>
            </ion-text>
          </div>
        </ion-card-content>
      </ion-card>
    </div>
  </div>
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonText
} from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "products",
  setup() {
    return {
      chevronBackOutline
    };
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
    IonText
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    next() {
      this.$refs.slides.sideTo(2, 1000);
    }
  },
  computed: mapGetters(["allProducts"]),
  mounted() {
    this.fetchProducts();
  }
};
</script>

