<template>
  <Row
    align="center"
    justify="space-between"
    class="step_container  px-10"
  >
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_number">8</div>
    </Col>
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_title">準備外出避難防災包</div>
    </Col>
  </Row>
  <Row
    align="center"
    justify="space-between"
    class="step_container px-10"
  >
    <Col
      class="step8_img_col ivu-p-16"
      :xs="{ span: 0 }"
      :sm="{ span: 0 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <transition name="ease">
      <img
        v-if="imgNumber === 0"
        ref="step8ImgDom"
        class="step8_img"
        :style="imgTop ? 'top: 30%' : ''"
        :src="require(`@assets/img/earthquake/step8/Group_step8_0.png`)"
      />
    </transition>
    <transition name="ease">
      <img
        v-if="imgNumber === 1"
        ref="step8ImgDom"
        class="step8_img"
        :style="imgTop ? 'top: 30%' : ''"
        :src="require(`@assets/img/earthquake/step8/Group_step8_1.png`)"
      />
    </transition>
    <transition name="ease">
      <img
        v-if="imgNumber === 2"
        ref="step8ImgDom"
        class="step8_img"
        :style="imgTop ? 'top: 30%' : ''"
        :src="require(`@assets/img/earthquake/step8/Group_step8_2.png`)"
      />
    </transition>
    <transition name="ease">
      <img
        v-if="imgNumber === 3"
        ref="step8ImgDom"
        class="step8_img"
        :style="imgTop ? 'top: 30%' : ''"
        :src="require(`@assets/img/earthquake/step8/Group_step8_3.png`)"
      />
    </transition>
    <transition name="ease">
      <img
        v-if="imgNumber === 4"
        ref="step8ImgDom"
        class="step8_img"
        :style="imgTop ? 'top: 30%' : ''"
        :src="require(`@assets/img/earthquake/step8/Group_step8_4.png`)"
      />
    </transition>
    </Col>
    <Col
      class="ivu-p-16"
      :xs="{ span: 0 }"
      :sm="{ span: 0 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
      style="margin-bottom: 200px;"
    >
    <div
      v-for="item in listData"
      :key="item.number"
      class="step8_content"
      ref="step8ContentDom"
    >
      <span class="list_number">{{ item.number }}</span>
      <div class="list_title">{{ item.title }}</div>
      <div class="list_content">{{ item.content }}</div>
    </div>
    </Col>
  </Row>
  <Row>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 0 }"
      :lg="{ span: 0 }"
    >
    <swiper-container autoPlay="false">
      <swiper-slide
        v-for="(item, index) in listData"
        :key="item.number"
        class="step8_slide"
      >
        <div class="step8_slide_row">
          <div>
            <div class="step8_slide_title">
              <span>{{ item.number }}</span>
              <span>{{ item.title }}</span>
            </div>
            <div class="step8_slide_content">{{ item.content }}</div>
          </div>
          <img
            class="step8_img"
            :src="require(`@assets/img/earthquake/step8/Group_step8_${index}.png`)"
          />
        </div>
      </swiper-slide>
    </swiper-container>
    </Col>
  </Row>
</template>

<script>
import { register } from 'swiper/element/bundle';
register();
import { onMounted, reactive, ref } from "vue";
export default {
  name: "Step8",
  setup () {
    const imgNumber = ref(0);
    const listData = reactive([
      {
        number: "01",
        title: "留意住家傢俱傾倒",
        content:
          "災後調查發現，住家常出現的災損包含櫥櫃、電視及水塔的傾倒毀壞，平時若能先將傢俱與家電固定好，打造出地震時沒有掉落物、墜落物、玻璃爆裂可能的空間，就能提高生命安全與降低財產損失。",
      },
      {
        number: "02",
        title: "小心賣場貨架倒塌",
        content:
          "地震時若在超市賣場，要小心貨架可能會倒塌，輕鋼架天花板也可能掉落砸傷，特別要留意擺放玻璃容器的調味醬料區以及罐裝飲料區，當玻璃或飲料瓶罐掉落時，容易使人遭受波及。",
      },
      {
        number: "03",
        title: "電線杆與圍牆傾倒",
        content:
          "在臺灣及日本的地震事件中，都曾出現過民眾因圍牆倒塌致死的案例，提醒在室外要遠離圍牆、電線杆、花盆等，傾倒後會使人受傷的物件。",
      },
      {
        number: "04",
        title: "震後不敢待在室內",
        content:
          "強烈的地震會使人不敢待在室內，前往空曠的公園(備置帳篷設備)，或是選擇在汽車上(留意通風與保暖，並且定期活動雙腿)避難，這些可成為平時為地震進行防災準備的考量之一。",
      },
      {
        number: "05",
        title: "避難場所為開放空間",
        content:
          "前往收容場所避難時，要有心理準備隱私與舒適性不如家中，因為是公共空間，可能會出現睡覺時燈光還開啟的狀態，聽到周圍人的打呼聲而無法入睡，每個人對於廁所使用後的整潔維持標準不一等，另外也要留意貴重物品要隨身攜帶的情況。",
      },
    ]);

    const step8ImgDom = ref(null);
    const step8ContentDom = ref(null);

    let states = ref(false);
    let imgTop = ref(false);
    let showStates = ref(false);


    onMounted(() => {
      window.addEventListener("scroll", (e) => {
        if (!step8ContentDom.value.length || !step8ImgDom.value) {
          return;
        }
        if (step8ImgDom.value.offsetTop > step8ContentDom.value[0].offsetTop) {
          imgTop.value = true;
        } else {
          imgTop.value = false;
        }

        if (!states.value) {
          step8ContentDom.value.forEach((item, index) => {
            if (step8ImgDom.value.offsetTop > item.offsetTop - 170 && index > imgNumber.value) {
              imgNumber.value = index;
              states.value = true;
              setTimeout(() => {
                states.value = false;
              }, 500);
            } else if (step8ImgDom.value.offsetTop < item.offsetTop + 170 && index <= imgNumber.value) {
              imgNumber.value = index;
              states.value = true;
              setTimeout(() => {
                states.value = false;
              }, 500);
            }
          });
        }
      });

    });

    return {
      listData,
      imgNumber,
      step8ContentDom,
      step8ImgDom,
      imgTop,
      states,
      showStates
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
    @media (min-width: 768px) {
    }
  }
}

.step8_content {
  margin-bottom: 100px;
  &:last-child {
    margin-bottom: 0;
  }
  .list_number {
    color: #50afbd;
    font-size: 24px;
    line-height: 35px;
  }

  .list_title {
    font-weight: normal;
    font-size: 28px;
    line-height: 52px;
    letter-spacing: 0.1em;
    margin-top: 10px;
  }

  .list_content {
    font-size: 18px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0.1em;
    margin-top: 10px;
    padding-bottom: 30px;
    border-bottom: 1px solid #50afbd;
  }
}

.step8_img_col {
  text-align: right;
}

.step8_img {
  width: 75%;
  position: sticky;
  top: 0;
  padding-top: 20px;
  margin-right: 30px;
}

.step8_slide {
  padding: 0 10%;
  .step8_slide_row {
    box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
    border-radius: 44px;
    height: 450px;
    padding: 10% 10% 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .step8_slide_title {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #008396;
    span:nth-child(1) {
      font-size: 12px;
      margin-right: 10px;
    }
  }
  .step8_slide_content {
    text-align: center;
    margin-top: 16px;
  }
}
</style>