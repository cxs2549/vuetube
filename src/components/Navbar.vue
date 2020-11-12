<template>
    <header class="header">
        <div class="hamburgerLogo">
            <a href="#" v-on:click="$store.commit('toggleActive')"
                ><svg-icon icon="hamburger" class="burger"
            /></a>
            <a href="#">
                <img
                    src="../assets/images/logo-light.png"
                    alt="YouTube Logo"
                    class="youtube-logo"
                />
            </a>
        </div>
        <form class="search-bar">
            <input class="search-input" type="search" placeholder="Search" aria-label="Search" />
            <button type="submit" class="search-btn">
                <svg-icon icon="search" class="menu-icon" />
            </button>
        </form>
        <Right />
    </header>
</template>

<script>
// import Left from "./navbar/Left"
// import Searchbar from "./navbar/Searchbar"
import Right from "./navbar/Right"
export default {
    components: {
        // Left,
        // Searchbar,
        Right,
    },
    computed: {
        getToggled() {
            return this.$store.state.navbar.dropdown
        },
    },
}
</script>

<style lang="scss">
.header {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 0.25fr 1fr 0.3fr;
    /* justify-content: space-between; */
    align-items: center;
    padding: 0 1.25rem;
    height: 56px;
    border-bottom: 1px solid var(--border-colo);
    background: var(--app-color);
    .burger {
        /* margin-right: 1.25rem; */
        color: var(--icon-color);
        display: none;
        @media screen and (min-width: 400px) {
            display: flex;
            align-items: center;
        }
    }
    .hamburgerLogo {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }
}
.youtube-logo {
    height: 20px;
}

.search-bar {
    display: none;
    @media screen and (min-width: 657px) {
        display: flex;
        flex-grow: 1;
        margin: 0 3rem 0 8rem;
        margin: 0 auto;
    }
}

.search-input {
    width: 100%;
    font-size: inherit;
    padding: 0.4em;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    color: white;
    outline: none;
    min-width: 250px;
    @media screen and (min-width: 1030px) {
        min-width: 550px;
    }
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.search-btn {
    display: flex;
    align-items: center;
    width: auto;
    padding: 0 1rem;
    border: 1px solid var(--border-color);
    background-color: #f8f8f8;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
}

.search-btn:hover {
    background-color: #f0f0f0;
}

.menu-icons {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    /* gap: 1.5rem; */
}
.menu-icon {
    color: var(--icon-color);
    margin-right: 1.5rem;
}

.menu-channel-icon {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: #aaa;
}
</style>
