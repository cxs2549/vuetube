<template>
    <div class="block4">
        <div class="titleRow">
            <span class="bold">More from YouTube</span>
        </div>
        <div class="iconRow">
            <svg-icon icon="history" class="fullIcon"></svg-icon>
            YouTube Premium
        </div>
        <div class="iconRow">
            <svg-icon icon="yourvideos" class="fullIcon"></svg-icon>
            Movies & Shows

        </div>
        <div class="iconRow">
            <svg-icon icon="watch" class="fullIcon"></svg-icon>
            <span>Gaming</span>

        </div>

        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            Live
        </div>
        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            Fashion & Beauty
        </div>
        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            Learning
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.block4 {
    width: 100%;
    padding: 0.5rem 0;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    /* background: red; */
    .titleRow {
        height: 30px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--icon-color);
        display: flex;
        align-items: center;
        padding-left: var(--padding);
        /* padding: .5rem var(--padding) 0 var(--padding); */
    }
    .iconRow {
        padding: 0 var(--padding);
        display: flex;
        align-items: center;
        gap: 1.25rem;
        height: 40px;
        width: 100%;
        .blueDot {
            border-radius: 50%;
            background: blue;
            height: 6px;
            width: 6px;
            margin-left: auto;
        }
        /* background: teal; */
        .bold {
            font-weight: 600;
            text-transform: uppercase;
            color: var(--icon-color);
        }

        .fullIcon {
            color: var(--icon-color);
        }
    }
}
</style>
