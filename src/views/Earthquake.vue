<template>
  <Container />
  <div class="step_title">防災可以這麼做</div>
  <Step1 />
  <Step2 />
  <Step3 />
  <!-- <Step3_2 /> -->
  <Step4 />
  <Step5 />
  <Step6 />
  <Step7 />
  <Step8 />
  <Footer />
</template>

<script>
import Container from "@components/earthquake/Container.vue";
import Step1 from "@components/earthquake/Step1.vue";
import Step2 from "@components/earthquake/Step2.vue";
import Step3 from "@components/earthquake/Step3.vue";
// import Step3_2 from "@components/earthquake/Step3_2.vue";
import Step4 from "@components/earthquake/Step4.vue";
import Step5 from "@components/earthquake/Step5.vue";
import Step6 from "@components/earthquake/Step6.vue";
import Step7 from "@components/earthquake/Step7.vue";
import Step8 from "@components/earthquake/Step8.vue";
import Footer from "@components/layout/Footer.vue";

export default {
  name: "Earthquake",
  components: {
    Container,
    Step1,
    Step2,
    Step3,
    // Step3_2,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Footer
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 480px) {
  .step_title {
    font-weight: bold;
    font-size: 78px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
    text-align: center;
    margin: 120px auto;
  }
}
@media screen and (max-device-width: 480px) {
  .step_title {
    height: 68px;
    font-weight: bold;
    font-size: 20px;
    line-height: 68px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
    padding: 24px auto;
    text-align: center;
    background-color: #dcebed;
  }
}
</style>