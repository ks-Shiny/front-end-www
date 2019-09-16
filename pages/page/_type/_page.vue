<template>
    <div>
        <article-list :list="list" />
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';

export default {
    components: {
        ArticleList
    },
    data() {
        return {};
    },
    async asyncData({ params, store }) {
        const dataConfig = store.state[params.type] || {};
        const start = Math.max(params.page - 1, 0) * dataConfig.pageSize;
        const end = start + dataConfig.pageSize;
        const nameList = dataConfig.files.slice(start, end);

        async function asyncImport(name) {
            const wholeMD = await import(
                /* eslint comma-dangle: ["error", "never"] */
                `~/static/article/${params.type}/${name}.md`
            );
            return wholeMD.attributes;
        }

        return Promise.all(nameList.map(name => asyncImport(name))).then(res => ({
            list: res
        }));
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
    created() {},
    methods: {}
};
</script>

<style lang="less"></style>
