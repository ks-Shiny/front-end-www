<template>
    <div class="container">
        <weekly-list
            class="weekly-part"
            :list="indexData.weeklyData"
        />
        <blog-list
            :page-data="indexData.blogData[currentPage - 1].data"
            :total-page="totalPage"
            :current-page="currentPage"
            @pageChange="handlePage"
        />
    </div>
</template>

<script>
import WeeklyList from '@/components/WeeklyList.vue';
import BlogList from '@/components/BlogList.vue';

export default {
    components: {
        WeeklyList,
        BlogList,
    },
    computed: {
        totalPage() {
            return this.indexData.blogData.length;
        },
    },
    async asyncData({ store }) {
        const indexData = store.state.indexData || {};
        return {
            indexData,
            currentPage: 1,
        };
    },
    created() {},
    methods: {
        handlePage(page) {
            this.currentPage = page;
        },
    },
};
</script>

<style lang="less">
.weekly-part {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
