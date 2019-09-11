<template>
    <div>
        <navbar />
        <div>我是首页呀</div>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
    layout: 'index',
    components: {
        Navbar,
    },
};
</script>

<style lang="less"></style>
