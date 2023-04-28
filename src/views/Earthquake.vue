<template>
  <Container />
  <div class="step_title">防災可以這麼做</div>
  <Step1 />
  <Step2 />
  <Step3 />
  <Step4 />
  <Step5 />
  <Step6 />
  <Step7 />
  <Step8 />
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

export default {
  name: 'Earthquake',
  components: {
    Container,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8
  },
};
</script>

<style>
.step_title {
  font-weight: 700;
  font-size: 78px;
  letter-spacing: 0.05em;
  color: #5e5e5e;
  text-align: center;
  margin-top: 150px;
}
</style>