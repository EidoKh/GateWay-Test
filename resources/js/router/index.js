import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../components/Dashboard";
import Test from "../components/categories/Test";
import CategoriesIndex from "../components/categories/CategoriesIndex";
import CategoriesCreate from "../components/categories/CategoriesCreate";
import CategoriesEdit from "../components/categories/CategoriesEdit";

import BooksIndex from "../components/books/BooksIndex";
import BooksCreate from "../components/books/BooksCreate";
import BooksEdit from "../components/books/BooksEdit";

import AuthorsIndex from "../components/authors/AuthorsIndex";
import AuthorsCreate from "../components/authors/AuthorsCreate";
import AuthorsEdit from "../components/authors/AuthorsEdit";

import UsersIndex from "../components/users/UsersIndex";
import UsersCreate from "../components/users/UsersCreate";
import UsersEdit from "../components/users/UsersEdit";
import UsersView from "../components/users/UsersView";

import ReservationsIndex from "../components/reservations/ReservationsIndex";

import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import axios from "axios";
import useConfig from "../config";

const { getHeader } = useConfig();

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    //categories routes
    {
        path: "/categories",
        name: "categories.index",
        component: CategoriesIndex,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/categories/create",
        name: "categories.create",
        component: CategoriesCreate,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/categories/:id/edit",
        name: "categories.edit",
        component: CategoriesEdit,
        props: true,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },

    //books routes
    {
        path: "/books",
        name: "books.index",
        component: BooksIndex,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/books/create",
        name: "books.create",
        component: BooksCreate,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/books/:id/edit",
        name: "books.edit",
        component: BooksEdit,
        props: true,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },

    //books routes
    {
        path: "/authors",
        name: "authors.index",
        component: AuthorsIndex,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/authors/create",
        name: "authors.create",
        component: AuthorsCreate,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/authors/:id/edit",
        name: "authors.edit",
        component: AuthorsEdit,
        props: true,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    //Users Routes
    {
        path: "/users",
        name: "users.index",
        component: UsersIndex,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/users/create",
        name: "users.create",
        component: UsersCreate,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/users/:id/edit",
        name: "users.edit",
        component: UsersEdit,
        props: true,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/users/:id/view",
        name: "users.view",
        component: UsersView,
        props: true,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/reservations",
        name: "reservations.index",
        component: ReservationsIndex,
        beforeEnter: (to, from, next) => {
            axios
                .get("api/check_login", {
                    headers: getHeader(),
                })
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "login" });
                });
        },
    },
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    //((((((((((((((((((((((((((((((((((((((((((((Test Route))))))))))))))))))))))))))))))))))))))))))))
    {
        path: "/tests",
        name: "tests.index",
        component: Test,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
