<template>
    <section class="l-user">user
        <nav-main></nav-main>
    </section>
</template>

<script>
    import NavMain from '@/components/Navs/NavMain';

    export default {
        name: 'user',
        components: {
            'nav-main': NavMain
        }
    };
</script>

<style lang="scss">
</style>
