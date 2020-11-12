<template>
    <div class="bottomBlock">
        <div class="iconRow">
            <ul class="list">
                <li>About</li>
                <li>Press</li>
                <li>Copyright</li>
            </ul>
            <ul class="list">
                <li>Contact us</li>
                <li>Creators</li>
            </ul>
            <ul class="list">
                <li>Advertise</li>
                <li>Developers</li>
            </ul>
            <ul class="list top-pad">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Policy & Safety</li>
            </ul>
            <ul class="list">
                <li>How YouTube works</li>
            </ul>
            <ul class="list">
                <li>Test new features</li>
            </ul>
            <footer>
                &copy; 2020 SuperVision Design
            </footer>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.bottomBlock {
    width: 100%;
    padding: 0.5rem .25rem;
    height: auto;
    color: var(--icon-color);
    font-size: 13px;
    border-bottom: 1px solid var(--border-color);
    .iconRow {
        padding:  var(--padding);
        display: flex;
        padding-top: .75rem;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        height: auto;
        width: 100%;
        .list {
            display: flex;
            list-style-type: none;
            gap: 0.5rem;
            flex-wrap: 1;
            width: 100%;
            white-space: nowrap;
        }
        .top-pad {
            margin-top: 0.5rem;
        }
    }
}
footer {
    /* padding-left: var(--padding); */
    width: 100%;
    margin-top: 1rem;
    /* margin-bottom: .25rem; */
    /* background: red; */
}
</style>
