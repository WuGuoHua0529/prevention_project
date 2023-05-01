<template>
  <Container />
  <div class="title_earthquake">防災可以這麼做</div>
  <div class="content_earthquake">
    <Step1 />
    <Step2 />
    <Step3 />
    <Step4 />
    <Step5 />
    <Step6 />
    <Step7 />
    <Step8 />
  </div>
</template>

<script>
import Container from "@components/earthquake/Container.vue";
import Step1 from "@components/earthquake/Step1.vue";
import Step2 from "@components/earthquake/Step2.vue";
import Step3 from "@components/earthquake/Step3.vue";
import Step4 from "@components/earthquake/Step4.vue";
import Step5 from "@components/earthquake/Step5.vue";
import Step6 from "@components/earthquake/Step6.vue";
import Step7 from "@components/earthquake/Step7.vue";
import Step8 from "@components/earthquake/Step8.vue";
// import Footer from "@components/layout/Footer.vue";

export default {
  name: "Earthquake",
  components: {
    Container,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    // Footer
  },
};
</script>

<style lang="scss">
.content_earthquake {
  // padding: 0 10%;
}

.step_container {
  margin: 0 0 15% 0;
  &.px-10 {
    padding: 0 10%;
  }
  .step_img {
    margin: auto 0;
    img {
      width: 100%;
    }
  }

  .step_content {
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (min-width: 768px) {
      text-align: initial;
    }
  }

  .step_number {
    font-family: "Noto Sans TC";
    font-weight: 500;
    color: #ffffff;
    font-size: 50px;
    -webkit-text-stroke: 2px #50afbd;

    @media (min-width: 768px) {
      font-size: 220px;
      -webkit-text-stroke: 4px #50afbd;
    }
  }

  .step_title {
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.05em;
    color: #50afbd;
  }

  .step_text {
    font-size: 16px;
    line-height: 156%;
    letter-spacing: 0.02em;
    color: #5e5e5e;
    max-width: 600px;
    padding: 20px 0;
  }

  .step_web {
    position: relative;
    width: 219px;
    height: 34px;
    background-color: white;
    border-radius: 17px;
    margin: 0 auto;
    @media (min-width: 768px) {
      margin: 0;
    }
    &::before {
      content: "";
      width: 24px;
      height: 24px;
      background-image: url(@assets/img/earthquake/idea.png);
      position: absolute;
      top: 2px;
      left: -28px;
    }

    a {
      position: absolute;
      top: 9px;
      left: 15px;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.1em;
    }

    img {
      position: absolute;
      top: 14px;
      left: 192px;
    }
  }
}
@media screen and (min-width: 480px) {
  .title_earthquake {
    font-weight: bold;
    font-size: 34px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
    text-align: center;
    margin: 8% 0;
  }
}
@media screen and (max-device-width: 480px) {
  .title_earthquake {
    height: 68px;
    font-weight: bold;
    font-size: 20px;
    line-height: 68px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
    padding: 24px auto;
    text-align: center;
    // background-color: #dcebed;
  }
}
</style>