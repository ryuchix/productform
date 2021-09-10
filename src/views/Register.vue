<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card class="container">
                <ion-card-header>
                    <ion-card-title class="title">Sign up</ion-card-title>
                    <ion-card-subtitle class="subtitle">Fill the form to register.</ion-card-subtitle>
                </ion-card-header>
                <ion-item>
                    <ion-label position="floating">Name</ion-label>
                    <ion-input type="text" v-model="data.name"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input type="email" v-model="data.email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Username</ion-label>
                    <ion-input type="text" v-model="data.username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password" v-model="data.password"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Confirm Password</ion-label>
                    <ion-input type="password" v-model="data.confirm_password"></ion-input>
                </ion-item>
                <ion-card-content>
                    <ion-button expand="block" @click="handleClick">Register</ion-button>
                </ion-card-content>
                <router-link to="/login">Already registered? Click here to login.</router-link>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
    name: 'Register',
    components: {
        //
    },
    data() {
        return {
            data: {
                name: '',
                email: '',
                username: '',
                password: '',
                confirm_password: '',
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleClick(e) {
            e.preventDefault()
            this.submitted = true
            this.register(this.data)
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