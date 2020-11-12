<template>
    <div class="block2">
        <div class="iconRow">
            <svg-icon icon="library" class="fullIcon"></svg-icon>
            <span class="bold">Library</span>
        </div>
        <div class="iconRow">
            <svg-icon icon="history" class="fullIcon"></svg-icon>
            History
        </div>
        <div class="iconRow">
            <svg-icon icon="yourvideos" class="fullIcon"></svg-icon>
            Your videos
        </div>
        <div class="iconRow">
            <svg-icon icon="watch" class="fullIcon"></svg-icon>
            <span class="bold">Watch later</span>
        </div>
        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            Liked videos
        </div>
        <div class="iconRow">
            <svg-icon icon="down" class="fullIcon"></svg-icon>
            Show more
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.block2 {
    width: 100%;
    padding: 0.5rem 0;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    /* background: red; */
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
        
    }
}
</style>
