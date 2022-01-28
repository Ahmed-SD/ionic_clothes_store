<template>
  <div class="tebs bg-white h-68 relative">
    <ion-segment
      class="flex flex-col iems-center juustfiy-center sticky top-0"
    >
      <ion-segment-button value="friends" class="h-42">
        <ion-label>افضل الماركات</ion-label>
      </ion-segment-button>
      <ion-segment-button @click="$store.state.selectedCat='اقمصة'" value="enemies1" class="h-42">
        <ion-label>الاقمصه</ion-label>
      </ion-segment-button>
      <ion-segment-button @click="$store.state.selectedCat='تشيرتات'" value="enemies2" class="h-42">
        <ion-label>التشيرتات</ion-label>
      </ion-segment-button>
      <ion-segment-button @click="$store.state.selectedCat='بناطلين'" value="enemies3" class="h-42">
        <ion-label>البناطلين</ion-label>
      </ion-segment-button>
            <ion-segment-button @click="$store.state.selectedCat='احذية'" value="enemis3" class="h-42">
        <ion-label>الاحذية</ion-label>
      </ion-segment-button>
    </ion-segment>
  </div>
</template>
<script>
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/vue";
export default {
  name: "catTabs",
  components: {
    IonSegment,
    IonSegmentButton,
    IonLabel
  }
};
</script>

