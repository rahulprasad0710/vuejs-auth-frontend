import Vue from "vue";
import VueToastify from "vue-toastify";
import GAuth from "vue-google-oauth2";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueToastify);

Vue.config.productionTip = false;

const gauthOption = {
    clientId:
        "280403349813-np4rdq6fn4v5ju8vm0830f1qke47ff7c.apps.googleusercontent.com",
    scope: "profile email",
    prompt: "consent",
    fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
