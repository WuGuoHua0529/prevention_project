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
        <a href="https://portal2.emic.gov.tw/FIS2_Develop/Masses"
          >災區親友現況查詢平台</a
        >
        <img src="../image/Group4.png" alt="" />
      </div>
    </div>
    <div class="step5_img">
      <img class="img_top" src="../image/Group-2.png" alt="" />
      <img class="img_left" src="../image/Group-1.png" alt="" />
      <img class="img_right" src="../image/Group拷貝.png" alt="" />
      <img class="img_center" src="../image/Group206.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    name:'Step5'
}
</script>

<style>
/* step5 */
.step5_container {
  margin: 0 auto;
  width: 1100px;
  display: flex;
  justify-content: space-between;
}

.step5_container .step5_number {
  font-weight: 500;
  font-size: 220px;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 4px #50afbd;
  color: #ffffff;
}

.step5_container .step5_info {
  width: 480px;
}

.step5_container .step5_title {
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: #50afbd;
}

.step5_container .step5_text1 {
  margin-top: 28px;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: 0.02em;
  color: #5e5e5e;
}

.step5_container .step5_tip {
  margin-top: 40px;
  margin-left: 28px;
  position: relative;
  width: 180px;
  height: 34px;
  background-color: white;
  border-radius: 17px;
}

.step5_container .step5_tip a {
  position: absolute;
  top: 9px;
  left: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.1em;
}

.step5_container .step5_tip img {
  position: absolute;
  top: 14px;
  left: 150px;
}

.step5_container .step5_tip::before {
  content: "";
  width: 24px;
  height: 24px;
  background-image: url(../image/idea\ 2.png);
  position: absolute;
  top: 2px;
  left: -28px;
}

.step5_container .step5_img {
  width: 593px;
  margin-top: 150px;
  margin-left: 150px;
  position: relative;
}

.step5_container .step5_img .img_top {
  position: absolute;
  top: 0;
  left: 170px;
}

.step5_container .step5_img .img_left {
  position: absolute;
  top: 335px;
  left: -25px;
}

.step5_container .step5_img .img_right {
  position: absolute;
  top: 335px;
  left: 352px;
}

.step5_container .step5_img .img_center {
  position: absolute;
  top: 247px;
  left: 158px;
}
</style>