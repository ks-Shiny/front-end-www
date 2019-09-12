<template>
    <div>
        详情
        <div v-html="$md.render(model)" />
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
    asyncData({ params }) {
        if (process.server) {
            const data = {};
            const fs = require('fs');
            // 读取本地文件
            const raw = fs
                .readFileSync(
                    `./static/article/${params.type}/${params.name}.md`,
                    'utf8',
                )
                .toString();
            data.model = raw;
            return data;
        }
        return false;
    },
};
</script>

<style lang="less"></style>
