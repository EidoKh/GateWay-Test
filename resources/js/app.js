require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import CategoriesIndex from "./components/categories/CategoriesIndex";
import Sidebar from "./components/bars/Sidebar.vue";
import "../css/index.css";

createApp({
    components: {
        CategoriesIndex,
        Sidebar,
    },
})
    .use(router)
    .use(Sidebar)
    .mount("#app");
