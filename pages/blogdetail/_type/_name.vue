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

        <div
            class="markdow-part"
            v-html="html"
        />
        <div
            v-if="pdfUrl"
            class="pdf-outer"
        >
            <iframe
                :src="`/third-party/pdfjs/web/viewer.html?file=${pdfUrl}`"
                width="100%"
                height="100%"
                scrolling="no"
            >
                您的浏览器不支持PDF阅读
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ params, error }) {
        let fileContent;
        try {
            fileContent = await import(
                /* eslint comma-dangle: ["error", "never"] */
                `~/docs/blog/${params.type}/${params.name}.md`
            );
        } catch (err) {
            if (err.code === 'MODULE_NOT_FOUND') {
                return error({ statusCode: 404, message: 'noeeet found' });
            }
        }
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
            type: params.type,
            pdfUrl: attr.pdfname
                ? `http://localhost:3333/pdf/${attr.pdfname}.pdf`
                : ''
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
  color: #fff;
  width: 80%;
  margin: 20px auto;
  min-width: 980px;
  .elevate-cover {
    font-size: 14px;
    .title {
      font-size: 36px;
      font-weight: 500;
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
.markdow-part {
  padding: 20px 0;
  font-size: 16px;
  line-height: 1.7;

  h2 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  h3 {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 24px;
    border-radius: 4px;
    background-color: #f6f8fa;
    overflow-x: scroll;
    display: block;
    margin-bottom: 50px;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    font-size: 14px;
    padding: 10px 15px;
  }
}
.pdf-outer {
  min-height: 500px;
  height: 500px;
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
