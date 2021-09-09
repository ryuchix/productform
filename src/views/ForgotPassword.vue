<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card class="container">
                <ion-card-header>
                    <ion-card-title class="title">Forgot password?</ion-card-title>
                    <ion-card-subtitle class="subtitle">Enter your email and we will send how to reset your password.</ion-card-subtitle>
                </ion-card-header>
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input type="text" v-model="data.email"></ion-input>
                </ion-item>
                <ion-card-content>
                    <ion-button expand="block" @click="forgot">Submit</ion-button>
                </ion-card-content>
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
        IonButtons,
        IonMenuButton
    },
    data() {
        return {
            data: {
                email: '',
            }
        }
    },
    methods: {
        forgot() {
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