<template>
  <template v-for="item in contents_data2" :key="item.key">
    <Transition name="fade">
      <div class="content-container" ref="scrollArea">
        <div class="earthquake-first fade-in">
          <h2 class="unit_title">{{ item.unit_title }}</h2>
          <div class="subtitle">{{ item.subtitle }}</div>
          <ul v-for="(it, i) in item.data" :key="`data_${i}`" >
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
name:"EarthquakeObj2View",
setup () {
  const contents_data2 = reactive(
    [
      {
        key: 1,
        unit_title: '水患災害',
        subtitle: '1.洪水攻擊岸',
        data: [
          { content: "洪水攻擊岸位於河川溪流轉彎處，水流撞擊的位置，是溪水淘刷的主要區域。平時可以留意此區域的邊坡，是否出現地基下陷、堤防破損、房屋傾斜的狀況。" },
          { content: "颱風季節則要提防河水可能會從此處溢流到社區，造成淹水災情，可先做好疏散撤離的準備。" },
          { img: "../img/earthquake_1.png" }
        ]
      },
      {
        key: 2,
        subtitle: '2.沿河低窪地區',
        data: [
          { content: "緊鄰河川且座落在地勢較為平坦的低位河階台地，由於過去曾是洪水流經的區域，" },
          { content: "若上游的洪水量一但突增，就可能面臨再次被洪水淹沒的風險，建議平時就要制定好疏散避難計畫。" },
          { img: "../img/earthquake_2.png" }
        ]
      },
      {
        key: 3,
        subtitle: '3.河川交匯處',
        data: [
          { content: "在河川主支流交匯處，若主流的水位高於支流，支流的水就會難以流入主流，甚至使主流洪水倒灌回支流，導致支流回堵。" },
          { content: "住家若位在支流低窪處，颱風豪雨期間就要十分留意，一旦河川水位暴漲，就可能面臨淹水。可在住家門口裝設防水閘門，降低洪水流入住家的風險。" },
          { img: "../img/earthquake_3.png" }
        ]
      },
      {
        key: 4,
        subtitle: '4.河道阻塞',
        data: [
          { content: "若看見河道中雜草叢生、有大面積水生植物、堆放大型垃圾(如家具、建築廢棄物)，" },
          { content: "在颱風豪雨期間，就可能卡在橋墩、涵洞入口處，使河水宣洩受阻，並影響排水功能，進而提高淹水災情的產生。" },
          { content: "汛期前將河道雜物清空，便能降低河道阻塞的情況產生。" },
          { img: "../img/earthquake_4.png" }
        ]
      },
      {
        key: 5,
        subtitle: '5.河堤護岸毀損',
        data: [
          { content: "觀察住家周遭是否有河堤，若河堤結構體出現破裂或變形、河堤基腳有淘空現象，一旦發生溢堤便容易造成潰堤，引發嚴重淹水災情。" },
          { content: "若發現河堤出現破裂或毀損，請通報地方政府進行修補，以減少淹水致災的情況產生。" },
          { img: "../img/earthquake_5.png" }
        ]
      }
    ]
  );
  
  return {
    contents_data2,
  }
}
}
</script>

<style>
/*字體載入*/
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');

/*Reset CSS*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
font-family: 'Noto Sans TC', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
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

h1{
font-size: 28px;
color: #FAF8F6;
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

color: #FAF8F6;
}

/*header下方的資訊標題*/
.title {
background-color: #FFEEA3;
border-radius: 0 0 0 248px;
}

.title h2 {
font-size: 48px;
line-height: 70px;
text-align: center;
font-style: normal;
font-weight: 700;
color: #5E5E5E;
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
font-family: 'Noto Sans TC';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 24px;
letter-spacing: 0.05em;
color: #5E5E5E;
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
font-family: 'Noto Sans TC';
font-style: normal;
font-weight: 700;
font-size: 78px;
line-height: 113px;
letter-spacing: 0.05em;
color: #5E5E5E;
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
font-family: 'Noto Sans TC';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 29px;
letter-spacing: 0.02em;
color: #7095AB;
margin-bottom: 24px;
}

.earthquake-first .text-title{
font-family: 'Noto Sans TC';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 26px;
letter-spacing: 0.04em;
color: #5E5E5E;
}

.earthquake-first .introduction {
font-family: 'Noto Sans TC';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 156%;
letter-spacing: 0.02em;
color: #5E5E5E;
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

.fade-enter-from
.fade-leave-to {
/* opacity: 0; */
}
</style>