<template>
    <div class="l-body" id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style lang="scss">
    .l-body {
        /*max-width: 640px;
        min-width: 320px;
        margin: 0 auto;*/
        background-color: #f5f5f5;
        min-height: 100%;
    }
</style>
