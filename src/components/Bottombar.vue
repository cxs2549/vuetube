<template>
    <div class="bottombar">
        <div v-for="tab in getTabs" :key="tab" class="tab">
            <svg-icon :icon="tab.id" class="icons" />
            <span>{{ tab.label }}</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getTabs() {
            return this.$store.state.bottombar.tabs
        },
    },
}
</script>

<style lang="scss">
.bottombar {
    background: var(--app-color);
    position: absolute;
    width: 100%;
    padding: 4px 0;
    bottom: 0;
    left: 0;
    height: 75px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    @media screen and (min-width: 400px) {
        visibility: hidden;
    }
}
.tab {
    width: 4.5rem;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    align-items: center;
    span {
        font-size: 0.7rem;
        margin-top: -0.25rem;
    }
}

</style>
