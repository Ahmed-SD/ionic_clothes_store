
<template>
  <div class="h-full">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="dismissModal()">Close</ion-button>
        </ion-buttons>
        <ion-title>تفاصيل الطلب</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="h-full">
      <ion-item>
        <ion-label>اللون</ion-label>
        <ion-select value="brown" ok-text="تم" cancel-text="الغاء">
          <ion-select-option value="brown">احمر</ion-select-option>
          <ion-select-option value="blonde">اخضر</ion-select-option>
          <ion-select-option value="black">بنفسجي</ion-select-option>
          <ion-select-option value="red">برتقالي</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>المقاس</ion-label>
        <ion-select value="brown" ok-text="تم" cancel-text="الغاء">
          <ion-select-option value="brown">44</ion-select-option>
          <ion-select-option value="blonde">45</ion-select-option>
          <ion-select-option value="black">40</ion-select-option>
          <ion-select-option value="red">41</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>الكميه</ion-label>
        <ion-select value="brown" ok-text="تم" cancel-text="الغاء">
          <ion-select-option value="brown">1</ion-select-option>
          <ion-select-option value="blonde">2</ion-select-option>
          <ion-select-option value="black">3</ion-select-option>
          <ion-select-option value="red">4</ion-select-option>
        </ion-select>
      </ion-item>
      <div class="cart p-2">
        <router-link to="/tabs/cart/checkout/">
          <ion-button expand="full">شراء المنتج</ion-button>
        </router-link>
        <ion-button expand="full" @click="presentAlert()">اضف للسله</ion-button>
      </div>
    </ion-content>
  </div>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar ,alertController} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "validateProduct",
  props: {
    title: { type: String, default: "Super Modal" }
  },
  data() {
    return {
      content: "Content",
      currentModal: null
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar , },
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
    dismissModal() {
      console.log("seeda hd")
      if (this.currentModal) {
        this.currentModal.dismiss().then(() => {
          this.currentModal = null;
        });
      }
    }
  }
});
</script>