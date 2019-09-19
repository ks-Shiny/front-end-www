<template>
    <header class="navbar">
        <div class="nav container">
            <div class="nav-menu">
                <nuxt-link
                    class="nav-item"
                    :to="`/`"
                >
                    首页
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :to="`/page/blog/1`"
                >
                    技术分享
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :to="`/page/week/1`"
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
.navbar {
  height: @nav-height;
  width: 100%;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid #eee;
  .nav-menu {
    a.nav-item {
      display: inline-block;
      padding: 0 20px;
      height: 100%;
      line-height: @nav-height;
      font-weight: 400;
      font-family: "Yanone Kaffeesatz", "方正姚体", Arial, Helvetica, sans-serif;
      text-decoration: none;
      line-height: @nav-height;
      font-size: 16px;
      position: relative;
      color: #333;
      &:hover {
        color: @main;
      }
      &.nuxt-link-exact-active:after {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: @main;
        //#6190e8
      }
    }
  }
  .nav-right {
    float: right;
  }
}
</style>
