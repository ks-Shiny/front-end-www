<template>
    <div class="default-page">
        <navbar />
        <Layout :style="{ padding: '0px 0px' }">
            <Content
                class="container"
                :style="{ minHeight: '600px' }"
            >
                <nuxt />
            </Content>
        </Layout>
        <Footer class="footer-part">
            © Tech Center ALL RIGHTS RESERVED.
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
  text-align: center;
  border-top: 1px solid #262626;
  color: #a6a6a6;
  font-size: 12px;
}
</style>
