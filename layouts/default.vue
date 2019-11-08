<template>
    <div class="default-page">
        <navbar />

        <Layout :style="{ padding: '0px 0px' }">
            <Content
                :style="{ background: '#fff', padding: '20px' }"
                class="container"
            >
                <Layout>
                    <Layout>
                        <Content :style="{ minHeight: '280px', background: '#fff' }">
                            <nuxt />
                        </Content>
                    </Layout>
                    <Sider :style="{ background: '#fff' }">
                        <!-- 联系我们 -->
                        <div class="widget-wrap">
                            <div class="widget-title">
                                联系我们
                            </div>
                            <div class="widget">
                                <ul class="clearfix widget-social-icons">
                                    <li>
                                        <a href="">
                                            <i class="ivu-icon ivu-icon-logo-github" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Sider>
                </Layout>
            </Content>
        </Layout>
        <Footer class="footer-part">
            Designed by wdc-fe
        </Footer>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
    components: {
        Navbar,
    },
};
</script>

<style lang="less">
.default-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer-part {
  background: #f8f8f8;
  text-align: center;
  border-top: 1px solid #eee;
}
// @primary-color : #3e74ae;
.header-title {
  padding-top: 30px;
  .team-name {
    font-size: 36px;
    font-weight: normal;
  }
  .subtitle {
    font-size: 18px;
    font-weight: normal;
    color: #999;
  }
}

.links {
  padding-top: 15px;
}
// 右侧
.widget-wrap {
  .widget-title {
    margin: 30px 0;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 -1px;
    display: inline-block;
    line-height: 40px;
    border-bottom: 3px solid @main;
  }
  .widget {
    margin: 0 0 30px;
    color: #777;
    background: transparent;
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: #d6d6d6;
    ul {
      margin: 0 0 20px;
      padding: 0;
      list-style: none;
    }
  }
  .widget-social-icons li {
    float: left;
    margin: 15px 10px 0 0;
    padding: 0;
    text-align: center;
    border: none;
    width: 40px;
    height: 40px;
    background: #060608;
    a {
      display: block;
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>
