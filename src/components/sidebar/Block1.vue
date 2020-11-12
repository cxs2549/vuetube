<template>
    <div class="block1">
        <div class="filler"></div>
        <div class="iconRow highlight">
            <svg-icon icon="home" class="fullIcon"></svg-icon>
            <span class="bold">Home</span>
        </div>
        <div class="iconRow">
            <svg-icon icon="trending" class="fullIcon"></svg-icon>
            Trending
        </div>
        <div class="iconRow">
            <svg-icon icon="subscriptions" class="fullIcon"></svg-icon>
            Subscriptions
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.block1 {
    width: 100%;
    padding: 0.5rem 0;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    /* background: red; */
    .filler {
        height: 54px;
        visibility: hidden;
    }
    .highlight {
        background: var(--border-color);
    }
    .iconRow {
        padding: 0 var(--padding);
        display: flex;
        align-items: center;
        gap: 1.25rem;
        height: 40px;
        width: 100%;
        /* background: teal; */

        .fullIcon {
            color: var(--icon-color);
        }
        .bold {
            font-weight: 600;
        }
    }
}
</style>
