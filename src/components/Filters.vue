<template>
    <div class="filters" :class="getToggled && 'indent'">
        <button class="filter all">All</button>
        <button class="filter">CSS</button>
        <button class="filter">JavaScript</button>
        <button class="filter">React</button>
        <button class="filter">Vue</button>
        <button class="filter">Podcasts</button>
        <button class="filter">Meditation</button>
        <button class="filter">Roadbikes</button>
        <button class="filter">Hiking</button>
        <button class="filter">Driving</button>
        <button class="filter">Tourism</button>
        <button class="filter">HTML</button>
        <button class="filter">Swift</button>
        <button class="filter">tailwincss</button>
        <button class="filter">GT Sport</button>
    </div>
</template>

<script>
export default {
    computed: {
        getToggled() {
            return this.$store.state.navbar.dropdown
        },
    },
}
</script>

<style lang="scss">
.filters {
    grid-row: 2;
    /* margin-left: 54px; */
    height: 56px;
    position: fixed;
    top: 56px;
    display: flex;
    width: 100%;
    justify-content: start;
    /* justify-content: center; */
    /* background: red; */
    @media screen and (min-width: 400px) {
        top: 56px;
    }
    @media screen and (min-width: 1313px) {
        justify-content: center;
    }
    background: var(--app-color);
    width: 100vw;
    display: flex;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    overflow-x: scroll;
    padding: 0 var(--padding);
    /* background: red; */

    .filter {
        padding: 6px 12px;
        white-space: nowrap;
        font-size: 0.9rem;
        margin-right: 2rem;
        text-align: center;
        background: var(--filter-color);
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
        border: 1px solid var(--filter-border);
    }
    .all {
        background: var(--icon-color);
        color: whitesmoke;
        border: 1px solid #565656;
    }
}
.indent {
    left: 56px;
    justify-content: start;
    @media screen and (min-width: 792px) {
        left: 240px;
        width: 83%;
    }
}
</style>
