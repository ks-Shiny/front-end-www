<template>
    <div class="article-detail">
        <div class="intro">
            <div class="elevate-cover">
                <div>
                    <span class="date">{{ date }}-{{ author }}</span>
                    <h1 class="title">
                        {{ title }}
                    </h1>
                    <p class="description">
                        {{ description }}
                    </p>
                </div>
                <div class="img">
                    <img :src="`/images/${type}/${name}/_main.jpg`">
                </div>
            </div>
        </div>

        <div v-html="html" />
    </div>
</template>

<script>
export default {
    validate({ params, store }) {
        const { type = '', name = '' } = params;
        const articleDetail = store.state[type];
        if (store.state.articleType.indexOf(type) < 0) {
            return false;
        }
        if (articleDetail.files.indexOf(name) < 0) {
            return false;
        }
        return true;
    },
    async asyncData({ params }) {
        const fileContent = await import(
            /* eslint comma-dangle: ["error", "never"] */
            `~/static/article/${params.type}/${params.name}.md`
        );
        const attr = fileContent.attributes;
        const { html } = fileContent;

        return {
            title: attr.title,
            author: attr.author,
            date: attr.date,
            description: attr.description,
            html,
            noMainImage: attr.noMainImage,
            name: attr.name,
            type: params.type
        };
    },
    head() {
        return {
            title: this.title
        };
    },
    transition: {
        name: 'slide-fade'
    }
};
</script>

<style lang="less">
.article-detail {
  .elevate-cover {
    color: #767676;
    font-size: 14px;
    .title {
      font-size: 36px;
      font-weight: 500;
      color: #030303;
      margin-bottom: 12px;
    }
    .img-cover {
      line-height: 0;
    }
    img {
      max-width: 100%;
    }
  }
  .description {
    margin: 0;
    opacity: 0;
    animation: fadeIn 0.5s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
