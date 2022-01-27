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

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    //categories routes
    {
        path: "/categories",
        name: "categories.index",
        component: CategoriesIndex,
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

    //books routes
    {
        path: "/books",
        name: "books.index",
        component: BooksIndex,
    },
    {
        path: "/books/create",
        name: "books.create",
        component: BooksCreate,
    },
    {
        path: "/books/:id/edit",
        name: "books.edit",
        component: BooksEdit,
        props: true,
    },

    //books routes
    {
        path: "/authors",
        name: "authors.index",
        component: AuthorsIndex,
    },
    {
        path: "/authors/create",
        name: "authors.create",
        component: AuthorsCreate,
    },
    {
        path: "/authors/:id/edit",
        name: "authors.edit",
        component: AuthorsEdit,
        props: true,
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
    {
        path: "/users/:id/view",
        name: "users.view",
        component: UsersView,
        props: true,
    },
    {
        path: "/reservations",
        name: "reservations.index",
        component: ReservationsIndex,
    },
    {
        path: "/loginn",
        name: "login",
        component: Login,
    },
    {
        path: "/registerr",
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
