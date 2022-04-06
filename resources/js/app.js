require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import Sidebar from "./components/bars/Sidebar.vue";
import "../css/index.css";
import vClickOutside from "click-outside-vue3";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp({
    components: {
        Sidebar,
    },
})
    .use(router)
    .use(Sidebar)
    .use(vClickOutside)
    .use(VueSweetalert2)
    .mount("#app");
