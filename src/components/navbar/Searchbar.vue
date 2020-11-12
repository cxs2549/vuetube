<template>
    <div class="searchbar">
        <form class="srch-bar">
            <div>
                <input type="text" placeholder="Search" />
                <button type="submit" class="search-btn">
                    <svg-icon icon="search" />
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.searchbar {
    grid-column: 2;
    grid-row: 1;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    background: blue;
        flex-grow: 1;
    .srch-bar {
        display: flex;
        margin: 0 auto;
        position: relative;
        flex-grow: 1;
    }
    input {
        visibility: hidden;
        font-size: 16px;
        border: 1px solid var(--border-color);
        background: var(--bg-color);
        color: white;
        outline: none;
        @media screen and (min-width: 657px) {
            padding-left: 1rem;
            margin: 0 auto;
            width: 100%;
            height: 35px;
            justify-self: start;
            display: flex;
            max-width: 550px;
            flex-grow: 1;
            visibility: visible;
        }
    }
}
.searchInput {
    background: blue;
}
.searchIcon {
    visibility: hidden;
    @media screen and (min-width: 657px) {
        visibility: visible;
        position: absolute;
        right: 0;
    }
    /* margin: 0 1rem; */
    display: flex;
    height: 27px;
    top: 8px;
    align-items: center;
    justify-content: center;
    color: var(--icon-color);
    /* background: gray; */
    width: 40px;
    /* padding: 1rem 1rem; */
}
.search-btn {
    position: absolute;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
}
</style>
