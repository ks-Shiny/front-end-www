<template>
    <div class="container index-bg">
        <div class="header-title container-inner">
            <h1 class="team-name">
                wdc-fe
            </h1>
            <div class="subtitle ">
                这是一段描述
            </div>
            <navbar />
        </div>
        <Layout>
            <Layout
                :style="{ padding: '20px 0px' }"
                class="container-inner"
            >
                <Content :style="{ background: '#fff' }">
                    <Layout>
                        <Layout>
                            <Content :style="{ minHeight: '280px', background: '#fff' }">
                                <nuxt />
                            </Content>
                        </Layout>
                        <Sider :style="{ background: '#fff', marginLeft: '20px' }">
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
                                        <li>
                                            <a href="">
                                                <i class="ivu-icon ivu-icon-logo-we" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Sider>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">
                2019&copy;wdc-fe
            </Footer>
        </Layout>
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
@primary-color : #3e74ae;
.pull-left {
  float: left;
}
.clearfix {
  &:before,
  &:after {
    display: table;
    content: " ";
  }
}
a {
  outline: none;
  transition: all 0.14s ease 0s;
}
.header-title {
  // text-align: center;
  color: #fff;
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  .container-inner {
    max-width: 1180px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
  }
}
.index-bg {
  background: #16171b;
  //    background: url(../static/images/bg.jpg) no-repeat top center fixed;
  // background-size: 100% ;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
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
    border-bottom: 3px solid @primary-color;
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
