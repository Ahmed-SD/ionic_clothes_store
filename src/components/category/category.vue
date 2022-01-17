<template>
  <div class="categories w-full col-span-2 overflow-hidden">
    <div class="w-full">
      <!--  -->
      <router-link :to="'/tabs/category/products/'+index" :key="item.id" v-for="(item,index) in category">

        <ion-card>
          <ion-card-content>
            <ion-img
              :src="item.img"
              class="w-full py-2"
            ></ion-img>
            <ion-text class="text-center">
              <h1>{{item.name}}</h1>
            </ion-text>
          </ion-card-content>
        </ion-card>
      </router-link>


    </div>
  </div>
</template>
<script>
import {} from "@ionic/vue";
export default {
  name: "category",
  components: {},
  data() {
    return {
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
      ]
    };
  }
};
</script>

