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
        src="@assets/img/earthquake/step4/cookies1.png"
      />
      <img
        class="cookies2 move3"
        src="@assets/img/earthquake/step4/cookies2.png"
      />
      <p class="cookies_text">體積小熱量高的巧克餅、餅乾</p>
      <img
        class="water1 move2"
        src="@assets/img/earthquake/step4/water1.png"
      />
      <img
        class="water2 move4"
        src="@assets/img/earthquake/step4/water2.png"
      />
      <p class="water_text">飲用水</p>
    </div>
    <div class="circle_2">
      <p class="circle_title">人生安全</p>
      <img
        class="phone move1"
        src="@assets/img/earthquake/step4/phone.png"
      />
      <p class="phone_text">手機</p>
      <img
        class="light1 move3"
        src="@assets/img/earthquake/step4/light1.png"
      />
      <img
        class="light2 move2"
        src="@assets/img/earthquake/step4/light2.png"
      />
      <p class="light_text">掛頸燈、頭燈、手電筒</p>
      <img
        class="battery move4"
        src="@assets/img/earthquake/step4/battery.png"
      />
      <p class="battery_text">行動電源</p>
      <img
        class="whistle move2"
        src="@assets/img/earthquake/step4/whistle.png"
      />
      <p class="whistle_text">哨子</p>
      <img
        class="drug1 move4"
        src="@assets/img/earthquake/step4/drug1.png"
      />
      <img
        class="drug2 move2"
        src="@assets/img/earthquake/step4/drug2.png"
      />
      <p class="drug_text">隨身急救包、藥物</p>
      <img
        class="gear1 move1"
        src="@assets/img/earthquake/step4/gear1.png"
      />
      <img
        class="gear2 move3"
        src="@assets/img/earthquake/step4/gear2.png"
      />
      <p class="gear_text">雨具</p>
    </div>
    <div class="circle_3">
      <p class="circle_title">資訊蒐集</p>
      <img
        class="map move2"
        src="@assets/img/earthquake/step4/map.png"
      />
      <p class="map_text">避難地圖</p>
      <img
        class="photo move4"
        src="@assets/img/earthquake/step4/photo.png"
      />
      <p class="photo_text">家人照片</p>
      <img
        class="pen move1"
        src="@assets/img/earthquake/step4/pen.png"
      />
      <p class="pen_text">書寫工具(紙、筆)</p>
    </div>
    <div class="circle_4">
      <p class="circle_title">衛生清潔</p>
      <img
        class="cloth1 move3"
        src="@assets/img/earthquake/step4/cloth1.png"
      />
      <img
        class="cloth2 move1"
        src="@assets/img/earthquake/step4/cloth2.png"
      />
      <img
        class="cloth3 move2"
        src="@assets/img/earthquake/step4/cloth3.png"
      />
      <p class="cloth_text">換穿衣物</p>
      <img
        class="brush move4"
        src="@assets/img/earthquake/step4/brush.png"
      />
      <p class="brush_text">牙刷組</p>
      <img
        class="bag move2"
        src="@assets/img/earthquake/step4/bag.png"
      />
      <p class="bag_text">塑膠袋</p>
      <img
        class="alcohol move4"
        src="@assets/img/earthquake/step4/alcohol.png"
      />
      <p class="alcohol_text">酒精</p>
    </div>
    <div class="circle_5">
      <p class="circle_title">貴重物品</p>
      <img
        class="cash move1"
        src="@assets/img/earthquake/step4/cash.png"
      />
      <p class="cash_text">現金(震後可能停止電子交易)</p>
      <img
        class="key move3"
        src="@assets/img/earthquake/step4/key.png"
      />
      <p class="key_text">鑰匙</p>
      <img
        class="card move2"
        src="@assets/img/earthquake/step4/card.png"
      />
      <p class="card_text">重要證件(身分證、健保卡)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step4",
};
</script>

<style lang="scss" scoped>
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

  .step4_number {
    font-weight: 500;
    font-size: 220px;
    letter-spacing: 0.05em;
    -webkit-text-stroke: 4px #50afbd;
    color: #ffffff;
  }

  .step4_info {
    width: 480px;

    .step4_title {
      margin-top: 100px;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0.05em;
      color: #50afbd;
    }
    .step4_text {
      margin-top: 28px;
      font-size: 16px;
      line-height: 156%;
      letter-spacing: 0.02em;
      color: #5e5e5e;
    }
  }
}

.step4_circles {
  position: relative;
  margin: 0 auto;
  width: 1320px;
  height: 1600px;
  margin-top: 100px;

  div {
    width: 550px;
    height: 550px;
    border-radius: 100%;
    background: #ffffff;
    box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
  }

  .circle_1 {
    position: absolute;
    top: 0;
    left: 70px;

    .cookies1 {
      position: absolute;
      top: 240px;
      left: 50px;
    }
    .cookies2 {
      position: absolute;
      top: 200px;
      left: 160px;
    }
    .cookies_text {
      position: absolute;
      top: 340px;
      left: 55px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .cookies_text {
      position: absolute;
      top: 340px;
      left: 55px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .water1 {
      position: absolute;
      top: 210px;
      left: 395px;
    }
    .water2 {
      position: absolute;
      top: 175px;
      left: 295px;
    }

    .water_text {
      position: absolute;
      top: 285px;
      left: 355px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
  }

  .circle_2 {
    position: absolute;
    top: -100px;
    right: 20px;

    .phone {
      position: absolute;
      top: 152px;
      left: 82px;
    }
    .phone_text {
      position: absolute;
      top: 233px;
      left: 105px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .light1 {
      position: absolute;
      top: 130px;
      left: 304px;
    }
    .light2 {
      position: absolute;
      top: 142px;
      left: 381px;
    }
    .light_text {
      position: absolute;
      top: 207px;
      left: 293px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .battery {
      position: absolute;
      top: 225px;
      left: 177px;
    }
    .battery_text {
      position: absolute;
      top: 316px;
      left: 191px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .whistle {
      position: absolute;
      top: 315px;
      left: 93px;
    }
    .whistle_text {
      position: absolute;
      top: 374px;
      left: 105px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .drug1 {
      position: absolute;
      top: 266px;
      left: 321px;
    }
    .drug2 {
      position: absolute;
      top: 255px;
      left: 401px;
    }
    .drug_text {
      position: absolute;
      top: 344px;
      left: 327px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .gear1 {
      position: absolute;
      top: 387px;
      left: 206px;
    }
    .gear2 {
      position: absolute;
      top: 417px;
      left: 288px;
    }
    .gear_text {
      position: absolute;
      top: 475px;
      left: 257px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
  }

  .circle_3 {
    position: absolute;
    top: 450px;
    left: 450px;
    .map {
      position: absolute;
      top: 176px;
      left: 84px;
    }
    .map_text {
      position: absolute;
      top: 330px;
      left: 117px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .photo {
      position: absolute;
      top: 161px;
      left: 288px;
    }
    .photo_text {
      position: absolute;
      top: 270px;
      left: 337px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .pen {
      position: absolute;
      top: 325px;
      left: 265px;
    }
    .pen_text {
      position: absolute;
      top: 419px;
      left: 246px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
  }

  .circle_4 {
    position: absolute;
    top: 900px;
    left: 80px;
    .cloth1 {
      position: absolute;
      top: 137px;
      left: 133px;
    }
    .cloth2 {
      position: absolute;
      top: 186px;
      left: 70px;
    }
    .cloth3 {
      position: absolute;
      top: 204px;
      left: 173px;
    }
    .cloth_text {
      position: absolute;
      top: 301px;
      left: 142px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .brush {
      position: absolute;
      top: 160px;
      left: 350px;
    }
    .brush_text {
      position: absolute;
      top: 245px;
      left: 357px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
    .bag {
      position: absolute;
      top: 358px;
      left: 172px;
    }
    .bag_text {
      position: absolute;
      top: 436px;
      left: 190px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }

    .alcohol {
      position: absolute;
      top: 326px;
      left: 331px;
    }

    .alcohol_text {
      position: absolute;
      top: 407px;
      left: 329px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
  }

  .circle_5 {
    position: absolute;
    top: 1000px;
    right: 0px;
    .cash {
      position: absolute;
      top: 146px;
      left: 101px;
    }
    .cash_text {
      position: absolute;
      top: 265px;
      left: 56px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }

    .key {
      position: absolute;
      top: 160px;
      left: 336px;
    }

    .key_text {
      position: absolute;
      top: 270px;
      left: 392px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }

    .card {
      position: absolute;
      top: 335px;
      left: 219px;
    }

    .card_text {
      position: absolute;
      top: 438px;
      left: 173px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
    }
  }

  .circle_title {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.1em;
    color: #008396;
    text-align: center;
    margin-top: 65px;
  }
}
</style>