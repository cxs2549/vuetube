<template>
    <div class="block3">
        <div class="titleRow">
            <span class="bold">Subscriptions</span>
        </div>
        <div class="iconRow">
            <svg-icon icon="history" class="fullIcon"></svg-icon>
            wetmovie1
            <div class="blueDot"></div>
        </div>
        <div class="iconRow">
            <svg-icon icon="yourvideos" class="fullIcon"></svg-icon>
            Doug Benson
            <div class="blueDot"></div>

        </div>
        <div class="iconRow">
            <svg-icon icon="watch" class="fullIcon"></svg-icon>
            <span>Traversy Media</span>
            <div class="blueDot"></div>

        </div>

        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            TheDailyWoo
            <div class="blueDot"></div>
        </div>
        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            JS Mastery
            <div class="blueDot"></div>
        </div>
        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            CS50
            <div class="blueDot"></div>
        </div>
        <div class="iconRow">
            <svg-icon icon="liked" class="fullIcon"></svg-icon>
            Tiff & Case
            <div class="blueDot"></div>
        </div>
        <div class="iconRow">
            <svg-icon icon="down" class="fullIcon"></svg-icon>
            Show 44 more
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.block3 {
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
