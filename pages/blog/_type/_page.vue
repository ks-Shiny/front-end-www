<template>
    <div class="container">
        <div class="category-nav">
            <div
                v-for="(value, key) in blogCate"
                :key="key"
                class="category-nav-item"
                :class="{ active: $route.params.type == key }"
            >
                <nuxt-link :to="`/blog/${key}/1`">
                    {{ value }}
                </nuxt-link>
            </div>
        </div>
        <blog-list
            :page-data="pageData"
            :current-page="currentPage"
            :total-page="totalPage"
            :blog-type="$route.params.type"
            @pageChange="handlePage"
        />
    </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';

export default {
    components: {
        BlogList,
    },
    data() {
        return {
            blogCate: {
                all: '全部文章',
                FE: '前端开发',
                UI: '视觉研究',
                BE: '后端开发',
                QA: 'QA测试',
            },
        };
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
        const typeData = store.state.blogCategoryData[params.type] || [];
        let data = {};
        if (typeData.length > 0) {
            // eslint-disable-next-line prefer-destructuring
            data = typeData[params.page - 1].data;
        }
        return { pageData: data };
    },
    validate({ params, store }) {
        const { page, type = '' } = params;
        const articleDetail = store.state.blogCategoryData[type];
        const totalPage = articleDetail.length || 1;
        if (store.state.blogCategory.indexOf(type) < 0) {
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
    methods: {
        handlePage(page) {
            this.$router.push(`/blog/${this.$route.params.type}/${page}`);
        },
    },
};
</script>

<style lang="less">
.category-nav {
  height: 110px;
  padding-top: 64px;
  padding-left: 40px;
  box-sizing: border-box;
  margin-bottom: 30px;
  border-bottom: 1px solid #262626;
  width: 1140px;
  .category-nav-item {
    display: inline-block;
    margin-right: 32px;
    font-size: 16px;
    line-height: 22px;
    &.active {
      a {
        color: #fff;
      }
    }
    a {
      color: #888;
    }
  }
}
</style>
