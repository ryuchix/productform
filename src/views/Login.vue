<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card class="container">
                <ion-card-header>
                    <ion-card-title class="title">Login</ion-card-title>
                    <ion-card-subtitle class="subtitle">Use your credentials to login.</ion-card-subtitle>
                </ion-card-header>
                <ion-item>
                    <ion-label position="floating">Username</ion-label>
                    <ion-input type="text" v-model="data.username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password" v-model="data.password"></ion-input>
                </ion-item>
                <ion-card-content class="remember">
                    <ion-checkbox></ion-checkbox>
                    <ion-label>Remember login</ion-label>
                </ion-card-content>
                <ion-card-content>
                    <ion-button expand="block" @click="login">Login</ion-button>
                </ion-card-content>
                <router-link to="/forgot-password">Forgot password?</router-link>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonCheckbox, IonButtons, IonMenuButton, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonInput,
        IonCheckbox,
        IonMenuButton,
        IonButtons
    },
    data() {
        return {
            data: {
                username: '',
                password: ''
            },
            buttonText: 'Back',
            buttonIcon: ''
        }
    },
    methods: {
        login() {
            console.log(this.data)
        },
        back() {
            this.$router.back()
        }
    }
});
</script>

<style scoped lang="scss">
.container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 20px 20px;

    .title {
        margin-bottom: 20px;
    }

    .remember {
        display: flex;
        align-items: center;

        ion-label {
            margin-left: 10px;
        }
    }
}
</style>