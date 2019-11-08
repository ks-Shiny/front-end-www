<template>
    <div class="index-wrapper">
        <div class="header-wrapper">
            <div class="container">
                <div class="top-bar clearfix">
                    <div class="logo">
                        logo
                    </div>
                    <div class="menu-wrapper">
                        <nuxt-link
                            class="nav-item"
                            :to="`/`"
                        >
                            首页
                        </nuxt-link>
                        <nuxt-link
                            class="nav-item"
                            :to="`/page/share/1`"
                        >
                            技术分享
                        </nuxt-link>
                        <nuxt-link
                            class="nav-item"
                            :to="`/page/weekly/1`"
                        >
                            技术周刊
                        </nuxt-link>
                        <nuxt-link
                            class="nav-item"
                            :to="`/about`"
                        >
                            关于我们
                        </nuxt-link>
                    </div>
                </div>
                <div class="name-wrapper clearfix">
                    <div class="left">
                        这是一段描述<br>dd呀。。。。。
                    </div>
                    <div class="right">
                        <div class="animated-circles animated">
                            <div class="center" />
                            <div class="circle c-1" />
                            <div class="circle c-2" />
                            <div class="circle c-3" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div>我是首页呀</div> -->
        </div>
        <div class="product-wrapper">
            <div class="container block-body">
                <div class="block-title">
                    <div class="name">
                        xxxxxxxxxxxx
                    </div>
                    <div class="block-desc">
                        提供设计工具、建站平台、设计资产等资源
                    </div>
                </div>
                <div class="list-row">
                    <div class="row-item">
                        <img
                            src="../static/images/34.png"
                            alt=""
                        >
                        <p>1234</p>
                    </div>
                    <div class="row-item">
                        <img
                            src="../static/images/56.png"
                            alt=""
                        >
                        <p>5678</p>
                    </div>
                    <div class="row-item">
                        <img
                            src="../static/images/78.png"
                            alt=""
                        >
                        <p>7890</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'index',
};
</script>

<style lang="less">
html {
  .index-wrapper {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
    max-width: 1240px;
    margin: 0 auto;
  }
  .header-wrapper {
    background-color: @main_intro;
    border-radius: 5px 5px 0px 0px;
    padding-top: 60px;
    padding-bottom: 70px;
    .top-bar {
      .logo {
        float: left;
        color: #fff;
        font-size: 20px;
      }
      .menu-wrapper {
        float: right;
        a.nav-item {
          float: left;
          padding: 30px 20px;
          display: block;
          line-height: 60px;
          color: #fff;
          &.nuxt-link-exact-active {
            &:after {
              opacity: 1;
            }
          }
          &:after {
            content: "";
            display: block;
            height: 4px;
            width: 100%;
            opacity: 0;
            background: #ffffff;
          }
        }
      }
    }
  }
  .name-wrapper {
    .left {
      float: left;
      font-size: 65px;
      line-height: 65px;
      color: #fff;
      font-weight: 700;
      margin-left: 140px;
      margin-top: 50px;
    }
    .right {
      float: right;
    }
    .animated-circles {
      position: relative;
      height: 248px;
      width: 600px;
      &.animated {
        .c-1 {
          animation: 6000ms scaleToggleOne forwards infinite;
        }
        .c-2 {
          animation: 6500ms scaleToggleTwo forwards infinite;
        }
        .c-3 {
          animation: 7000ms scaleToggleThree forwards infinite;
        }
      }
      .center {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #84e6ca;
        position: absolute;
        z-index: 10;
        left: 50%;
        margin-left: -35px;
        top: 50%;
        margin-top: -35px;
      }
      .circle {
        background: rgba(247, 247, 248, 0.25);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -35px;
        top: 50%;
        margin-top: -35px;
      }
    }
  }
  .product-wrapper {
    background: #fff;
  }
  .container {
    width: 1220px;
    margin: 0 auto;
  }
  .block-body {
    padding: 56px 0px;
    .block-title {
      margin-bottom: 48px;
      font-weight: 500;
      color: #000;
      text-align: center;
    }
    .name {
      font-size: 36px;
      margin-bottom: 12px;
    }
    .block-desc {
      font-size: 16px;
    }
    .list-row {
      display: flex;
      .row-item {
        flex: 1;
        text-align: center;
        img {
          height: 100px;
          margin: 25px;
        }
        p {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 12px;
          color: #000;
        }
      }
    }
  }
  .clearfix {
    &:before,
    &:after {
      display: table;
      content: " ";
      clear: both;
    }
  }
  @keyframes scaleToggleOne {
    from {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    50% {
      transform: scale(2.5);
      -webkit-transform: scale(2.5);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
  @keyframes scaleToggleTwo {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    20% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    60% {
      transform: scale(2.5);
      -webkit-transform: scale(2.5);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
  @keyframes scaleToggleThree {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    33% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    66% {
      transform: scale(2.5);
      -webkit-transform: scale(2.5);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
}
</style>
