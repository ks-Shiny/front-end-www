<template>
    <header class="navbar">
        <div class="nav">
            <div class="nav-menu">
                <nuxt-link
                    class="nav-item"
                    :to="`/`"
                >
                    首页
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :to="`/article/blog/1`"
                >
                    技术分享
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :to="`/article/week/1`"
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
    </header>
</template>
<style lang="less">
@nav-height : 52px;
.navbar {
  width: 100%;
  top: 0;
  z-index: 2;
  // border-top: 2px solid black;
  // border-bottom: 1px solid #f1f1f1;
  // background-color: #fff;
  // background: linear-gradient(120deg, #7f70f5, #0ea0ff);
  .nav {
    max-width: 1344px;
    height: @nav-height;
    // padding: 0 15px;
  }
  .nav-menu {
    a.nav-item {
      background: #060608;
      display: inline-block;
      margin: 0 -2px 0 0;
      padding: 0 20px;
      height: 100%;
      color: #fff;
      font-weight: 400;
      font-family: "Yanone Kaffeesatz", "方正姚体", Arial, Helvetica, sans-serif;
      text-decoration: none;
      // text-transform: uppercase;
      // line-height: 50px;
      // color: #fff;
      // font-weight: bolder;
      line-height: @nav-height;
      font-size: 16px;
      // margin-left: 5px;
      &.nuxt-link-exact-active {
        background: #3e74ae;
      }
    }
  }
  .nav-right {
    float: right;
  }
}
</style>
