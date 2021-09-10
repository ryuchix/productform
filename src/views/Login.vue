<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card class="container">
                <ion-card-header>
                    <ion-card-title class="title">Login</ion-card-title>
                    <ion-card-subtitle class="subtitle">Use your credentials to login.</ion-card-subtitle>
                </ion-card-header>
                <ion-item>
                    <ion-label position="floating">Email address</ion-label>
                    <ion-input type="email" v-model="data.email"></ion-input>
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
                    <ion-button expand="block" @click="handleClick">Login</ion-button>
                </ion-card-content>
                <div>
                    <router-link to="/forgot-password">Forgot password?</router-link>
                </div>
                <div>
                    <router-link to="/register">Sign up here</router-link>
                </div>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
    name: 'Login',
    components: {
        //
    },
    data() {
        return {
            data: {
                email: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        // this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleClick(e) {
            e.preventDefault()
            this.submitted = true
            const { email, password } = this.data;
            if (email && password) {
                this.login({ email, password })
            }
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