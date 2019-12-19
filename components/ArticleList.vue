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
        ...mapState(['docType']),
        pageData() {
            const { type } = this.$route.params;
            const { page } = this.$route.params;
            return this.$store.state[type][page] || {};
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
}
</style>
