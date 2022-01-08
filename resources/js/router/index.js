import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../components/categories/CategoriesIndex";
import CategoriesCreate from "../components/categories/CategoriesCreate";
import CategoriesEdit from "../components/categories/CategoriesEdit";
import Dashboard from "../components/Dashboard";
import Test from "../components/categories/Test";

const routes = [
    {
        path: "/dashboard",
        name: "categories.index",
        component: Dashboard,
    },
    {
        path: "/categories/create",
        name: "categories.create",
        component: CategoriesCreate,
    },
    {
        path: "/categories/:id/edit",
        name: "categories.edit",
        component: CategoriesEdit,
        props: true,
    },
    {
        path: "/categories/test",
        name: "categories.test",
        component: Test,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
