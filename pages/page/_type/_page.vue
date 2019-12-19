<template>
    <div>
        <article-list :list="pageData.posts" />
        <section class="page">
            <Button
                :disabled="currentPage == 1"
                class="prev page-btn"
                @click="handlePrev"
            >
                上一页
            </Button>
            <span> {{ currentPage }} / {{ totalPage }}</span>
            <Button
                :disabled="currentPage == totalPage"
                class="next page-btn"
                @click="handleNext"
            >
                下一页
            </Button>
        </section>
    </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';

export default {
    components: {
        ArticleList,
    },
    data() {
        return {};
    },
    computed: {
        currentPage() {
            return Number(this.$route.params.page) || 1;
        },
        totalPage() {
            return this.pageData.totalPage || 1;
        },
    },
    async asyncData({ params, store }) {
        const typeData = store.state[params.type] || [];
        const data = typeData[params.page - 1].data || {};
        return { pageData: data };
    },
    validate({ params, store }) {
        const { page, type = '' } = params;
        const articleDetail = store.state[type];
        const totalPage = articleDetail.length || 0;
        if (store.state.docType.indexOf(type) < 0) {
            return false;
        }
        if (/^\d+$/.test(page)) {
            if (+page > totalPage || +page < 1) {
                return false;
            }
        } else {
            return false;
        }
        return true;
    },
    created() {},
    methods: {
        handlePrev() {
            const page = this.pageData.prev === 0 ? 1 : this.pageData.prev;

            this.$router.push(`/page/${this.$route.params.type}/${page}`);
        },

        handleNext() {
            const page = this.pageData.next === 0 ? this.currentPage : this.pageData.next;
            console.log(page);
            // return;
            this.$router.push(`/page/${this.$route.params.type}/${page}`);
        },
    },
};
</script>

<style lang="less">
.page {
  text-align: center;
  margin-top: 50px;
}
.page-btn {
}
</style>
