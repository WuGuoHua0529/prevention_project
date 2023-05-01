<template>
  <div class="step4_container">
    <div class="step4_number">4</div>
    <div class="step4_info">
      <div class="step4_title">準備外出避難防災包</div>
      <div class="step4_text">
        防災包是外出避難時攜帶，裝放有助於延續生命或促進生活便利的物品，可按需求與季節選帶，放置於家中玄關處以方便外出拿取。
      </div>
    </div>
  </div>

  <div class="step4_circles">
    <div class="circle_1">
      <p class="circle_title">食物</p>
      <img
        class="cookies1 move1"
        src="@assets/img/earthquake/step4/RORBVO_2_.png"
        alt=""
      />
      <img
        class="cookies2 move3"
        src="@assets/img/earthquake/step4/E9yE29_2_.png"
        alt=""
      />
      <p class="cookies_text">體積小熱量高的巧克餅、餅乾</p>
      <img
        class="water1 move2"
        src="@assets/img/earthquake/step4/KUISSN_2_.png"
        alt=""
      />
      <img
        class="water2 move4"
        src="@assets/img/earthquake/step4/CStUGb_2_.png"
        alt=""
      />
      <p class="water_text">飲用水</p>
    </div>
    <div class="circle_2">
      <p class="circle_title">人生安全</p>
      <img
        class="phone move1"
        src="@assets/img/earthquake/step4/IyhVEp_2_.png"
        alt=""
      />
      <p class="phone_text">手機</p>
      <img
        class="light1 move3"
        src="@assets/img/earthquake/JaHQae_2_.png"
        alt=""
      />
      <img
        class="light2 move2"
        src="@assets/img/earthquake/step4/u672tY_2_.png"
        alt=""
      />
      <p class="light_text">掛頸燈、頭燈、手電筒</p>
      <img
        class="battery move4"
        src="@assets/img/earthquake/step4/lSO0fI_2_.png"
        alt=""
      />
      <p class="battery_text">行動電源</p>
      <img
        class="whistle move2"
        src="@assets/img/earthquake/step4/_x38_jraR9_2_.png"
        alt=""
      />
      <p class="whistle_text">哨子</p>
      <img
        class="drug1 move4"
        src="@assets/img/earthquake/_x34_3nlcX_2_.png"
        alt=""
      />
      <img
        class="drug2 move2"
        src="@assets/img/earthquake/Group1.png"
        alt=""
      />
      <p class="drug_text">隨身急救包、藥物</p>
      <img
        class="gear1 move1"
        src="@assets/img/earthquake/step4/Hpimgr_2_.png"
        alt=""
      />
      <img
        class="gear2 move3"
        src="@assets/img/earthquake/step4/UW6fuu_2_.png"
        alt=""
      />
      <p class="gear_text">雨具</p>
    </div>
    <div class="circle_3">
      <p class="circle_title">資訊蒐集</p>
      <img
        class="map move2"
        src="@assets/img/earthquake/step4/iN060x_2_.png"
        alt=""
      />
      <p class="map_text">避難地圖</p>
      <img
        class="photo move4"
        src="@assets/img/earthquake/step4/_x38_EXzcG_2_.png"
        alt=""
      />
      <p class="photo_text">家人照片</p>
      <img
        class="pen move1"
        src="@assets/img/earthquake/step4/_x31_QZjty_2_.png"
        alt=""
      />
      <p class="pen_text">書寫工具(紙、筆)</p>
    </div>
    <div class="circle_4">
      <p class="circle_title">衛生清潔</p>
      <img
        class="cloth1 move3"
        src="@assets/img/earthquake/step4/sokS9B_2_.png"
        alt=""
      />
      <img
        class="cloth2 move1"
        src="@assets/img/earthquake/step4/ViuWam_2_.png"
        alt=""
      />
      <img
        class="cloth3 move2"
        src="@assets/img/earthquake/step4/JyTQBk_2_.png"
        alt=""
      />
      <p class="cloth_text">換穿衣物</p>
      <img
        class="brush move4"
        src="@assets/img/earthquake/step4/YiecvT_2_.png"
        alt=""
      />
      <p class="brush_text">牙刷組</p>
      <img
        class="bag move2"
        src="@assets/img/earthquake/step4/SXOpX9_2_.png"
        alt=""
      />
      <p class="bag_text">塑膠袋</p>
      <img
        class="alcohol move4"
        src="@assets/img/earthquake/step4/vELxjk_2_.png"
        alt=""
      />
      <p class="alcohol_text">酒精</p>
    </div>
    <div class="circle_5">
      <p class="circle_title">貴重物品</p>
      <img
        class="cash move1"
        src="@assets/img/earthquake/step4/ZVh3rN_2_.png"
        alt=""
      />
      <p class="cash_text">現金(震後可能停止電子交易)</p>
      <img
        class="key move3"
        src="@assets/img/earthquake/step4/VWRAGd_2_.png"
        alt=""
      />
      <p class="key_text">鑰匙</p>
      <img
        class="card move2"
        src="@assets/img/earthquake/step4/TwCaMK_2_.png"
        alt=""
      />
      <p class="card_text">重要證件(身分證、健保卡)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step4'
}
</script>

<style scoped>
/* step4 */
@keyframes movepoint {
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
}

.move1 {
  animation: movepoint 2.5s infinite;
}

.move2 {
  animation: movepoint 2.5s infinite;
  -webkit-animation-delay: 0.6s;
}

.move3 {
  animation: movepoint 2.5s infinite;
  -webkit-animation-delay: 1.3s;
}

.move4 {
  animation: movepoint 2.5s infinite;
  -webkit-animation-delay: 1.8s;
}

.step4_container {
  margin: 200px auto 0 auto;
  width: 700px;
  display: flex;
  justify-content: space-between;
}

.step4_container .step4_number {
  font-weight: 500;
  font-size: 220px;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 4px #50afbd;
  color: #ffffff;
}

.step4_container .step4_info {
  width: 480px;
}

.step4_container .step4_title {
  margin-top: 100px;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: #50afbd;
}

.step4_container .step4_text {
  margin-top: 28px;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: 0.02em;
  color: #5e5e5e;
}

.step4_circles {
  position: relative;
  margin: 0 auto;
  width: 1320px;
  height: 1600px;
  margin-top: 100px;
}

.step4_circles div {
  width: 550px;
  height: 550px;
  border-radius: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
}

.step4_circles .circle_1 {
  position: absolute;
  top: 0;
  left: 70px;
}

.step4_circles .circle_2 {
  position: absolute;
  top: -100px;
  right: 20px;
}

.step4_circles .circle_3 {
  position: absolute;
  top: 450px;
  left: 450px;
}

.step4_circles .circle_4 {
  position: absolute;
  top: 900px;
  left: 80px;
}

.step4_circles .circle_5 {
  position: absolute;
  top: 1000px;
  right: 0px;
}

.step4_circles .circle_title {
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 0.1em;
  color: #008396;
  text-align: center;
  margin-top: 65px;
}

.step4_circles .cookies1 {
  position: absolute;
  top: 240px;
  left: 50px;
}

.step4_circles .cookies2 {
  position: absolute;
  top: 200px;
  left: 160px;
}

.step4_circles .cookies_text {
  position: absolute;
  top: 340px;
  left: 55px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .water1 {
  position: absolute;
  top: 210px;
  left: 395px;
}

.step4_circles .water2 {
  position: absolute;
  top: 175px;
  left: 295px;
}

.step4_circles .water_text {
  position: absolute;
  top: 285px;
  left: 355px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .phone {
  position: absolute;
  top: 152px;
  left: 82px;
}

.step4_circles .phone_text {
  position: absolute;
  top: 233px;
  left: 105px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .light1 {
  position: absolute;
  top: 163px;
  left: 304px;
}

.step4_circles .light2 {
  position: absolute;
  top: 142px;
  left: 381px;
}

.step4_circles .light_text {
  position: absolute;
  top: 207px;
  left: 293px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .battery {
  position: absolute;
  top: 225px;
  left: 177px;
}

.step4_circles .battery_text {
  position: absolute;
  top: 316px;
  left: 191px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .whistle {
  position: absolute;
  top: 315px;
  left: 93px;
}

.step4_circles .whistle_text {
  position: absolute;
  top: 374px;
  left: 105px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .drug1 {
  position: absolute;
  top: 266px;
  left: 321px;
}

.step4_circles .drug2 {
  position: absolute;
  top: 255px;
  left: 401px;
}

.step4_circles .drug_text {
  position: absolute;
  top: 344px;
  left: 327px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .gear1 {
  position: absolute;
  top: 387px;
  left: 206px;
}

.step4_circles .gear2 {
  position: absolute;
  top: 417px;
  left: 288px;
}

.step4_circles .gear_text {
  position: absolute;
  top: 475px;
  left: 257px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .map {
  position: absolute;
  top: 176px;
  left: 84px;
}

.step4_circles .map_text {
  position: absolute;
  top: 330px;
  left: 117px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .photo {
  position: absolute;
  top: 161px;
  left: 288px;
}

.step4_circles .photo_text {
  position: absolute;
  top: 270px;
  left: 337px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .pen {
  position: absolute;
  top: 325px;
  left: 265px;
}

.step4_circles .pen_text {
  position: absolute;
  top: 419px;
  left: 246px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .cloth1 {
  position: absolute;
  top: 137px;
  left: 133px;
}

.step4_circles .cloth2 {
  position: absolute;
  top: 186px;
  left: 70px;
}

.step4_circles .cloth3 {
  position: absolute;
  top: 204px;
  left: 173px;
}

.step4_circles .cloth_text {
  position: absolute;
  top: 301px;
  left: 142px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .brush {
  position: absolute;
  top: 160px;
  left: 350px;
}

.step4_circles .brush_text {
  position: absolute;
  top: 245px;
  left: 357px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .bag {
  position: absolute;
  top: 358px;
  left: 172px;
}

.step4_circles .bag_text {
  position: absolute;
  top: 436px;
  left: 190px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .alcohol {
  position: absolute;
  top: 326px;
  left: 331px;
}

.step4_circles .alcohol_text {
  position: absolute;
  top: 407px;
  left: 329px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .cash {
  position: absolute;
  top: 146px;
  left: 101px;
}

.step4_circles .cash_text {
  position: absolute;
  top: 265px;
  left: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .key {
  position: absolute;
  top: 160px;
  left: 336px;
}

.step4_circles .key_text {
  position: absolute;
  top: 270px;
  left: 392px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.step4_circles .card {
  position: absolute;
  top: 335px;
  left: 219px;
}

.step4_circles .card_text {
  position: absolute;
  top: 438px;
  left: 173px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}
</style>