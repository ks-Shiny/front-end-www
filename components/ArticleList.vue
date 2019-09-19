<template>
    <div class="article-list">
        <section class="list">
            <div
                v-for="item in list"
                :key="item.id"
                class="article-item"
            >
                <nuxt-link :to="`/detail/${$route.params.type}/${item.name}`">
                    <div class="article-title">
                        {{ item.title }}
                    </div>
                    <p class="article-decoration">
                        {{ item.description }}
                    </p>
                </nuxt-link>
            </div>
        </section>
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
import { mapState } from 'vuex';

export default {
    name: 'ArticleList',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
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
            return this.dataConfig.pageSize || 15;
        },
    },
    methods: {
        handlePrev() {
            const page = this.currentPage - 1 > 0 ? this.currentPage - 1 : 1;

            this.$router.push(`/page/${this.$route.params.type}/${page}`);
        },

        handleNext() {
            const page = this.currentPage + 1 > this.totalPage
                ? this.currentPage
                : this.currentPage + 1;

            this.$router.push(`/page/${this.$route.params.type}/${page}`);
        },
    },
};
</script>
<style lang="less">
.article-list {
  padding: 0 40px;
  .article-item {
    padding-bottom: 20px;
    border-bottom: 1px dashed #dfdfdf;
    &:hover {
      .article-title {
        color: @main;
      }
    }
    a {
      text-decoration: none;
      color: @main;
      transition-property: all;
      transition-duration: 0.4s;
    }
    .article-title {
      padding-top: 20px;
      margin-bottom: 12px;
      font-size: 30px;
      font-weight: bold;
      color: #030303;
      transition: color 0.3s;
    }
    .article-decoration {
      margin: 0;
      color: #767676;
      font-size: 16px;
    }
  }
  .page {
    text-align: center;
    margin-top: 50px;
  }
  .page-btn {
  }
}
</style>
