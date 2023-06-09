<template>
  <div class="disaster">
    <div class="header_title">災害可能發生的地方</div>
    <div
      v-for="item in contents_data1"
      :key="item.key"
    >
      <transition name="fade">
        <div
          v-show="showKey == item.key"
          class="content-container"
        >
          <div class="earthquake-first fade-in">
            <h2 class="unit_title">{{ item.unit_title }}</h2>
            <div class="subtitle">{{ item.subtitle }}</div>
            <ul
              v-for="(it, i) in item.data"
              :key="`data_${i}`"
            >
              <li
                class="introduction"
                :class="{ content_title: it.content_title }"
              >{{ it.content }}</li>
            </ul>
            <div class="progressbar"></div>
          </div>
          <img :src="require(`../img/earthquake_${item.key}.png`)">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: "Disaster",

  setup () {
    const contents_data1 = reactive(
      [
        {
          key: 1,
          unit_title: '地震災害',
          subtitle: '1.年代久遠的建築物',
          data: [
            { content: "1974年以前興建的房子，因為當時並無耐震設計規範，因此房屋大多不具有抗震能力。" },
            { content: "1974年以後興建的房子，由於耐震設計規範仍舊不足，加上部分房屋施工品質不夠確實，抗震能力普遍來說還是不佳。" },
            { content: "1999年九二一大地震後設計施工的房子，由於政府規範此後興建的建築物，結構耐震性必須達可承受震度5級以上的標準，因此結構安全相對較高。" },
            { content: "若擔心住家結構狀況，可找專家進行建物耐震評估，如有耐震補強需求，可向地方政府申請補助。" },
            { img: "../img/earthquake_1.png" }
          ]
        },
        {
          key: 2,
          subtitle: '2.結構不安全的建築物',
          data: [
            { content: "土造或磚造結構", content_title: true },
            { content: "土造的房屋內外沒有樑柱支撐，土塊難以承受水平搖晃的地震力，當地震震度達4~5級時即有倒塌風險。磚造的建築物沒有鋼筋，且柱子較小，受地震力破壞後易呈現破碎情況，難有逃生空間。" },
            { content: "一樓結構較軟弱", content_title: true },
            { content: "騎樓式建築、夾層屋設計、一樓樓層過度挑高，或將一樓隔間打通、柱子打掉而沒有補強，會使一樓的結構較其他樓層明顯軟弱，地震振動的能量便會集中在這個樓層，該樓層可能先行坍塌，導致其他樓層跟著倒塌。" },
            { content: "頂樓違章加蓋", content_title: true },
            { content: "增加建築物底層結構的負荷，會降低房屋的耐震力。" },
            { content: "延伸閱讀：一次搞懂：最危險和最安全的房屋結構" },
            { img: "../img/earthquake_2.png" }
          ]
        },
        {
          key: 3,
          subtitle: '3.易傾倒或墜落的物件',
          data: [
            { content: "近年臺灣地震，最常見到民眾家中出現電視摔落地面、家具擺飾品掉落、水塔傾倒等狀況。平時可做好家具固定措施，減少地震造成的財物損失。" },
            { content: "地震後外出避難時，則要盡量遠離圍牆、電線杆、屋頂的瓦片、空調室外機、花盆、窗戶玻璃等，這些可能墜落、倒塌或爆裂的物品。" },
            { img: "../img/earthquake_3.png" }
          ]
        },
        {
          key: 4,
          subtitle: '4.易發生震後火災的地點',
          data: [
            { content: "在菜市場及小吃攤，因為瓦斯桶存放數量較多，且經常用火，當遇到地震劇烈搖晃，若管線脫落就容易造成瓦斯外洩，注意可能釀成火災或氣爆。" },
            { content: "另外，在木造房屋較密集的地區若發生火災，則容易造成延燒現象；若是在巷弄狹窄的地方，則搶救不易，將導致災情擴大。" },
            { content: "地震後外出避難時，請盡量避開上述易發生火災的地點。" },
            { img: "../img/earthquake_4.png" }
          ]
        },
        {
          key: 5,
          subtitle: '5.易發生土壤液化的地區',
          data: [
            { content: "土壤液化是指土壤在地震影響下，土壤性質轉變為類似液體的狀態。這樣的現象會使土壤的強度大幅下降，可能引發建物損壞等災害。" },
            { content: "可前往「土壤液化潛勢查詢系統」，查詢住家是否位於土壤液化潛勢地區。若位於高度土壤液化潛勢區。" },
            { content: "若位於高度土壤液化潛勢區，可依照簡易自主檢查表自我檢視，也可向地方政府申請地質調查報告，再尋求大地技師的專業診斷。" },
            { img: "../img/earthquake_5.png" }
          ]
        }
      ]
    );
    let scrollNumUp = 0;
    let scrollNumDown = 0;
    const showKey = ref(1);
    let timer = false;

    window.addEventListener('wheel', (e) => {
      if (timer === true) {
        return;
      }
      const delta = Math.sign(e.deltaY);
      const range = Math.abs(e.deltaY);
      if (delta === 1) {
        scrollNumUp += range
        if (scrollNumUp > 180 && showKey.value > 1) {
          showKey.value--;
          scrollNumUp = 0;
          timer = true;
          setTimeout(() => {
            timer = false;
          }, 1000)
        }
      } else {
        scrollNumDown += range
        if (scrollNumDown > 180 && showKey.value < 5) {
          showKey.value++;
          scrollNumDown = 0;
          timer = true;
          setTimeout(() => {
            timer = false;
          }, 1000)
        }
      }
    })

    return {
      contents_data1,
      showKey
    }
  }
}
</script>

<style lang="scss" scoped>
/*字體載入*/
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap");

/*Reset CSS*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: "Noto Sans TC", sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*Header css*/
@media screen and (min-width: 1000px) {
  /*header下方的資訊標題*/
  .header_title {
    background-color: #ffeea3;
    border-radius: 0 0 0 248px;
    font-size: 30px;
    line-height: 70px;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    color: #5e5e5e;
    padding: 20px 0;
    margin-bottom: 35px;
  }

  /*內容區*/
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 232px;
    // height: 700px;
  }

  .content-container h2 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 78px;
    line-height: 113px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
    margin-bottom: 50px;
  }

  .earthquake-first > div {
    display: flex;
    flex-flow: wrap;
  }

  .earthquake-first > ul {
    width: 480px;
  }

  .earthquake-first > div ul {
    width: 80%;
  }

  .earthquake-first .subtitle {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.02em;
    color: #7095ab;
    margin-bottom: 24px;
  }

  .earthquake-first .text-title {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #5e5e5e;
  }

  .earthquake-first .introduction {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 156%;
    letter-spacing: 0.02em;
    color: #5e5e5e;
    margin-bottom: 24px;
    &.content_title {
      font-weight: bolder;
      margin-bottom: 6px;
    }
  }

  .content-container img {
    width: 45%;
  }
  .disaster {
    width: 100vw;
    height: 650px;
    overflow-y: hidden;
  }

  /* 滾動動畫css */
  .fade-enter-active {
    transition: opacity 0.8s ease;
  }
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
  .header_title {
    background-color: #ffeea3;
    font-size: 16px;
    line-height: 70px;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    color: #5e5e5e;
    padding: 9px 0;
    margin-bottom: 15px;
  }

  .content-container h2 {
    display: none;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 78px;
    line-height: 113px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
    margin-bottom: 100px;
  }
  .content-container {
    display: flex;
    align-items: center;
    flex-flow: column-reverse;
  }

  .content-container img {
    width: 100%;
    margin-bottom: 24px;
  }
  .earthquake-first {
    padding: 0 46px;
  }
  .earthquake-first > div {
    display: flex;
    flex-flow: wrap;
  }

  .earthquake-first > div ul {
    width: 80%;
  }

  .earthquake-first .text-title {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #5e5e5e;
  }

  .earthquake-first .introduction {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 156%;
    letter-spacing: 0.02em;
    color: #5e5e5e;
    margin-bottom: 12px;
    &.content_title {
      font-weight: bolder;
      margin-bottom: 6px;
    }
  }
  .earthquake-first .subtitle {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.02em;
    color: #7095ab;
    margin-bottom: 24px;
  }
  .disaster {
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
  }
}
</style>
