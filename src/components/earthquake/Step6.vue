<template>
  <div class="step6_container">
    <div class="step6_img">
      <img src="@assets/img/earthquake/step6/step6_img.png" />
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
  name: "Step6",
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 480px) {
  .step6_container {
    margin: 400px auto 0 auto;
    width: 1100px;
    display: flex;
    .step6_img img {
      width: 700px;
    }
    .step6_info {
      width: 420px;
      margin-left: 100px;
      margin-top: 50px;
      .step6_number {
        margin-top: -100px;
        margin-left: -8px;
        font-weight: 500;
        font-size: 220px;
        letter-spacing: 0.05em;
        -webkit-text-stroke: 4px #50afbd;
        color: #ffffff;
      }
      .step6_title {
        margin-top: -25px;
        font-weight: 700;
        font-size: 28px;
        letter-spacing: 0.05em;
        color: #50afbd;
      }
      .step6_text {
        margin-top: 26px;
        font-size: 16px;
        line-height: 156%;
        letter-spacing: 0.02em;
        color: #5e5e5e;
      }
    }
  }
}
@media screen and (max-device-width: 480px) {
  .step6_container {
    width: 100vw;
    height: 380px;
    display: flex;
    flex-direction: column-reverse;
    padding: 0 14vw;
    text-align: center;
    background-color: #f5f5f5;
    .step6_number {
      font-family: "Noto Sans TC";
      font-weight: bold;
      font-size: 48px;
      line-height: 70px;
      letter-spacing: 0.05em;
      color: #ffffff;
      -webkit-text-stroke: 1px #50afbd;
    }
    .step6_title {
      font-family: "Noto Sans TC";
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.05em;
      color: #50afbd;
    }
    .step6_text {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-size: 12px;
      line-height: 146%;
      letter-spacing: 0.02em;
      color: #5e5e5e;
      margin-top: 12px;
    }
    .step6_img img {
      width: 290px;
      margin-top: 30px;
    }
  }
}
</style>