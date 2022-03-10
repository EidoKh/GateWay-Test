import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard";

import UsersIndex from "../pages/users/UsersIndex";
import UsersCreate from "../pages/users/UsersCreate";
import UsersEdit from "../pages/users/UsersEdit";

import OrderIndex from "../pages/orders/OrderIndex";
import OrderCreate from "../pages/orders/OrderCreate";
import OrderEdit from "../pages/orders/OrderEdit";

import useConfig from "../config";

const { getHeader } = useConfig();

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    //Users Routes
    {
        path: "/users",
        name: "users.index",
        component: UsersIndex,
    },
    {
        path: "/users/create",
        name: "users.create",
        component: UsersCreate,
    },
    {
        path: "/users/:id/edit",
        name: "users.edit",
        component: UsersEdit,
        props: true,
    },
    //Orders Routes
    {
        path: "/orders",
        name: "orders.index",
        component: OrderIndex,
    },
    {
        path: "/orders/create",
        name: "orders.create",
        component: OrderCreate,
    },
    {
        path: "/orders/:id/edit",
        name: "orders.edit",
        component: OrderEdit,
        props: true,
    },
    //((((((((((((((((((((((((((((((((((((((((((((Test Route))))))))))))))))))))))))))))))))))))))))))))
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
