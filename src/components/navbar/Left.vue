<template>
    <div class="left">
        <a href="#" v-on:click="$store.commit('toggleActive')"
            ><svg-icon icon="hamburger" class="burger"
        /></a>
        <a href="#"><div class="logo"></div></a>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.left {
    display: flex;
    justify-self: start;
    width: 160px;
    /* align-items: flex-end; */
    /* background: red; */
    padding: 0 1.25rem;
    .burger {
        margin-right: 1.25rem;
        color: var(--icon-color);
        display: none;
        @media screen and (min-width: 400px) {
            display: flex;
            align-items: center;
        }
    }
    .rash {
        background: blue;
    }
}
</style>
