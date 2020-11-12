<template>
    <div class="right">
        <div class="icons-navbar hide-apps">
            <svg-icon icon="apps" />
        </div>
        <div class="icons-navbar hide-search">
            <svg-icon icon="search" />
        </div>
        <div class="icons-navbar">
            <svg-icon icon="create" />
        </div>
        <div class="icons-navbar">
            <svg-icon icon="notification" />
        </div>
        <div class="circle-sm">cs</div>
    </div>
</template>

<script>
export default {
    computed: {
        getIcons() {
            return this.$store.state.navbar.icons
        },
    },
}
</script>

<style lang="scss">
.right {
    grid-column: 3;
    grid-row: 1;
    width: 100%;
    /* background: blue; */
    @media screen and (min-width: 657px) {
        justify-self: end;
        grid-column: 3;
    }
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* padding: 0 1.25rem; */
    /* background: red; */
    .hide-search {
        visibility: visible;
        @media screen and (min-width: 657px) {
            visibility: hidden;
            display: none;
        }
    }
    .hide-apps {
        visibility: hidden;
        @media screen and (min-width: 657px) {
            visibility: visible;
        }
    }
}
.icons-navbar {
    margin-left: var(--padding);
    color: var(--icon-color);
    cursor: pointer;
    position: relative;
    display: flex;
    svg-icon {
        position: relative;
    }
    .hide-apps {
        visibility: hidden;
        @media screen and (min-width: 430px) {
            visibility: visible;
        }
    }
}
.circle-sm {
    cursor: pointer;
    border-radius: 50%;
    background: #aa47bc;
    min-height: 30px;
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--padding);
    color: white;
    font-size: 13px;
}
.badgeHost {
    padding: relative;
}
.badge {
    border-radius: 50%;
    background: red;
    width: 8px;
    position: absolute;
    height: 8px;
    margin-top: 5px;
    margin-right: 2px;
    border: 2px solid transparent;
    z-index: 11;
    top: 0;
    right: 0;
}
</style>
