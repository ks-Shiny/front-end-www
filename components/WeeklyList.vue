<template>
    <div class="weekly-list clearfix">
        <section class="list">
            <div
                v-for="item in list"
                :key="item.id"
                class="weekly-item"
            >
                <nuxt-link :to="`/weeklydetail/${item.categoryType}/${item.name}`">
                    <div class="weekly-cover" />
                    <div class="weekly-detail">
                        <div class="date">
                            {{ item.enDate }}
                        </div>
                        <div class="title">
                            {{ item.name }}
                        </div>
                        <div class="desc">
                            {{ item.description }}
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'WeeklyList',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
<style lang="less">
.weekly-list {
  width: 100%;
  overflow: hidden;
}
.weekly-list .list {
  margin-right: -70px;
  .weekly-item {
    width: 420px;
    margin: 40px 70px 40px 0px;
    float: left;
    .weekly-cover {
      height: 300px;
      background: url(/images/weekly.png) no-repeat;
      margin-bottom: 20px;
    }
    .weekly-detail {
      .date {
        color: #a6a6a6;
        font-size: 16px;
        line-height: 22px;
      }
      .title {
        color: #fff;
        font-size: 20px;
        line-height: 28px;
        margin: 4px auto 12px 0px;
      }
      .desc {
        color: #888;
        font-size: 13px;
        line-height: 22px;
        max-height: 66px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
