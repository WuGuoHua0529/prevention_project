<template>
  <Row
    align="center"
    justify="space-between"
    class="step_container px-10"
  >
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_number">4</div>
    </Col>
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_title">準備外出避難防災包</div>
    <div class="step_text">
      防災包是外出避難時攜帶，裝放有助於延續生命或促進生活便利的物品，可按需求與季節選帶，放置於家中玄關處以方便外出拿取。
    </div>
    </Col>
  </Row>
  <Row>
    <Col
      class="step4_circlesCol"
      :xs="{ span: 0 }"
      :sm="{ span: 0 }"
      :md="{ span: 24 }"
      :lg="{ span: 24 }"
    >
    <div class="circle circle_1">
      <p class="circle_title">食物</p>
      <img
        class="cookies1 move"
        src="@assets/img/earthquake/step4/cookies1.png"
      />
      <img
        class="cookies2 move delay-oneThree"
        src="@assets/img/earthquake/step4/cookies2.png"
      />
      <p class="cookies_text">體積小熱量高的巧克餅、餅乾</p>
      <img
        class="water1 move delay-zeroSix"
        src="@assets/img/earthquake/step4/water1.png"
      />
      <img
        class="water2 move delay-oneEight"
        src="@assets/img/earthquake/step4/water2.png"
      />
      <p class="water_text">飲用水</p>
    </div>

    <div class="circle circle_2">
      <p class="circle_title">人生安全</p>
      <img
        class="phone move"
        src="@assets/img/earthquake/step4/phone.png"
      />
      <p class="phone_text">手機</p>
      <img
        class="light1 delay-zeroSix"
        src="@assets/img/earthquake/step4/light1.png"
      />
      <img
        class="light2 delay-oneThree"
        src="@assets/img/earthquake/step4/light2.png"
      />
      <p class="light_text">掛頸燈、頭燈、手電筒</p>
      <img
        class="battery delay-oneEight"
        src="@assets/img/earthquake/step4/battery.png"
      />
      <p class="battery_text">行動電源</p>
      <img
        class="whistle delay-oneThree"
        src="@assets/img/earthquake/step4/whistle.png"
      />
      <p class="whistle_text">哨子</p>
      <img
        class="drug1 delay-oneEight"
        src="@assets/img/earthquake/step4/drug1.png"
      />
      <img
        class="drug2 delay-oneThree"
        src="@assets/img/earthquake/step4/drug2.png"
      />
      <p class="drug_text">隨身急救包、藥物</p>
      <img
        class="gear1 move"
        src="@assets/img/earthquake/step4/gear1.png"
      />
      <img
        class="gear2 delay-zeroSix"
        src="@assets/img/earthquake/step4/gear2.png"
      />
      <p class="gear_text">雨具</p>
    </div>

    <div class="circle circle_3">
      <p class="circle_title">資訊蒐集</p>
      <img
        class="map delay-oneThree"
        src="@assets/img/earthquake/step4/map.png"
      />
      <p class="map_text">避難地圖</p>
      <img
        class="photo delay-oneEight"
        src="@assets/img/earthquake/step4/photo.png"
      />
      <p class="photo_text">家人照片</p>
      <img
        class="pen move"
        src="@assets/img/earthquake/step4/pen.png"
      />
      <p class="pen_text">書寫工具(紙、筆)</p>
    </div>

    <div class="circle circle_4">
      <p class="circle_title">衛生清潔</p>
      <img
        class="cloth1 delay-zeroSix"
        src="@assets/img/earthquake/step4/cloth1.png"
      />
      <img
        class="cloth2 move"
        src="@assets/img/earthquake/step4/cloth2.png"
      />
      <img
        class="cloth3 delay-zeroSix"
        src="@assets/img/earthquake/step4/cloth3.png"
      />
      <p class="cloth_text">換穿衣物</p>
      <img
        class="brush delay-oneEight"
        src="@assets/img/earthquake/step4/brush.png"
      />
      <p class="brush_text">牙刷組</p>
      <img
        class="bag delay-zeroSix"
        src="@assets/img/earthquake/step4/bag.png"
      />
      <p class="bag_text">塑膠袋</p>
      <img
        class="alcohol delay-oneEight"
        src="@assets/img/earthquake/step4/alcohol.png"
      />
      <p class="alcohol_text">酒精</p>
    </div>

    <div class="circle circle_5">
      <p class="circle_title">貴重物品</p>
      <img
        class="cash move"
        src="@assets/img/earthquake/step4/cash.png"
      />
      <p class="cash_text">現金(震後可能停止電子交易)</p>
      <img
        class="key delay-zeroSix"
        src="@assets/img/earthquake/step4/key.png"
      />
      <p class="key_text">鑰匙</p>
      <img
        class="card delay-zeroSix"
        src="@assets/img/earthquake/step4/card.png"
      />
      <p class="card_text">重要證件(身分證、健保卡)</p>
    </div>
    </Col>
    <Col
      class="step4_circlesCol"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 0 }"
      :lg="{ span: 0 }"
    >
    <swiper-container autoPlay="true">
      <swiper-slide>
        <div class="circle circle_5">
          <p class="circle_title">貴重物品</p>
          <Row>
            <Col
              class="step4_circlesCol"
              span="24"
            >
            <img
              class="cash move"
              src="@assets/img/earthquake/step4/cash.png"
            />
            <p class="cash_text">現金(震後可能停止電子交易)</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="card delay-zeroSix"
              src="@assets/img/earthquake/step4/card.png"
            />
            <p class="card_text">重要證件(身分證、健保卡)</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="key delay-zeroSix"
              src="@assets/img/earthquake/step4/key.png"
            />
            <p class="key_text">鑰匙</p>
            </Col>
          </Row>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="circle circle_4">
          <p class="circle_title">衛生清潔</p>
          <Row>
            <Col span="12">
            <img
              class="cloth1 delay-zeroSix"
              src="@assets/img/earthquake/step4/cloth1.png"
            />
            <img
              class="cloth2 move"
              src="@assets/img/earthquake/step4/cloth2.png"
            />
            <img
              class="cloth3 delay-zeroSix"
              src="@assets/img/earthquake/step4/cloth3.png"
            />
            <p class="cloth_text">換穿衣物</p>
            </Col>
          </Row>
          <Row>
            <Col span="12">
            <img
              class="brush delay-oneEight"
              src="@assets/img/earthquake/step4/brush.png"
            />
            <p class="brush_text">牙刷組</p>
            </Col>
          </Row>
          <Row>
            <Col span="12">
            <img
              class="bag delay-zeroSix"
              src="@assets/img/earthquake/step4/bag.png"
            />
            <p class="bag_text">塑膠袋</p>
            </Col>
          </Row>
          <Row>
            <Col span="12">
            <img
              class="alcohol delay-oneEight"
              src="@assets/img/earthquake/step4/alcohol.png"
            />
            <p class="alcohol_text">酒精</p>
            </Col>
          </Row>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="circle circle_1">
          <p class="circle_title">食物</p>
          <Row>
            <Col
              class="step4_circlesCol"
              span="24"
            >
            <img
              class="cookies1 move"
              src="@assets/img/earthquake/step4/cookies1.png"
            />
            <img
              class="cookies2 move delay-oneThree"
              src="@assets/img/earthquake/step4/cookies2.png"
            />
            <p class="cookies_text">體積小熱量高的巧克餅、餅乾</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="24"
            >
            <img
              class="water2 move delay-oneEight"
              src="@assets/img/earthquake/step4/water2.png"
            />
            <img
              class="water1 move delay-zeroSix"
              src="@assets/img/earthquake/step4/water1.png"
            />
            <p class="water_text">飲用水</p>
            </Col>
          </Row>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="circle circle_2">
          <p class="circle_title">人生安全</p>
          <Row>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="phone move"
              src="@assets/img/earthquake/step4/phone.png"
            />
            <p class="phone_text">手機</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="light1 delay-zeroSix"
              src="@assets/img/earthquake/step4/light1.png"
            />
            <img
              class="light2 delay-oneThree"
              src="@assets/img/earthquake/step4/light2.png"
            />
            <p class="light_text">掛頸燈、頭燈、手電筒</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <div style="display: flex;">
              <img
                class="drug1 delay-oneEight"
                src="@assets/img/earthquake/step4/drug1.png"
              />
              <img
                class="drug2 delay-oneThree"
                src="@assets/img/earthquake/step4/drug2.png"
              />
            </div>
            <p class="drug_text">隨身急救包、藥物</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="battery delay-oneEight"
              src="@assets/img/earthquake/step4/battery.png"
            />
            <p class="battery_text">行動電源</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="whistle delay-oneThree"
              src="@assets/img/earthquake/step4/whistle.png"
            />
            <p class="whistle_text">哨子</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="gear1 move"
              src="@assets/img/earthquake/step4/gear1.png"
            />
            <img
              class="gear2 delay-zeroSix"
              src="@assets/img/earthquake/step4/gear2.png"
            />
            <p class="gear_text">雨具</p>
            </Col>
          </Row>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="circle circle_3">
          <p class="circle_title ivu-mb-16">資訊蒐集</p>
          <Row>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="map delay-oneThree"
              src="@assets/img/earthquake/step4/map.png"
            />
            <p class="map_text">避難地圖</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="12"
            >
            <img
              class="photo delay-oneEight"
              src="@assets/img/earthquake/step4/photo.png"
            />
            <p class="photo_text">家人照片</p>
            </Col>
            <Col
              class="step4_circlesCol"
              span="24"
            >
            <img
              class="pen move"
              src="@assets/img/earthquake/step4/pen.png"
            />
            <p class="pen_text">書寫工具(紙、筆)</p>
            </Col>
          </Row>
        </div>
      </swiper-slide>
    </swiper-container>
    </Col>
  </Row>
</template>

<script>
import { register } from 'swiper/element/bundle';
import { onMounted } from 'vue';
register();
export default {
  name: "Step4",
  setup () {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes movepoint {
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
}

.step_container {
  margin: 0;
  .step_number {
    text-align: center;
    @media (min-width: 768px) {
      text-align: right;
      margin-right: 30%;
    }
  }

  .step_content {
    justify-content: center;
  }
}

.move {
  animation: movepoint 2.5s infinite;

  &.delay-zeroSix {
    -webkit-animation-delay: 0.6s;
  }
  &.delay-oneThree {
    -webkit-animation-delay: 1.3s;
  }
  &.delay-oneEight {
    -webkit-animation-delay: 1.8s;
  }
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

.step4_circlesCol {
  swiper-slide {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 80px;
  }

  .swiper-slide-active::before {
    content: "";
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 100%;
    background: #ffffff;
    box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
  }
}

.step4_circlesCol {
  position: relative;
  margin: 20px auto;
  text-align: center;
  @media (min-width: 768px) {
    text-align: initial;
    width: 100%;
    height: 700px;
    height: 1600px;
    margin-top: 100px;
  }

  .circle {
    position: relative;
    width: 510px;
    height: 510px;
    @media (min-width: 768px) {
      border-radius: 100%;
      background: #ffffff;
      box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
    }
  }

  .circle_title {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.1em;
    color: #008396;
    text-align: center;
    margin-top: 50px;
  }

  .circle_1 {
    @media (min-width: 768px) {
      top: 0;
      left: 70px;
      position: absolute;
    }

    .cookies1 {
      position: absolute;
      top: 40px;
      left: 40px;
      width: 35%;
      @media (min-width: 768px) {
        position: absolute;
        top: 220px;
        left: 70px;
        width: 20%;
      }
    }
    .cookies2 {
      position: absolute;
      top: 10px;
      left: 120px;
      width: 30%;
      @media (min-width: 768px) {
        position: absolute;
        top: 130px;
        left: 160px;
        width: 15%;
      }
    }
    .cookies_text {
      white-space: nowrap;
      position: absolute;
      top: 130px;
      left: 14px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 310px;
        left: 44px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .water1 {
      position: absolute;
      top: 160px;
      left: 125px;
      width: 30%;
      @media (min-width: 768px) {
        position: absolute;
        top: 240px;
        left: 355px;
        width: 16%;
      }
    }
    .water2 {
      position: absolute;
      top: 140px;
      left: 55px;
      width: 25%;
      @media (min-width: 768px) {
        position: absolute;
        top: 205px;
        width: 15%;
        left: 275px;
      }
    }
    .water_text {
      position: absolute;
      top: 220px;
      left: 95px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 310px;
        left: 315px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
  }

  .circle_2 {
    @media (min-width: 768px) {
      position: absolute;
      top: -100px;
      right: 20px;
    }

    .phone {
      width: 30%;
      @media (min-width: 768px) {
        position: absolute;
        top: 132px;
        left: 62px;
        width: 13%;
      }
    }
    .phone_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 203px;
        left: 85px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .light1 {
      width: 15%;
      transform: rotate(-90deg);
      margin-right: 10px;
      @media (min-width: 768px) {
        position: absolute;
        top: 120px;
        left: 234px;
        width: 7%;
        margin-right: 0px;
      }
    }
    .light2 {
      width: 30%;
      margin-left: 10px;
      @media (min-width: 768px) {
        position: absolute;
        top: 120px;
        left: 300px;
        margin-right: 0px;
      }
    }
    .light_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 180px;
        left: 213px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .battery {
      width: 36%;
      @media (min-width: 768px) {
        position: absolute;
        top: 205px;
        left: 147px;
        width: 15%;
      }
    }
    .battery_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 276px;
        left: 155px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .whistle {
      @media (min-width: 768px) {
        position: absolute;
        top: 285px;
        left: 83px;
        width: 11%;
      }
    }
    .whistle_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 334px;
        left: 95px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .drug1 {
      width: 30%;
      @media (min-width: 768px) {
        position: absolute;
        top: 236px;
        left: 280px;
        width: 11%;
      }
    }
    .drug2 {
      width: 45%;
      @media (min-width: 768px) {
        position: absolute;
        top: 225px;
        left: 340px;
        width: 20%;
      }
    }
    .drug_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 300px;
        left: 280px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .gear1 {
      width: 24%;
      @media (min-width: 768px) {
        position: absolute;
        top: 325px;
        left: 186px;
        width: 12%;
      }
    }
    .gear2 {
      width: 25%;
      @media (min-width: 768px) {
        position: absolute;
        top: 355px;
        left: 240px;
        width: 11%;
      }
    }
    .gear_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 400px;
        left: 220px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
  }

  .circle_3 {
    @media (min-width: 768px) {
      position: absolute;
      top: 450px;
      left: 430px;
    }
    .map {
      width: 70%;
      @media (min-width: 768px) {
        position: absolute;
        top: 120px;
        left: 80px;
        width: 24%;
      }
    }
    .map_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 240px;
        left: 107px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .photo {
      width: 100%;
      @media (min-width: 768px) {
        position: absolute;
        top: 140px;
        left: 250px;
        width: 26%;
      }
    }
    .photo_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 240px;
        left: 277px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .pen {
      width: 25%;
      @media (min-width: 768px) {
        position: absolute;
        top: 300px;
        left: 195px;
        width: 14%;
      }
    }
    .pen_text {
      @media (min-width: 768px) {
        position: absolute;
        top: 370px;
        left: 170px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
  }

  .circle_4 {
    @media (min-width: 768px) {
      position: absolute;
      top: 900px;
      left: 60px;
    }
    .cloth1 {
      position: absolute;
      left: 10px;
      top: 37px;
      width: 50%;
      @media (min-width: 768px) {
        position: absolute;
        left: 100px;
        top: 137px;
        width: 18%;
      }
    }
    .cloth2 {
      position: absolute;
      top: 76px;
      left: -20px;
      width: 50%;
      @media (min-width: 768px) {
        position: absolute;
        top: 186px;
        left: 50px;
        width: 17%;
      }
    }
    .cloth3 {
      position: absolute;
      top: 85px;
      left: 50px;
      width: 50%;
      @media (min-width: 768px) {
        position: absolute;
        top: 195px;
        left: 140px;
        width: 17%;
      }
    }
    .cloth_text {
      white-space: nowrap;
      position: absolute;
      top: 160px;
      left: 15px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 280px;
        left: 100px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .brush {
      position: absolute;
      top: 60px;
      left: 180px;
      width: 43%;
      @media (min-width: 768px) {
        position: absolute;
        top: 160px;
        left: 280px;
        width: 13%;
      }
    }
    .brush_text {
      white-space: nowrap;
      position: absolute;
      top: 160px;
      left: 185px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 225px;
        left: 285px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
    .bag {
      position: absolute;
      top: 215px;
      left: 10px;
      width: 60%;
      @media (min-width: 768px) {
        position: absolute;
        top: 310px;
        left: 180px;
        width: 15%;
      }
    }
    .bag_text {
      white-space: nowrap;
      position: absolute;
      top: 275px;
      left: 20px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 370px;
        left: 190px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }

    .alcohol {
      position: absolute;
      top: 220px;
      left: 190px;
      width: 20%;
      @media (min-width: 768px) {
        position: absolute;
        top: 300px;
        left: 311px;
        width: 6%;
      }
    }

    .alcohol_text {
      white-space: nowrap;
      position: absolute;
      top: 275px;
      left: 185px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 360px;
        left: 310px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
  }

  .circle_5 {
    @media (min-width: 768px) {
      position: absolute;
      top: 1000px;
      right: 0px;
    }
    .cash {
      position: absolute;
      top: 10px;
      left: 81px;
      width: 35%;
      @media (min-width: 768px) {
        position: absolute;
        top: 146px;
        left: 81px;
        width: 22%;
      }
    }
    .cash_text {
      position: absolute;
      top: 90px;
      left: 26px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 240px;
        left: 36px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }

    .key {
      position: absolute;
      top: 120px;
      left: 70px;
      width: 70%;
      @media (min-width: 768px) {
        position: absolute;
        top: 150px;
        left: 290px;
        width: 22%;
      }
    }

    .key_text {
      white-space: nowrap;
      position: absolute;
      top: 195px;
      left: 90px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 245px;
        left: 330px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }

    .card {
      position: absolute;
      top: 125px;
      left: 19px;
      width: 57%;
      @media (min-width: 768px) {
        position: absolute;
        top: 305px;
        left: 199px;
        width: 17%;
      }
    }

    .card_text {
      white-space: nowrap;
      position: absolute;
      top: 197px;
      left: -30px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      letter-spacing: 0.1em;
      color: #5e5e5e;
      @media (min-width: 768px) {
        position: absolute;
        top: 378px;
        left: 153px;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0.1em;
        color: #5e5e5e;
      }
    }
  }
}
</style>