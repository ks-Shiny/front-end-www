<template>
    <div class="article-list">
        <section class="list">
            <div
                v-for="item in list"
                :key="item.id"
                class="article-item"
            >
                <div class="name">
                    {{ item }}
                </div>
            </div>
        </section>
        <section class="page">
            <button
                :disabled="currentPage == 1"
                class="prev"
                @click="handlePrev"
            >
                上一页
            </button>
            <span> {{ currentPage }} / {{ totalPage }}</span>
            <button
                :disabled="currentPage == totalPage"
                class="next"
                @click="handleNext"
            >
                下一页
            </button>
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'ArticleList',
    data() {
        return {};
    },
    computed: {
        ...mapState(['articleType']),
        dataConfig() {
            return this.$store.state[this.$route.params.type] || {};
        },
        total() {
            return this.dataConfig.total || 0;
        },
        allFiles() {
            return this.dataConfig.files || [];
        },
        currentPage() {
            return Number(this.$route.params.page) || 1;
        },
        totalPage() {
            return this.dataConfig.totalPage || 1;
        },
        size() {
            return this.dataConfig.size || 10;
        },
        list() {
            const start = Math.max(this.currentPage - 1, 0) * this.size;
            const end = start + this.size;
            return this.allFiles.slice(start, end);
        },
    },
    methods: {
        handlePrev() {
            const page = this.currentPage - 1 > 0 ? this.currentPage - 1 : 1;

            this.$router.push(`/article/${this.$route.params.type}/${page}`);
        },

        handleNext() {
            const page = this.currentPage + 1 > this.totalPage
                ? this.currentPage
                : this.currentPage + 1;

            this.$router.push(`/article/${this.$route.params.type}/${page}`);
        },
    },
}; </script
>>
<style lang="less">
.article-list {
  .article-item {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    display: inline-block;
    background: #ccc;
  }
  .page {
    text-align: center;
    margin-top: 50px;
  }
}
</style>
