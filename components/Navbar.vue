<template>
    <header class="navbar">
        <div class="container">
            <div class="logo">
                <a href="/"><img
                    src="/images/logo@2x.png"
                    alt=""
                ></a>
            </div>
            <div class="nav-menu">
                <nuxt-link
                    class="nav-item"
                    :to="`/`"
                >
                    首页
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :class="{ active: $router.currentRoute.name === 'blog-type-page' }"
                    :to="`/blog/all/1`"
                >
                    博客
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :class="{ active: $router.currentRoute.name === 'weekly-type' }"
                    :to="`/weekly/education`"
                >
                    技术周刊
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :class="{ active: $router.currentRoute.name === 'aboutus' }"
                    :to="`/aboutus`"
                >
                    团队介绍
                </nuxt-link>
                <nuxt-link
                    class="nav-item"
                    :class="{ active: $router.currentRoute.name === 'joinus' }"
                    :to="`/joinus`"
                >
                    加入团队
                </nuxt-link>
            </div>
        </div>
    </header>
</template>
<style lang="less">
.navbar {
  height: @nav-height;
  width: 100%;
  z-index: 2;
  box-shadow: 0px 1px 0px 0px rgba(38, 38, 38, 1);
  .logo {
    float: left;
    margin-top: 27px;
    margin-left: 39px;
    img {
      width: 76px;
    }
  }
  .nav-menu {
    display: flex;
    align-items: center;
    height: @nav-height;
    float: right;
    a.nav-item {
      margin: 0 30px;
      display: inline-block;
      text-align: center;
      height: 34px;
      line-height: 34px;
      font-weight: 400;
      text-decoration: none;
      font-size: 16px;
      position: relative;
      color: #fff;
      min-width: 86px;
      padding: 0px 10px;
      border-radius: 17px;
      box-sizing: border-box;
      &.active {
        background-color: #2f2f2f;
      }
    }
  }
}
</style>
