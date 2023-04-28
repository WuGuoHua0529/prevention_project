<template>
  <div class="step2_container">
    <div class="step2_number">2</div>
    <div class="step2_info">
      <div class="step2_title">打造安心的居家環境</div>
      <div class="step2_text">
        地震時，有很高的受傷比率來自於傢俱物品的翻倒掉落，平時即可為住家進行安全檢查，透過固定裝置加以穩固，以保護好自己。
      </div>
      <div class="step2_tips"><span>滑鼠移動到物品，找找小彩蛋^^</span></div>
    </div>
  </div>

  <div class="step2_img">
    <div class="step2_room">
      <div class="step2_room_img">
        <img
          @mouseenter="mouseenter1"
          @mouseleave="mouseleave1"
          class="step2_room_img1"
          src="../image/ZhQnNv_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter2"
          @mouseleave="mouseleave2"
          class="step2_room_img2"
          src="../image/p0LXdg_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter3"
          @mouseleave="mouseleave3"
          class="step2_room_img3"
          src="../image/iW7900_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter4"
          @mouseleave="mouseleave4"
          class="step2_room_img4"
          src="../image/UN2B5Z_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter5"
          @mouseleave="mouseleave5"
          class="step2_room_img5"
          src="../image/oaFDqL_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter6"
          @mouseleave="mouseleave6"
          class="step2_room_img6"
          src="../image/DJiTt2_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter7"
          @mouseleave="mouseleave7"
          class="step2_room_img7"
          src="../image/X1qIPx_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter8"
          @mouseleave="mouseleave8"
          class="step2_room_img8"
          src="../image/D2ILGZ_2_.png"
          alt=""
        />
        <img
          @mouseenter="mouseenter9"
          @mouseleave="mouseleave9"
          class="step2_room_img9"
          src="../image/iur3jX_2_.png"
          alt=""
        />
        <div
          @mouseenter="mouseenter10"
          @mouseleave="mouseleave10"
          class="step2_room_img10"
        ></div>
        <span class="img_tip_text img_text1_position" id="imgTip1"
          >窗戶加裝窗簾、防碎玻璃貼，避免玻璃碎裂飛濺</span
        >
        <span class="img_tip_text img_text2_position" id="imgTip2"
          >L型角鐵固定</span
        >
        <span class="img_tip_text img_text3_position" id="imgTip3"
          >餐具下鋪止滑墊</span
        >
        <span class="img_tip_text img_text4_position" id="imgTip4"
          >床邊準備包覆性拖鞋</span
        >
        <span class="img_tip_text img_text5_position" id="imgTip5"
          >使用防傾倒裝置</span
        >
        <span class="img_tip_text img_text6_position" id="imgTip6"
          >放置防倒板</span
        >
        <span class="img_tip_text img_text7_position" id="imgTip7"
          >固定家電用品</span
        >
        <span class="img_tip_text img_text8_position" id="imgTip8"
          >冰箱使用防傾倒裝置</span
        >
        <span class="img_tip_text img_text9_position" id="imgTip9"
          >放置住宅用滅火器</span
        >
        <span class="img_tip_text img_text10_position" id="imgTip10"
          >玻璃拉門貼上防護膜</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Step2",
  setup() {
    const mouseenter1 = () => {
      document.querySelector("#imgTip1").style.display = "block";
    };
    const mouseleave1 = () => {
      document.querySelector("#imgTip1").style.display = "none";
    };
    const mouseenter2 = () => {
      document.querySelector("#imgTip2").style.display = "block";
    };
    const mouseleave2 = () => {
      document.querySelector("#imgTip2").style.display = "none";
    };
    const mouseenter3 = () => {
      document.querySelector("#imgTip3").style.display = "block";
    };
    const mouseleave3 = () => {
      document.querySelector("#imgTip3").style.display = "none";
    };
    const mouseenter4 = () => {
      document.querySelector("#imgTip4").style.display = "block";
    };
    const mouseleave4 = () => {
      document.querySelector("#imgTip4").style.display = "none";
    };
    const mouseenter5 = () => {
      document.querySelector("#imgTip5").style.display = "block";
    };
    const mouseleave5 = () => {
      document.querySelector("#imgTip5").style.display = "none";
    };
    const mouseenter6 = () => {
      document.querySelector("#imgTip6").style.display = "block";
    };
    const mouseleave6 = () => {
      document.querySelector("#imgTip6").style.display = "none";
    };
    const mouseenter7 = () => {
      document.querySelector("#imgTip7").style.display = "block";
    };
    const mouseleave7 = () => {
      document.querySelector("#imgTip7").style.display = "none";
    };
    const mouseenter8 = () => {
      document.querySelector("#imgTip8").style.display = "block";
    };
    const mouseleave8 = () => {
      document.querySelector("#imgTip8").style.display = "none";
    };
    const mouseenter9 = () => {
      document.querySelector("#imgTip9").style.display = "block";
    };
    const mouseleave9 = () => {
      document.querySelector("#imgTip9").style.display = "none";
    };
    const mouseenter10 = () => {
      document.querySelector("#imgTip10").style.display = "block";
    };
    const mouseleave10 = () => {
      document.querySelector("#imgTip10").style.display = "none";
    };

    return {
      mouseenter1,
      mouseleave1,
      mouseenter2,
      mouseleave2,
      mouseenter3,
      mouseleave3,
      mouseenter4,
      mouseleave4,
      mouseenter5,
      mouseleave5,
      mouseenter6,
      mouseleave6,
      mouseenter7,
      mouseleave7,
      mouseenter8,
      mouseleave8,
      mouseenter9,
      mouseleave9,
      mouseenter10,
      mouseleave10,
    };
  },
};
</script>

<style>
/* step2 */
.step2_container {
  margin: 200px auto 0 auto;
  width: 700px;
  display: flex;
  justify-content: space-between;
}

.step2_container .step2_number {
  font-weight: 500;
  font-size: 220px;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 4px #50afbd;
  color: #ffffff;
}

.step2_container .step2_info {
  width: 480px;
  /* margin-right: 50px; */
}

.step2_container .step2_title {
  margin-top: 60px;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: #50afbd;
}

.step2_container .step2_text {
  margin-top: 28px;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: 0.02em;
  color: #5e5e5e;
}

.step2_container .step2_tips {
  position: relative;
  width: 290px;
  margin-top: 25px;
  border-bottom: 1px solid #50afbd;
}

.step2_container .step2_tips span {
  margin-left: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0.1em;
  color: #50afbd;
}

.step2_container .step2_tips::before {
  content: "";
  width: 41px;
  height: 41px;
  background-image: url(../image/easter-egg\ 1.png);
  position: absolute;
  bottom: -10px;
  left: -30px;
}

.step2_img {
  width: 100%;
  height: 1500px;
  padding: 300px 0 0 0;
  background-size: 110%;
  background-repeat: no-repeat;
  background-image: url(../image/Vector11.png);
}

.step2_img .step2_room {
  width: 45%;
  height: 1200px;
  margin: 0 auto;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../image/step2_room.png);
}

.step2_img .step2_room_img {
  width: 100%;
  height: 100%;
  position: relative;
}

.step2_img .step2_room_img1 {
  position: absolute;
  top: -160px;
  left: 130px;
}
.step2_img .step2_room_img2 {
  position: absolute;
  top: -160px;
  left: 380px;
}
.step2_img .step2_room_img3 {
  position: absolute;
  top: 40px;
  left: 25px;
}
.step2_img .step2_room_img4 {
  position: absolute;
  top: 75px;
  left: 255px;
}
.step2_img .step2_room_img5 {
  position: absolute;
  top: 48px;
  left: 622px;
}
.step2_img .step2_room_img6 {
  position: absolute;
  top: 134px;
  left: 516px;
}
.step2_img .step2_room_img7 {
  position: absolute;
  top: 365px;
  left: 9px;
}
.step2_img .step2_room_img8 {
  position: absolute;
  top: 863px;
  left: 0px;
}
.step2_img .step2_room_img9 {
  position: absolute;
  top: 872px;
  left: 250px;
}
.step2_img .step2_room_img10 {
  width: 38%;
  height: 8%;
  position: absolute;
  top: 976px;
  left: 350px;
  opacity: 0;
  background-color: white;
}

.img_tip_text {
  display: none;
  padding: 32px;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: 0.02em;
  white-space: nowrap;
  color: #faf8f6;
  background-color: #50afbd;
  border-radius: 64px 24px 24px 0px;
}

.img_text1_position {
  position: absolute;
  top: -262px;
  left: 191px;
}

.img_text2_position {
  position: absolute;
  top: -202px;
  left: 514px;
}

.img_text3_position {
  position: absolute;
  top: 0;
  left: 64px;
}

.img_text4_position {
  position: absolute;
  top: 14px;
  left: 280px;
}

.img_text5_position {
  position: absolute;
  top: 75px;
  left: 650px;
}

.img_text6_position {
  position: absolute;
  top: 147px;
  left: 534px;
}

.img_text7_position {
  position: absolute;
  top: 415px;
  left: 45px;
}

.img_text8_position {
  position: absolute;
  top: 810px;
  left: 13px;
}

.img_text9_position {
  position: absolute;
  top: 810px;
  left: 278px;
}

.img_text10_position {
  position: absolute;
  top: 950px;
  left: 390px;
}
</style>