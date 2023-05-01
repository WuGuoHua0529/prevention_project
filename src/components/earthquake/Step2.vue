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
    <div class="step_number">2</div>
    </Col>
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_title">打造安心的居家環境</div>
    <div class="step_text">
      地震時，有很高的受傷比率來自於傢俱物品的翻倒掉落，平時即可為住家進行安全檢查，透過固定裝置加以穩固，以保護好自己。
    </div>
    <div class="step2tips"><span>滑鼠移動到物品，找找小彩蛋^^</span></div>
    </Col>
  </Row>
  <Row>
    <Col
      v-if="!hoverAction"
      class="nowText_col"
      span="24"
    >
    <div class="nowText">{{ nowText }}</div>
    </Col>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24, }"
      :md="{ span: 24 }"
      :lg="{ span: 24 }"
    >
    <div class="step2_box">
      <div class="step2_room">
        <ImgHoverbox
          class="step2_img step2_room_img1"
          :hoverText="'窗戶加裝窗簾、防碎玻璃貼，避免玻璃碎裂飛濺'"
          :imgName="'furniture1.png'"
          :width="'360px'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img2"
          :hoverText="'L型角鐵固定'"
          :imgName="'furniture2.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img3"
          :hoverText="'餐具下鋪止滑墊'"
          :imgName="'furniture3.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img4"
          :hoverText="'床邊準備包覆性拖鞋'"
          :imgName="'furniture4.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img5"
          :hoverText="'使用防傾倒裝置'"
          :imgName="'furniture5.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img6"
          :hoverText="'放置防倒板'"
          :imgName="'furniture6.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img7"
          :hoverText="'固定家電用品'"
          :imgName="'furniture7.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img8"
          :hoverText="'冰箱使用防傾倒裝置'"
          :imgName="'furniture8.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img9"
          :hoverText="'放置住宅用滅火器'"
          :imgName="'furniture9.png'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
        <ImgHoverbox
          class="step2_img step2_room_img10"
          :hoverText="'玻璃拉門貼上防護膜'"
          @callBackText="callBackText"
          :hoverAction="hoverAction"
        />
      </div>
    </div>
    </Col>
  </Row>
</template>

<script>
import { onMounted, ref } from 'vue';
import ImgHoverbox from './ImgHoverbox.vue';
export default {
  name: "Step2",
  components: {
    ImgHoverbox
  },
  setup () {
    const nowText = ref('注意事項');

    function callBackText (event) {
      nowText.value = event;
    }

    const hoverAction = ref(true);

    onMounted(() => {
      if (window.innerWidth <= 768) {
        hoverAction.value = false;
      }
    });

    window.addEventListener('resize', () => {
      hoverAction.value = window.innerWidth > 768
    });

    return {
      nowText,
      callBackText,
      hoverAction
    };
  },
};
</script>

<style lang="scss" scoped>
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

.step2tips {
  position: relative;
  width: 290px;
  margin-top: 25px;
  border-bottom: 1px solid #50afbd;
  span {
    margin-left: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    letter-spacing: 0.1em;
    color: #50afbd;
  }
  ::before {
    content: "";
    width: 41px;
    height: 41px;
    background-image: url(@assets/img/earthquake/step2/tip_img.png);
    position: absolute;
    bottom: -10px;
    left: -30px;
  }
}

.nowText_col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  .nowText {
    width: 100%;
    text-align: center;
    background: #50afbd;
    border-radius: 4px;
    margin: 10% 0 15% 0;
    color: #fff;
    min-height: 90px;
    line-height: 90px;
  }
}

.step2_box {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(@assets/img/earthquake/step2/step2_background.png);
  .step2_bk {
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .step2_room {
    width: 315px;
    height: 600px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(@assets/img/earthquake/step2/step2_room.png);
    margin: 0 auto;
    background-size: contain;
    margin-top: 100px;
    position: relative;
    @media (min-width: 768px) {
      width: 525px;
      height: 1200px;
    }

    .step2_img {
      position: absolute;
    }
    .step2_room_img1 {
      width: 35%;
      top: -70px;
      left: 70px;
      @media (min-width: 768px) {
        top: -110px;
        left: 110px;
      }
    }
    .step2_room_img2 {
      width: 30%;
      top: -70px;
      left: 190px;
      @media (min-width: 768px) {
        top: -110px;
        left: 310px;
      }
    }
    .step2_room_img3 {
      width: 10%;
      top: 20px;
      left: 15px;
      @media (min-width: 768px) {
        top: 40px;
        left: 25px;
      }
    }
    .step2_room_img4 {
      width: 10%;
      top: 25px;
      left: 125px;
      @media (min-width: 768px) {
        width: 10%;
        top: 40px;
        left: 205px;
      }
    }
    .step2_room_img5 {
      width: 8%;
      top: 30px;
      left: 290px;
      @media (min-width: 768px) {
        width: 8%;
        top: 50px;
        left: 485px;
      }
    }
    .step2_room_img6 {
      width: 6%;
      top: 65px;
      left: 245px;
      @media (min-width: 768px) {
        width: 6%;
        top: 110px;
        left: 405px;
      }
    }
    .step2_room_img7 {
      width: 8%;
      top: 180px;
      left: 5px;
      @media (min-width: 768px) {
        width: 8%;
        top: 300px;
        left: 15px;
      }
    }
    .step2_room_img8 {
      width: 5%;
      top: 380px;
      left: 0;
      @media (min-width: 768px) {
        width: 5%;
        top: 630px;
        left: 0;
      }
    }
    .step2_room_img9 {
      width: 5%;
      top: 400px;
      left: 110px;
      @media (min-width: 768px) {
        width: 5%;
        top: 660px;
        left: 190px;
      }
    }
    .step2_room_img10 {
      position: absolute;
      width: 120px;
      height: 50px;
      top: 450px;
      left: 160px;
      @media (min-width: 768px) {
        width: 200px;
        height: 50px;
        top: 760px;
        left: 270px;
      }
    }
  }
}
</style>