/* eslint-disable vue/no-parsing-error */
<template>
    <div class="blog-flex">
        <div class="article-list">
            <section
                v-if="pageData.posts"
                class="list-detail"
            >
                <nuxt-link
                    v-for="(item, index) in pageData.posts"
                    :key="index"
                    class="article-item"
                    :to="`/blogdetail/${item.categoryType}/${item.name}`"
                >
                    <div class="article-left">
                        <div class="article-date">
                            {{ item.enDate }}
                        </div>
                        <div class="article-title">
                            {{ item.name }}
                        </div>
                        <p class="article-decoration">
                            {{ item.description }}
                        </p>
                    </div>
                    <img
                        v-if="item.mainImage"
                        :src="`/images/docs/${item.mainImage}`"
                        alt=""
                        class="article-img"
                    >
                </nuxt-link>
            </section>
            <section
                v-else
                class="list-no-data"
            >
                暂无数据
            </section>
            <section class="page">
                <Button
                    :disabled="currentPage == 1"
                    class="prev page-btn"
                    @click="handlePrev"
                >
                    <!-- eslint-disable-next-line vue/no-parsing-error -->
                    <
                </Button>
                <Button
                    v-for="item in totalPage"
                    :key="item"
                    class="page-btn"
                    :class="{ active: currentPage == item }"
                    @click="handlePage(item)"
                >
                    {{ item }}
                </Button>
                <Button
                    :disabled="currentPage == totalPage"
                    class="next page-btn"
                    @click="handleNext"
                >
                    >
                </Button>
            </section>
        </div>
        <section class="blog-category">
            <div class="title">
                文章分类
            </div>
            <ul class="category-list">
                <li>
                    <nuxt-link :to="`/blog/FE/1`">
                        前端开发
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/blog/UI/1`">
                        视觉研究
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/blog/BE/1`">
                        后端开发
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/blog/QA/1`">
                        QA测试
                    </nuxt-link>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
    name: 'BlogList',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
        pageData: {
            type: Object,
            default: () => ({
                prev: 0,
                next: 0,
                totalPage: 0,
                posts: [],
            }),
        },
        blogType: {
            type: String,
            default: 'FE',
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        totalPage: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        handleNext() {
            const page = this.pageData.next === 0 ? this.currentPage : this.pageData.next;
            this.handlePage(page);
        },
        handlePrev() {
            const page = this.pageData.prev === 0 ? 1 : this.pageData.prev;
            this.handlePage(page);
        },
        handlePage(page) {
            this.$emit('pageChange', page);
        },
    },
};
</script>
<style lang="less">
.list-no-data {
  text-align: center;
  margin: 50px auto;
}
.blog-flex {
  display: flex;
  .blog-category {
    width: 240px;
    background: #000;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 255px;
  }
  .category-list {
    list-style: none;
    li {
      border-bottom: 1px solid #262626;
      line-height: 22px;
      padding: 12px 0px;
      a {
        color: #888888;
      }
    }
  }
  .page {
    text-align: center;
    margin-top: 62px;
    margin-bottom: 63px;
  }
  .page-btn {
    background: transparent;
    margin-right: 10px;
    border-color: #d9d9d9;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 2px;
    &:hover {
      background: transparent;
      color: #fff;
      border-color: #fff;
    }
    &[disabled] {
      display: none;
    }
    &.active {
      color: #323941;
      background: #d9d9d9;
      border-color: #d9d9d9;
    }
  }
}
.article-list {
  flex: 1;
  .list-detail {
    width: 100%;
  }
  .article-item {
    padding: 20px;
    border-bottom: 1px solid #262626;
    display: flex;
    align-items: center;
    height: 150px;
    box-sizing: border-box;
    &:hover {
      background: #000;
    }
    a {
      text-decoration: none;
      color: #fff;
      transition-property: all;
      transition-duration: 0.4s;
    }
    .article-left {
      flex: 1;
    }
    .article-date {
      color: #a6a6a6;
      font-size: 16px;
      line-height: 22px;
    }
    .article-title {
      margin-top: 4px;
      line-height: 28px;
      margin-bottom: 12px;
      font-size: 20px;
      color: #fff;
      transition: color 0.3s;
    }
    .article-decoration {
      color: #888888;
      font-size: 13px;
      line-height: 22px;
      max-height: 66px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .article-img {
      max-width: 106px;
      max-height: 80px;
      margin-left: 126px;
      display: inline-block;
    }
  }
}
</style>
