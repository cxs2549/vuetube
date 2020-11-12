<template>
    <div id="app">
        <SVGSprite />
        <Navbar />
        <Sidebar />
        <Filters />
        <Bottombar />
    </div>
</template>

<script>
import SVGSprite from "./assets/icons/SVGSprite"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Bottombar from "./components/Bottombar"
import Filters from "./components/Filters"
export default {
    name: "App",
    components: {
        SVGSprite,
        Navbar,
        Sidebar,
        Filters,
        Bottombar,
    },
}
</script>

<style>
#app {
    display: grid;
    grid-template-rows: 90px auto;
    grid-template-columns: 56px 1fr;
    @media screen and (min-width: 400px) {
        grid-template-rows: 56px auto;
        grid-template-columns: 56px 1fr;
    }
}
</style>
