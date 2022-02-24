import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../components/Dashboard";

import UsersIndex from "../components/users/UsersIndex";
import UsersCreate from "../components/users/UsersCreate";
import UsersEdit from "../components/users/UsersEdit";

import OrderIndex from "../components/orders/OrderIndex";
import OrderCreate from "../components/orders/OrderCreate";
import OrderEdit from "../components/orders/OrderEdit";

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
