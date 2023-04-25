<template>
  <!-- container -->
  <container></container>

  <!-- Step title -->
  <div class="step_title">防災可以這麼做</div>

  <!-- step1 -->
  <step1></step1>

  <!-- step2 -->
  <step2></step2>

  <!-- step3 -->
  <step3></step3>

  <!-- step4 -->
  <step4></step4>

  <!-- step5 -->
  <step5></step5>

  <!-- step6 -->
  <step6></step6>

  <!-- step7 -->
  <step7></step7>

  <!-- step8 -->
  <step8></step8>
</template>

<script>
import Container from "../components/Container.vue";
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step3 from "../components/Step3.vue";
import Step4 from "../components/Step4.vue";
import Step5 from "../components/Step5.vue";
import Step6 from "../components/Step6.vue";
import Step7 from "../components/Step7.vue";
import Step8 from "../components/Step8.vue";

export default {
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
  },
};
</script>

<style>
/* step_title */
.step_title {
  font-weight: 700;
  font-size: 78px;
  letter-spacing: 0.05em;
  color: #5e5e5e;
  text-align: center;
  margin-top: 150px;
}
</style>