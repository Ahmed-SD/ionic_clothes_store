<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios">
        <ion-back-button slot="start"></ion-back-button>
        <ion-title>تواصل معنا</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="p-4" :class="{hidden:validate}">
        <div class="w-full bg-red-300 border border-red-800 p-4">
          <h2 class="text-red-800">الرحاء ملء كل الحقول</h2>
        </div>
      </div>

      <div class="contact py-4">
        <ion-card>
          <ion-card-content>
            <form class="w-full">
              <div class="floating-input mb-5 relative">
                <input
                  type="text"
                  id="name"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="name"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الاسم</label>
              </div>
              <div class="floating-input mb-5 relative">
                <input
                  type="email"
                  id="email"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="email"
                >
                <label
                  for="email"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >الايميل</label>
              </div>

              <div class="floating-input mb-5 relative">
                <input
                  type="number"
                  id="phone"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="phone"
                >
                <label
                  for="phone"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >رقم الهاتف</label>
              </div>

              <div class="floating-input mb-5 relative">
                <textarea
                  id="message"
                  class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
                  placeholder=" "
                  autocomplete="off"
                  v-model="message"
                ></textarea>
                <label
                  for="message"
                  class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
                >رسالتك</label>
              </div>

              <div class="checkout">
                <ion-button expand="block" @click="send()">ارسال الرساله</ion-button>
              </div>
            </form>
          </ion-card-content>
        </ion-card>
      </div>

      <!-- fab -->
      <div class="fab">
        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
          <ion-fab-button color="primary">
            <ion-icon :icon="chatbubblesOutline"/>
          </ion-fab-button>
          <ion-fab-list side="start">
            <ion-fab-button color="primary">
              <ion-icon :icon="logoFacebook"/>
            </ion-fab-button>
            <ion-fab-button color="primary">
              <ion-icon :icon="logoInstagram"/>
            </ion-fab-button>
            <ion-fab-button color="primary">
              <ion-icon :icon="logoTwitter"/>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </div>
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
  toastController,
  IonCard,
  IonCardContent,
  IonFab,
  IonButton,
  IonIcon,
  IonFabButton,
  IonFabList
} from "@ionic/vue";
import {
  chatbubblesOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter
} from "ionicons/icons";
export default {
  name: "contact",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonIcon,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonButton,
    IonFab,
    IonFabButton,
    IonFabList
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phone: "",
      validate: true
    };
  },
  methods: {
    send() {
      if (this.name == "" && this.email == "" && this.message == "") {
        this.failed()
      } else if (this.name != "" && this.email != "" && this.message != "") {
        this.validate = true;

        // do email function
        this.success();
        this.name = "";
        this.email = "";
        this.message = "";
        this.phone = "";
      }
    },
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: " شكرا لتواصلك معنا ",
        message: "سيتم الرد عليك في اقرب فرصه",
        buttons: ["تم"]
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    async success() {
      const toast = await toastController.create({
        message: "تم ارسال رسالتك",
        duration: 4000,
        position: "top",

        color: "success"
      });
      return toast.present();
    },
        async failed() {
      const toast = await toastController.create({
        message: " الرجاء ملء كل الحقول ",
        duration: 4000,
        position: "top",

        color: "primary"
      });
      return toast.present();
    }
  },
  setup() {
    return {
      chatbubblesOutline,
      logoFacebook,
      logoInstagram,
      logoTwitter
    };
  }
};
</script>
<style scoped>
ion-content {
  --background: white !important;
}
.floating-input > input::placeholder,
.floating-input > textarea::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > textarea:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > textarea:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>
