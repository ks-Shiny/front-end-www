<template>
    <iframe
        :src="'/js/pdfjs/web/viewer.html?file=' + pdfUrl"
        width="100%"
        height="100%"
        scrolling="no"
    >
        您的浏览器不支持PDF阅读
    </iframe>
</template>

<script>
export default {
    data() {
        return {
            pdfUrl: '/article/pdf/test.pdf',
        };
    },
};
</script>

<style lang="less"></style>
