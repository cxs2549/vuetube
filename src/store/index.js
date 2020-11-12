import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navbar: {
            icons: [{ id: "apps" }, { id: "search" }, { id: "create" }, { id: "notification" }],
            dropdown: false,
        },
        bottombar: {
            tabs: [
                { id: "home", label: "Home" },
                { id: "trending", label: "Trending" },
                { id: "liked", label: "Liked" },
                { id: "subscriptions", label: "Subscriptions" },
            ],
        },
    },
    mutations: {
        toggleActive: (state) => {
            return (state.navbar.dropdown = !state.navbar.dropdown)
        },
    },
})
