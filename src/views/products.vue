<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button
          :icon="chevronBackOutline"
          mode="md"
          default-href="/tabs/category/"
          slot="start"
        ></ion-back-button>
        <ion-title>{{category[id].name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label>
          <i class="fi fi-rr-filter"></i>
        </ion-label>
        <ion-select
          :interface-options="customActionSheetOptions"
          interface="action-sheet"
          placeholder="السعر "
        >
          <ion-select-option value="red">من الاعلي الي الاقل</ion-select-option>
          <ion-select-option value="purple">من الاقل الي الاعلي</ion-select-option>
        </ion-select>
      </ion-item>
      <products></products>
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
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from "@ionic/vue";
import { chevronBackOutline } from "ionicons/icons";

// custom components
import products from "../components/products/products.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "allProducts",
  data() {
    return {};
  },
  setup() {
    return {
      chevronBackOutline
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton,
    products,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
  },
  methods: {
    ...mapActions(["fetchTypes"]),
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
  },
  computed: mapGetters(["allTypes"]),
  created() {
    this.fetchTypes();
    this.category = this.allTypes;
    this.id = this.$route.params.id;
  }
};
</script>
