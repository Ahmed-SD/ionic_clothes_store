<template>
  <div>
    <div class="products">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-card class="w-full h-min" :key="product.id" v-for="(product,index) in products">
              <router-link :to="'/tabs/category/products/product/'+index">
                <ion-card-header>
                  <ion-img :src="product.image" class="w-full"></ion-img>
                </ion-card-header>
              </router-link>

              <ion-card-content>
                <div class="title text-center">
                  <ion-text>
                    <h2>Product</h2>
                  </ion-text>
                </div>
             
                <div class="button text-center space-y-2">
                  <ion-text color="primary">
                    <h2>{{product.price}}$</h2>
                  </ion-text>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card class="w-full py-4 h-min" :key="product.id" v-for="product in products">
              <router-link to="/tabs/category/products/product">
                <ion-card-header>
                  <ion-img :src="product.image" class="w-full"></ion-img>
                </ion-card-header>
              </router-link>

              <ion-card-content>
                <div class="title text-center">
                  <ion-text>
                    <h2>Product</h2>
                  </ion-text>
                </div>
               
                <div class="button text-center space-y-2">
                  <ion-text color="primary">
                    <h2>{{product.price}}$</h2>
                  </ion-text>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>
<script>
import { IonCard } from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";
export default {
  name: "products",
  props: ["products", "categoryName"],
  setup() {
    return {
      chevronBackOutline
    };
  },
  data() {
    return {};
  },
  components: {
    IonCard
  },
  methods: {
    next() {
            this.$refs.slides.sideTo(2,1000);
    }
  }
};
</script>

