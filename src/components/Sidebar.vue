<template>
    <aside :class="sideBarOpen ? 'open' : '' ">
        <ul>
            <li><a href="https://github.com/Steviewondrs/carcustomiser">About</a></li>
        </ul>
    </aside>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed: mapState({
            sideBarOpen: state => state.sideBarOpen
        })
    }
</script>