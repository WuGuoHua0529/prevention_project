<template>
  <div class="step8_container">
    <div class="step8_number">8</div>
    <div class="step8_title">地震事件經驗學習</div>
  </div>

  <div class="step8_ex">
    <div
      class="step8_ex_img"
      ref="imgBox"
    >
      <img
        :src="
          require(`@assets/img/earthquake/step8/Group_step8_${imgNumber}.png`)
        "
        alt=""
      />
    </div>
    <div class="step8_ex_info">
      <ul>
        <li
          v-for="item in listData"
          :key="item.number"
          class="list_li"
          ref="listNumber"
        >
          <span class="list_number">{{ item.number }}</span>
          <div class="list_title">{{ item.title }}</div>
          <div class="list_content">{{ item.content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Step8",
  setup () {
    const imgNumber = ref(0);
    const listNumber = ref(null);
    const listData = reactive([
      {
        number: "01",
        title: "留意住家傢俱傾倒",
        img: "../image/Group_step8_1.png",
        content:
          "災後調查發現，住家常出現的災損包含櫥櫃、電視及水塔的傾倒毀壞，平時若能先將傢俱與家電固定好，打造出地震時沒有掉落物、墜落物、玻璃爆裂可能的空間，就能提高生命安全與降低財產損失。",
      },
      {
        number: "02",
        title: "小心賣場貨架倒塌",
        img: "../image/Group_step8_2.png",
        content:
          "地震時若在超市賣場，要小心貨架可能會倒塌，輕鋼架天花板也可能掉落砸傷，特別要留意擺放玻璃容器的調味醬料區以及罐裝飲料區，當玻璃或飲料瓶罐掉落時，容易使人遭受波及。",
      },
      {
        number: "03",
        title: "電線杆與圍牆傾倒",
        img: "../image/Group_step8_3.png",
        content:
          "在臺灣及日本的地震事件中，都曾出現過民眾因圍牆倒塌致死的案例，提醒在室外要遠離圍牆、電線杆、花盆等，傾倒後會使人受傷的物件。",
      },
      {
        number: "04",
        title: "震後不敢待在室內",
        img: "../image/Group_step8_4.png",
        content:
          "強烈的地震會使人不敢待在室內，前往空曠的公園(備置帳篷設備)，或是選擇在汽車上(留意通風與保暖，並且定期活動雙腿)避難，這些可成為平時為地震進行防災準備的考量之一。",
      },
      {
        number: "05",
        title: "避難場所為開放空間",
        img: "../image/Group_step8_5.png",
        content:
          "前往收容場所避難時，要有心理準備隱私與舒適性不如家中，因為是公共空間，可能會出現睡覺時燈光還開啟的狀態，聽到周圍人的打呼聲而無法入睡，每個人對於廁所使用後的整潔維持標準不一等，另外也要留意貴重物品要隨身攜帶的情況。",
      },
    ]);

    window.addEventListener("scroll", (e) => {
      listNumber.value.forEach((item, index) => {
        if (
          window.scrollY > item.offsetTop - item.offsetHeight - 90 &&
          index > imgNumber.value
        ) {
          imgNumber.value = index;
        }

        if (window.scrollY < item.offsetTop && index < imgNumber.value) {
          imgNumber.value = index;
        }
      });
    });

    return {
      listData,
      imgNumber,
      listNumber,
    };
  },
};
</script>

<style lang="scss">
.step8_container {
  margin: 300px auto 0 auto;
  width: 1100px;
  display: flex;
  .step8_number {
    margin-top: -100px;
    font-weight: 500;
    font-size: 220px;
    letter-spacing: 0.05em;
    -webkit-text-stroke: 4px #50afbd;
    color: #ffffff;
  }
  .step8_title {
    margin-top: 100px;
    margin-left: 70px;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.05em;
    color: #50afbd;
  }
}

.step8_ex {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 100px;
  margin-bottom: 50px;
  .step8_ex_img {
    position: sticky;
    top: 30%;
    left: 0;
  }
  .step8_ex_info {
    width: 600px;
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin-bottom: 180px;
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
          font-size: 36px;
          line-height: 52px;
          letter-spacing: 0.1em;
          margin-top: 10px;
        }

        .list_content {
          font-size: 24px;
          font-weight: 500;
          line-height: 35px;
          letter-spacing: 0.1em;
          margin-top: 10px;
          padding-bottom: 30px;
          border-bottom: 1px solid #50afbd;
        }
      }
    }
  }
}
</style>