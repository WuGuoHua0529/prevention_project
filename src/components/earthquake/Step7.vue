<template>
  <div class="step7_container">
    <div class="step7_info">
      <div class="step7_number">7</div>
      <div class="step7_title">進行臨震行為與避難練習</div>
      <div class="step7_text">
        尋找家中適合避難的位置，如堅固的桌子底下，並實際進行臨震行為的演練。
      </div>
    </div>
    <div class="step7_img">
      <img
        src="@assets/img/earthquake/step7/Frame.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step7'
}
</script>

<style scoped>
.step7_container {
  margin: 300px auto 0 auto;
  width: 1100px;
  display: flex;
}

.step7_container .step7_img {
  margin-left: 200px;
}

.step7_container .step7_img img {
  width: 450px;
}

.step7_container .step7_info {
  width: 420px;
  margin-left: 50px;
}

.step7_container .step7_number {
  margin-top: -100px;
  font-weight: 500;
  font-size: 220px;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 4px #50afbd;
  color: #ffffff;
}

.step7_container .step7_title {
  margin-top: -25px;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: #50afbd;
}

.step7_container .step7_text {
  margin-top: 26px;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: 0.02em;
  color: #5e5e5e;
}
</style>