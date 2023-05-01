<template>
  <div class="step5_container">
    <div class="step5_info">
      <div class="step5_number">5</div>
      <div class="step5_title">建立家人避難聯繫方式</div>
      <div class="step5_text1">
        地震後電話量可能過載，平時可先與家人討論災時連絡方式，可透過簡訊、LINE報平安，或用三角聯絡法，打給災區外電話較容易接通的親友。
        另外，也可利用消防e點通APP，進入親友協尋功能，即可使用災區親友現況查詢平台。
      </div>
      <div class="step5_tip">
        <a href="https://portal2.emic.gov.tw/FIS2_Develop/Masses">災區親友現況查詢平台</a>
        <img src="@assets/img/earthquake/nextArrow.png" />
      </div>
    </div>
    <div class="step5_img">
      <img
        class="img_top"
        src="@assets/img/earthquake/step5/step5_img1.png"
      />
      <img
        class="img_left"
        src="@assets/img/earthquake/step5/step5_img2.png"
      />
      <img
        class="img_right"
        src="@assets/img/earthquake/step5/step5_img3.png"
      />
      <img
        class="img_center"
        src="@assets/img/earthquake/step5/step5_line.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Step5",
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 480px) {
  .step5_container {
    margin: 0 auto;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    .step5_info {
      width: 480px;
      .step5_number {
        font-weight: 500;
        font-size: 220px;
        letter-spacing: 0.05em;
        -webkit-text-stroke: 4px #50afbd;
        color: #ffffff;
      }
      .step5_title {
        font-weight: 700;
        font-size: 28px;
        letter-spacing: 0.05em;
        color: #50afbd;
      }
      .step5_text1 {
        margin-top: 28px;
        font-size: 16px;
        line-height: 156%;
        letter-spacing: 0.02em;
        color: #5e5e5e;
      }
      .step5_tip {
        margin-top: 40px;
        margin-left: 28px;
        position: relative;
        width: 180px;
        height: 34px;
        background-color: white;
        border-radius: 17px;
        a {
          position: absolute;
          top: 9px;
          left: 15px;
          font-weight: 500;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: 0.1em;
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
        img {
          position: absolute;
          top: 14px;
          left: 150px;
        }
      }
    }
    .step5_img {
      width: 593px;
      margin-top: 150px;
      margin-left: 150px;
      position: relative;
      .img_top {
        position: absolute;
        top: 0;
        left: 170px;
      }
      .img_left {
        position: absolute;
        top: 335px;
        left: -25px;
      }
      .img_right {
        position: absolute;
        top: 335px;
        left: 352px;
      }
      .img_center {
        position: absolute;
        top: 247px;
        left: 158px;
      }
    }
  }
}
@media screen and (max-device-width: 480px) {
  .step5_container {
    width: 100vw;
    padding: 0 14vw;
    margin-top: 50px;
    background-color: #f5f5f5;
    .step5_info {
      text-align: center;
      .step5_number {
        font-family: "Noto Sans TC";
        font-weight: bold;
        font-size: 48px;
        line-height: 70px;
        letter-spacing: 0.05em;
        color: #ffffff;
        -webkit-text-stroke: 1px #50afbd;
      }
      .step5_title {
        font-family: "Noto Sans TC";
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #50afbd;
      }
      .step5_text1 {
        font-family: "Noto Sans TC";
        font-style: normal;
        font-size: 12px;
        line-height: 146%;
        letter-spacing: 0.02em;
        color: #5e5e5e;
        margin-top: 12px;
      }
      .step5_tip {
        width: 170px;
        height: 34px;
        background-color: white;
        border-radius: 17px;
        margin: 24px auto 0 auto;
        position: relative;
        a {
          // position: relative;
          font-size: 12px;
          line-height: 34px;
        }
        img {
          margin-left: 6px;
        }
        &::before {
          width: 24px;
          background-image: url(@assets/img/earthquake/idea.png);
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    .step5_img {
      width: 100%;
      height: 400px;
      position: relative;
      background-color: #f5f5f5;
      margin-top: 30px;
      .img_top {
        width: 40%;
        position: absolute;
        top: 30px;
        left: 90px;
      }
      .img_left {
        width: 40%;

        position: absolute;
        top: 200px;
        left: 0px;
      }
      .img_right {
        width: 40%;

        position: absolute;
        top: 200px;
        right: 0px;
      }
      .img_center {
        width: 40%;

        position: absolute;
        top: 160px;
        left: 90px;
      }
    }
  }
}
</style>