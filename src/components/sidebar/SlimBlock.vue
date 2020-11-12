<template>
    <div class="slimbar">
        <svg-icon icon="home" class="slimIcon" />
        <svg-icon icon="home" class="slimIcon" />
        <svg-icon icon="trending" class="slimIcon" />
        <svg-icon icon="subscriptions" class="slimIcon" />
        <svg-icon icon="library" class="slimIcon" />
        <svg-icon icon="liked" class="slimIcon" />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.slimbar {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 1313px) {
        display: none;
    }
    .slimIcon {
        color: var(--icon-color);
        margin-bottom: 1.25rem;
    }
}
</style>
