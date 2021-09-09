<template>
  <ion-app>
    <ion-header>
        <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="home" @click="back"></ion-back-button>
        </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonButtons, IonMenuButton, IonToolbar} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
        IonButtons,
        IonMenuButton,
        IonToolbar
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
});
</script>