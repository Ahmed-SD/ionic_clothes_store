<template>
  <div class="categories w-full col-span-2 overflow-hidden">
    <div class="w-full">
      <!--  -->
      <router-link
        :to="'/tabs/category/products/'+index"
        :key="item.id"
        v-for="(item,index) in allTypes"
      >
        <ion-card>
          <ion-card-content>
            <ion-img :src="item.image" class="w-full py-2"></ion-img>
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
import {IonText,IonCard,IonCardContent,IonImg} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "category",
  components: {IonText,IonCard,IonCardContent,IonImg},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchTypes"])
  },
  computed: mapGetters(["allTypes"]),
  created() {
    this.fetchTypes();
  }
};
</script>

