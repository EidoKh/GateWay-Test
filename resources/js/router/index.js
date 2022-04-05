import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard";
import Test from "../pages/Test";

import useConfig from "../config";

const { getHeader } = useConfig();

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/test",
        name: "test",
        component: Test,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
