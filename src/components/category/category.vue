<template>
  <div class="categories w-full col-span-2 overflow-hidden">
    <div class="hidden">{{scet()}}</div>
    <div v-if="shown" class="w-full products grid grid-col gap-4 grid-cols-1">
      <ion-card class="w-full h-min">
        <ion-card-header>
          <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
        </ion-card-header>

        <ion-card-content>
          <div class="title text-center">
            <ion-text>
              <h2>
                <ion-skeleton-text animated></ion-skeleton-text>
              </h2>
            </ion-text>
          </div>

          <div class="button text-center space-y-2">
            <ion-text color="primary">
              <h2>
                <ion-skeleton-text animated></ion-skeleton-text>
              </h2>
            </ion-text>
          </div>
        </ion-card-content>
      </ion-card>
      <ion-card class="w-full h-min">
        <ion-card-header>
          <ion-skeleton-text class="w-full h-24" animated></ion-skeleton-text>
        </ion-card-header>

        <ion-card-content>
          <div class="title text-center">
            <ion-text>
              <h2>
                <ion-skeleton-text animated></ion-skeleton-text>
              </h2>
            </ion-text>
          </div>

          <div class="button text-center space-y-2">
            <ion-text color="primary">
              <h2>
                <ion-skeleton-text animated></ion-skeleton-text>
              </h2>
            </ion-text>
          </div>
        </ion-card-content>
      </ion-card>
    </div>
    <div v-if="!shown" class="w-full">
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
import { IonText, IonCard, IonCardContent, IonImg } from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "category",
  components: { IonText, IonCard, IonCardContent, IonImg },
  data() {
    return {
      shown: true
    };
  },
  methods: {
    ...mapActions(["fetchTypes"]),
    scet() {
      if (this.allTypes.length > 0) {
        this.shown = false;
      }
      return this.shown;
    }
  },
  computed: mapGetters(["allTypes"]),
  created() {
    this.fetchTypes();
  }
};
</script>

