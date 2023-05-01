<template>
  <template
    v-for="item in contents_data3"
    :key="item.key"
  >
    <Transition name="fade">
      <div
        class="content-container"
        ref="scrollArea"
      >
        <div class="earthquake-first fade-in">
          <h2 class="unit_title">{{ item.unit_title }}</h2>
          <div class="subtitle">{{ item.subtitle }}</div>
          <ul
            v-for="(it, i) in item.data"
            :key="`data_${i}`"
          >
            <li class="introduction">{{ it.content }}</li>
          </ul>
          <div class="progressbar"></div>
        </div>
        <img :src="require(`../img/earthquake_${item.key}.png`)">
      </div>
    </Transition>
  </template>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: "EarthquakeObj3View",
  setup () {
    const contents_data3 = reactive(
      [
        {
          key: 1,
          unit_title: '坡地災害',
          subtitle: '1.陡峭邊坡',
          data: [
            { content: "若房子座落在陡峭邊坡之上，要留意下邊坡是否出現土石流失，導致地基下陷，進而使建築物發生傾斜或塌陷等破壞。" },
            { content: "若房子座落在陡峭邊坡之下，則需要留意上邊坡的土石，是否出現墜落、滑動及落石的狀況。" },
            { content: "颱風豪雨時，遠離陡峭邊坡。颱風豪雨過後，可以觀察邊坡上是否有新生崩塌地產生，崩塌地的裸露面積或是坡腳處的落石是否有擴大發展的趨勢。" },
            { img: "../img/earthquake_1.png" }
          ]
        },
        {
          key: 2,
          subtitle: '2.結構不安全的建築物',
          data: [
            { content: "土造或磚造結構" },
            { content: "土造的房屋內外沒有樑柱支撐，土塊難以承受水平搖晃的地震力，當地震震度達4~5級時即有倒塌風險。磚造的建築物沒有鋼筋，且柱子較小，受地震力破壞後易呈現破碎情況，難有逃生空間。" },
            { content: "一樓結構較軟弱" },
            { content: "騎樓式建築、夾層屋設計、一樓樓層過度挑高，或將一樓隔間打通、柱子打掉而沒有補強，會使一樓的結構較其他樓層明顯軟弱，地震振動的能量便會集中在這個樓層，該樓層可能先行坍塌，導致其他樓層跟著倒塌。" },
            { content: "頂樓違章加蓋" },
            { content: "增加建築物底層結構的負荷，會降低房屋的耐震力。" },
            { content: "延伸閱讀：一次搞懂：最危險和最安全的房屋結構" },
            { img: "../img/earthquake_2.png" }
          ]
        },
        {
          key: 3,
          subtitle: '3.順向坡',
          data: [
            { content: "住家若鄰近順向坡，需要特別注意順向坡的穩定情況。當順向坡地形因土地開發削去坡腳使層面露出，若雨水從層面入滲便會增加坡面荷重，順向坡就容易沿滑動面往下滑落。" },
            { content: "可前往「3D災害潛勢地圖」網站，查詢住家是否位於順向坡上。若住家位於順向坡、擔憂其風險，可尋求專家確認並檢查穩定情形，以評估是否會危及社區安全，並進一步制定社區防災計畫。" },
            { img: "../img/earthquake_3.png" }
          ]
        },
        {
          key: 4,
          subtitle: '4.溪溝或土石流潛勢溪流',
          data: [
            { content: "觀察住家附近邊坡，是否有水流匯集的溪溝，雖然平時溪溝水流不大，不過在颱風豪雨期間，這些溪溝可能會爆發山洪或流出大量土石，造成房舍被掩埋、沖刷、撞擊的災情。" },
            { content: "可前往「3D災害潛勢地圖」網站，了解住家是否面臨土石流災害風險。" },
            { img: "../img/earthquake_4.png" }
          ]
        },
        {
          key: 5,
          subtitle: '5.山區邊坡與道路',
          data: [
            { content: "當坡面上的樹林或電線桿突然傾斜，就要特別留意邊坡是否有正在滑動的趨勢。也可以觀察山區道路是否出現裂縫，當道路的上邊坡或下邊坡有滑動現象，道路便會產生變形或裂縫。" },
            { content: "在颱風豪雨期間，這些裂縫可作為道路塌陷前兆的參考，由於有交通中斷的可能，居住在此區的民眾，平時可預先準備充足的糧食與個人藥物。" },
            { img: "../img/earthquake_5.png" }
          ]
        },
        {
          key: 6,
          subtitle: '6.擋土牆',
          data: [
            { content: "擋土牆的功能主要是保護邊坡安定，當擋土牆結構發生破壞，例如開裂、變形或傾倒，表示後方邊坡發生滑動。" },
            { content: "颱風豪雨時，可觀察排水孔是否正常出水，若無法出水，會使檔土牆承受大量的水壓，可能會超出原本設計的抵抗強度；若是排水孔排出混濁帶泥的水流，則表示擋土牆背後的回填土正在流失或淘空。" },
            { content: "當發現擋土牆出現上述情況，可請專業技師或通報地方政府調查鑑定檔土牆的結構安全狀況。" },
            { img: "../img/earthquake_5.png" }
          ]
        }
      ]
    );

    return {
      contents_data3,
    }
  }
}
</script>

<style scoped>
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
body {
  line-height: 1;
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
header {
  width: 100%;
  background-color: #50afbd;
  display: flex;
  justify-content: space-between;
  padding: 30px 120px;
  box-sizing: border-box;
  align-items: center;
}

h1 {
  font-size: 28px;
  color: #faf8f6;
}

header ul {
  display: flex;
  justify-content: space-evenly;
}

header ul li {
  margin-right: 36px;
}

header ul li p {
  font-size: 20px;

  color: #faf8f6;
}

/*header下方的資訊標題*/
.title {
  background-color: #ffeea3;
  border-radius: 0 0 0 248px;
}

.title h2 {
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  color: #5e5e5e;
  padding: 35px 0;
}

/*緢點按鈕*/
.anchor_btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 125px 393px;
}

.anchor_btn li {
  display: flex;
  align-items: center;
}

.anchor_btn button {
  border: none;
  background: transparent;
}

.anchor_btn p {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #5e5e5e;
}

.anchor_btn img {
  width: 16px;
  height: 16px;
}

/*內容區*/
.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 232px;
}

.content-container h2 {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
  line-height: 113px;
  letter-spacing: 0.05em;
  color: #5e5e5e;
  margin-bottom: 100px;
}

.earthquake-first {
  /* display: flex;
justify-content: space-between;
align-items: center; */
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

/* .earthquake-first > div ul:nth-child(2) {
margin: 24px 0;
} */

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
}

.content-container img {
  width: 60%;
}

/* 滾動動畫css */
.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.5s ease; */
}

.fade-enter-from .fade-leave-to {
  /* opacity: 0; */
}
</style>