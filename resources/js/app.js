require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import Sidebar from "./components/bars/Sidebar.vue";
import "../css/index.css";
import vClickOutside from "click-outside-vue3";

createApp({
    components: {
        Sidebar,
    },
})
    .use(router)
    .use(Sidebar)
    .use(vClickOutside)
    .mount("#app");
