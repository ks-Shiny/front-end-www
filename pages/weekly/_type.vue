<template>
    <div class="container">
        <div class="change-bar">
            <nuxt-link
                class="bar-item"
                :to="`/weekly/education`"
            >
                教育行业
            </nuxt-link>
            <nuxt-link
                class="bar-item"
                :to="`/weekly/profession`"
            >
                专业领域
            </nuxt-link>
        </div>
        <weekly-list :list="weeklyList" />
    </div>
</template>
<script>
import WeeklyList from '@/components/WeeklyList.vue';

export default {
    components: {
        WeeklyList,
    },
    async asyncData({ params, store }) {
        const weeklyList = store.state.weeklyData[params.type] || [];
        return { weeklyList };
    },
    transition: {
        name: 'slide-fade',
    },
};
</script>
<style lang="less">
.change-bar {
  height: 116px;
  border-bottom: 1px solid #262626;
  text-align: center;
  .bar-item {
    color: #888;
    font-size: 20px;
    line-height: 28px;
    display: inline-block;
    margin: 64px 45px 0px;
    &.nuxt-link-exact-active {
      color: #fff;
    }
  }
}
</style>
