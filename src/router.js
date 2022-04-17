import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Line from "./views/Line";
import Stats from "./views/Stats";
import Info from "./views/Info";
import List from "./views/List";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/list",
            name: "list",
            component: List
        },
        {
            path: "/line/",
            name: "line",
            component: Line
        },
        {
            path: "/stats",
            name: "Statistiken",
            component: Stats
        },
        {
            path: "/info/:question",
            name: "faq-open",
            component: Info
        },
        {
            path: "/info",
            name: "faq",
            component: Info
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "about" */ "./views/Info.vue")
        }
    ]
});
