<template>

    <ion-page>
        <ion-header>
            <ion-toolbar mode="ios">
                <ion-back-button slot="start"></ion-back-button>
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
        </ion-content>
    </ion-page>


</template>
<script lang="ts">
import Vue from "vue";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonBackButton
} from "@ionic/vue";
export default {
  name: "baseLayout",
  props:["header"],
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonBackButton
  }
};
</script>

