import Vue from "vue";
import Router from "vue-router";
import HomePage from "./vrouters/HomePage.vue";
import UsersPage from "./vrouters/UsersPage.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{path: "/", component: HomePage},
    {path: "/UsersPage", component: UsersPage}]
});
    