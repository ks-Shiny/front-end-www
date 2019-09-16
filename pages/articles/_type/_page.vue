<template>
    <div>
        <article-list />
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';

export default {
    components: {
        ArticleList,
    },
    validate({ params, store }) {
        const { page, type = '' } = params;
        const articleDetail = store.state[type];
        if (store.state.articleType.indexOf(type) < 0) {
            return false;
        }
        if (/^\d+$/.test(page)) {
            if (+page > articleDetail.totalPage || +page < 1) {
                return false;
            }
        } else {
            return false;
        }
        return true;
    },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="less"></style>
