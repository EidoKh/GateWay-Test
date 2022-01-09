import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../components/Dashboard";
import Test from "../components/categories/Test";
import CategoriesIndex from "../components/categories/CategoriesIndex";
import CategoriesCreate from "../components/categories/CategoriesCreate";
import CategoriesEdit from "../components/categories/CategoriesEdit";

import BooksIndex from "../components/books/BooksIndex";
import BooksCreate from "../components/books/BooksCreate";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
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
        path: "/categories/test",
        name: "categories.test",
        component: Test,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
