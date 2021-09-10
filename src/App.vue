<template>
  <ion-app>
    <ion-header>
        <ion-toolbar>
        <ion-buttons>
            <ion-back-button default-href="home" @click="back"></ion-back-button>
        </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonButtons, IonMenuButton, IonToolbar, IonHeader, IonBackButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
        IonButtons,
        IonMenuButton,
        IonToolbar,
        IonHeader,
        IonBackButton
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
});
</script>