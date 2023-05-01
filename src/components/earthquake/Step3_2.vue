<template>
  <div class="step3_container">
    <div class="step3_number">3</div>
    <div class="step3_info">
      <div class="step3_title">儲備日常用品與緊急物資</div>
      <div class="step3_text">
        當發生大規模地震，出現停電、停水或瓦斯中斷的狀況，若住家安全且有儲備日用品，就能選擇在熟悉且較舒適的住家中避難。平時可以透過「循環儲糧法」，一邊消耗一邊購買日用品，就不用擔心購買不必要或出現過期的狀況。
      </div>
      <div class="step3_web">
        <a
          href="https://world.aeon-ryukyu.jp/tc/magazine/1384/?magazine_color=life"
          >循環儲糧法查看</a
        >
        <img src="@assets/img/earthquake/nextArrow.png" />
      </div>
    </div>
  </div>

  <div class="slider_center">
    <div class="step3_slider">
      <div class="step3_grid">
        <div class="step3_box">
          <div class="box_center w50 box1">
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/gas.png" />
              <p>卡式瓦斯爐、瓦斯罐</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/pot.png" />
              <p>鍋具</p>
            </div>
          </div>
        </div>
      </div>
      <div class="step3_grid">
        <div class="step3_box">
          <div class="box_center box2">
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/water.png" />
              <p>礦泉水(三天份)</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/bucket.png" />
              <p>儲水桶</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/tissue2.png" />
              <p>廁所便利包</p>
            </div>
          </div>
        </div>
      </div>
      <div class="step3_grid">
        <div class="step3_box">
          <div class="box_center mgt-10 box3">
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/light1.png" />
              <p>露營燈</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step4/light2.png" />
              <p>手電筒</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/light3.png" />
              <p>提燈</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/radio.png" />
              <p>收音機</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/dynamo.png" />
              <p>發電機</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/warmbag.png" />
              <p>暖暖包</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/bottle.png" />
              <p>保溫瓶</p>
            </div>
          </div>
        </div>
      </div>
      <div class="step3_grid">
        <div class="step3_box">
          <div class="box_center w80 box4">
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/dryrice.png" />
              <p>乾燥飯包</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/drynoddle.png" />
              <p>乾燥麵條包</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/cookies.png" />
              <p>罐頭、泡麵、餅乾</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/juice.png" />
              <p>果汁</p>
            </div>
          </div>
        </div>
      </div>
      <div class="step3_grid">
        <div class="step3_box">
          <div class="box_center box5">
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/drup.png" />
              <p>急救包、口罩、酒精</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step4/drug1.png" />
              <p>常備藥</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/supplies.png" />
              <p>生理用品</p>
            </div>
          </div>
        </div>
      </div>
      <div class="step3_grid">
        <div class="step3_box">
          <div class="box_center w50 box6">
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/defense.png" />
              <p>防身用品</p>
            </div>
            <div class="box_item">
              <img src="@assets/img/earthquake/step3/car.png" />
              <p>搬運推車</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step3_2",
};
</script>

<style lang="scss" scoped>
.step3_container {
  margin: 0 auto;
  width: 700px;
  display: flex;
  justify-content: space-between;
  .step3_number {
    font-weight: 500;
    font-size: 220px;
    letter-spacing: 0.05em;
    -webkit-text-stroke: 4px #50afbd;
    color: #ffffff;
  }
  .step3_info {
    width: 480px;
    .step3_title {
      margin-top: 70px;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0.05em;
      color: #50afbd;
    }
    .step3_text {
      margin-top: 28px;
      font-size: 16px;
      line-height: 156%;
      letter-spacing: 0.02em;
      color: #5e5e5e;
    }
    .step3_web {
      margin-top: 50px;
      margin-left: 28px;
      margin-bottom: 200px;
      position: relative;
      width: 137px;
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
      img {
        position: absolute;
        top: 14px;
        left: 110px;
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
    }
  }
}

.slider_center {
  overflow: scroll;
  max-width: 100%;
}
.step3_slider {
  width: 4728px;
  height: 500px;
  background-color: #bd9386;
  border-radius: 48px;
  margin: 0 50%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  .step3_grid {
    width: 760px;
    height: 452px;
    background-color: #fcf4d5;
    position: relative;
    &:first-child {
      border-radius: 24px 0 0 24px;
    }
    &:last-child {
      border-radius: 0 24px 24px 0;
    }
    .step3_box {
      // display: flex;
      position: absolute;
      left: 52px;
      bottom: -20px;
      width: 658px;
      height: 365px;
      margin: 0 auto;
      background-size: cover;
      background-image: url(@assets/img/earthquake/step3/step3_box.png);
      &:hover {
        background-image: url(@assets/img/earthquake/step3/gas_hover.png);
        .box_center .box_item {
          display: none;
        }
      }
      .box_center {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 55%;
        margin: 20% auto 0 auto;
        .box_item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-self: flex-end;
          width: 25%;

          p {
            white-space: nowrap;
            margin-top: 20px;
            font-weight: 500;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: 0.1em;
            color: #5e5e5e;
          }
        }
      }
    }
  }
}
.w50 {
  width: 50% !important;
}
.mgt-10 {
  margin: 10% auto 0 auto !important;
}
.w80 {
  width: 80% !important;
}
.box1::after {
  content: "瓦斯\A中斷";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: pre;
  text-align: center;
  padding-top: 30px;
  position: absolute;
  top: -70px;
  right: -54px;
  width: 150px;
  height: 150px;
  background-image: url(@assets/img/earthquake/step3/Star3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box2::after {
  content: "停水";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: pre;
  text-align: center;
  padding-top: 52px;
  position: absolute;
  top: -70px;
  right: -54px;
  width: 150px;
  height: 150px;
  background-image: url(@assets/img/earthquake/step3/Star3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box3::after {
  content: "停電";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: pre;
  text-align: center;
  padding-top: 52px;
  position: absolute;
  top: -70px;
  right: -54px;
  width: 150px;
  height: 150px;
  background-image: url(@assets/img/earthquake/step3/Star3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box4::after {
  content: "儲糧";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: pre;
  text-align: center;
  padding-top: 52px;
  position: absolute;
  top: -70px;
  right: -54px;
  width: 150px;
  height: 150px;
  background-image: url(@assets/img/earthquake/step3/Star3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box5::after {
  content: "醫藥\A健康";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: pre;
  text-align: center;
  padding-top: 30px;
  position: absolute;
  top: -70px;
  right: -54px;
  width: 150px;
  height: 150px;
  background-image: url(@assets/img/earthquake/step3/Star3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.box6::after {
  content: "其他";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: 0.1em;
  color: #ffffff;
  white-space: pre;
  text-align: center;
  padding-top: 52px;
  position: absolute;
  top: -70px;
  right: -54px;
  width: 150px;
  height: 150px;
  background-image: url(@assets/img/earthquake/step3/Star3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>