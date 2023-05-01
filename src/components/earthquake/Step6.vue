<template>
  <div class="step6_container">
    <div class="step6_img">
      <img
        src="@assets/img/earthquake/step6/Group拷貝2.png"
        alt=""
      />
    </div>
    <div class="step6_info">
      <div class="step6_number">6</div>
      <div class="step6_title">確認避難路線與地點</div>
      <div class="step6_text">
        地與家人討論震後避難地點與路線，並實際走一次，查看哪邊可能受阻及可能花費的時間，選定兩條路線較保險。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step6"
}
</script>

<style scoped>
.step6_container {
  margin: 400px auto 0 auto;
  width: 1100px;
  display: flex;
}

.step6_container .step6_img img {
  width: 700px;
}

.step6_container .step6_info {
  width: 420px;
  margin-left: 100px;
  margin-top: 50px;
}

.step6_container .step6_number {
  margin-top: -100px;
  margin-left: -8px;
  font-weight: 500;
  font-size: 220px;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 4px #50afbd;
  color: #ffffff;
}

.step6_container .step6_title {
  margin-top: -25px;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: #50afbd;
}

.step6_container .step6_text {
  margin-top: 26px;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: 0.02em;
  color: #5e5e5e;
}
</style>