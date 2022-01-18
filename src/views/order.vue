<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button :icon="chevronBackOutline" mode="md" default-href="/tabs/cart/checkout" slot="start">
        </ion-back-button>
        <ion-title>تفاصيل الطلب</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <ion-icon class="text-2xl" :icon="checkmark"></ion-icon>
          </ion-avatar>
          <ion-label>
            <h2>تأكيد الطلب</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
          </ion-label>
        </ion-item>
        <!-- 2 -->
        <ion-item>
          <ion-avatar slot="start">
            <ion-icon class="text-2xl" :icon="alarmOutline"></ion-icon>
          </ion-avatar>
          <ion-label>
            <h2>التوصيل</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
          </ion-label>
        </ion-item>
        <!-- 3 -->
        <ion-item>
          <ion-avatar slot="start">
            <ion-icon class="text-2xl" :icon="alarmOutline"></ion-icon>
          </ion-avatar>
          <ion-label>
            <h2>بالعافيه عليك</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
          </ion-label>
        </ion-item>
      </ion-list>
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
  IonBackButton
} from "@ionic/vue";
import { checkmark, alarmOutline,chevronBackOutline } from "ionicons/icons";

export default {
  name: "order",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton
  },
  setup() {
    return {
      checkmark,
      alarmOutline,
      chevronBackOutline
    };
  }
};
</script>

