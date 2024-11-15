import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';

const app = createApp(App)
// const head = createHead();
app.config.errorHandler = function (err, vm, info) {
    let error = {
        name: 'VueError',
        source: vm._.type.__file,
        message: err,
        error: info,
        type: 3
    };

    throw error
};
app.use(createPinia());
app.use(router);
// app.use(head);
// app.provide('$http', axios);
app.mount('#app');
