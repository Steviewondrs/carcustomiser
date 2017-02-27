<template>
    <aside class="sidebar {{ sideBarOpen ? 'sidebar--open' : '' }}">
        <h4 class="sidebar__title">Car Customiser</h4>
        <ul class="sidebar__menu">
            <li class="menu-item"><router-item to="/new">New</router-item></li>
            <li><a href="https://github.com/Steviewondrs/carcustomiser" target="_blank">About</a></li>
        </ul>
    </aside>
</template>