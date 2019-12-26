<template>
    <div class="about">
        <div class="about-banner" />
        <div class="about-flex">
            <div class="about-flex-item">
                <div class="title">
                    关于「Tech Center」
                </div>
                <p>
                    「Tech
                    Center」是隶属于北京伟东云教育旗下，专注IP及教育内容力构建与发展，是集产品内容开发，内容营销，IP商业化拓展，体验设计等能力为一体的中台技术团队。
                </p>
                <p>
                    成员由资深开发工程师，内容创作者，视觉设计师，技术工程师，内容营销策划，内容商务等成员组成。
                </p>
            </div>
            <div class="about-flex-item">
                <div class="title">
                    我们的目标
                </div>
                <p>
                    作为教育领域的先驱者，从技术实践等多方面领域，集互联网行业精英人才，依托基础教育资源，构建技术壁垒，钻研前沿技术，为最终实现改变教育模式，创新构建新型教育模式，提供更加优质教育体验而努力。
                </p>
            </div>
        </div>
        <div class="about-logo">
            <p class="slogan">
                凡事有结果，事事有回音
            </p>
        </div>
    </div>
</template>
<style lang="less">
.about {
  .about-banner {
    width: 100%;
    height: 450px;
    background: purple;
    margin-bottom: 100px;
    .sec-body {
      color: #333;
      font-size: 16px;
    }
  }
  .about-flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
    .about-banner {
      margin-bottom: 60px;
    }
    .about-flex-item {
      width: 620px;
      color: #fff;
    }
    .title {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 14px;
    }
    p {
      font-size: 14px;
      line-height: 26px;
    }
  }
  .slogan {
    font-size: 28px;
    text-align: center;
    margin: 18px auto 38px;
  }
}
</style>
