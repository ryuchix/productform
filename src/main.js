import * as Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'

import * as IonComponents from '@ionic/vue'
import { store } from './store'

// import { store } from './store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = Vue.createApp(App)
            .use(IonicVue)
            .use(store)
            .use(router);
  
// initialize all ionic components
Object.keys(IonComponents).forEach(key => {
    if (/^Ion[A-Z]\w+$/.test(key)) {
        app.component(key, IonComponents[key]);
    }
});

router.isReady().then(() => {
    app.mount('#app');
});
