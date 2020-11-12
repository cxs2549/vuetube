<template>
    <div v-show="getToggled" class="sidebar">

        <div class="slimmy">
            <SlimBlock />
        </div>
        <div class="sidebar-lg">
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <BottomBlock />
        </div>
    </div>
</template>

<script>
import SlimBlock from "./sidebar/SlimBlock"
import Block1 from "./sidebar/Block1"
import Block2 from "./sidebar/Block2"
import Block3 from "./sidebar/Block3"
import Block4 from "./sidebar/Block4"
import Block5 from "./sidebar/Block5"
import BottomBlock from "./sidebar/BottomBlock"
export default {
    components: {
        SlimBlock,
        Block1,
        Block2,
        Block3,
        Block4,
        Block5,
        BottomBlock,
    },
    computed: {
        getToggled() {
            return this.$store.state.navbar.dropdown
        }
    }
}
</script>

<style lang="scss">
.sidebar {
    visibility: hidden;
    font-size: 14px;
    overflow-y: scroll;
    z-index: -1;
    overflow-x: hidden;
    background: var(--app-color);
    height: 100vh;
    @media screen and (min-width: 400px) {
        position: fixed;
        visibility: visible;
        border-right: 1px solid var(--border-color);
        left: 0;
        /* top: 54px; */
        bottom: 0;
        width: 56px;
    }
    @media screen and (min-width: 792px) {
        width: 240px;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-end;
    }
    .slimmy {
        @media screen and (min-width: 792px) {
            display: none;
        }
    }
    .sidebar-lg {
        display: none;
        @media screen and (min-width: 792px) {
            display: inline;
        }
    }
}
</style>
