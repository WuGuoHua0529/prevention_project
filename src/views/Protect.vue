<template>
  <div>
    <div class="header">
      <div class="header-container">
        <div class="logo-title">
          <a href="#">一般民眾災害管理策略</a>
        </div>
        <ul class="menu">
          <li class="menu1">
            <a
              href="#"
              target="_blank"
            >
              每天一點防災知識
            </a>
          </li>
          <li class="menu2">
            <a
              href="#"
              target="_blank"
            >
              發生災害時想看的資訊
            </a>
          </li>
          <li class="menu3">
            <a
              href="#"
              target="_blank"
            >
              互動遊戲
            </a>
          </li>
          <a href="#">
            <div class="menu4">
              <div class="menu4-1"></div>
              <div class="menu4-2"></div>
            </div>
          </a>
        </ul>
      </div>
    </div>
    <div class="banner">
      <h1 class="banner-text">地震時怎麼保護自己</h1>
    </div>

    <div class="bar-container">
      <ul class="bar">
        <li class="bar1">
          <a href="#post1">在家中<div class="bar1-1"></div> </a>
        </li>
        <li class="bar2">
          <a href="#post2">公共空間<div class="bar2-1"></div> </a>
        </li>
        <li class="bar3">
          <a href="#post3">在開車<div class="bar3-1"></div> </a>
        </li>
        <li class="bar4">
          <a href="#post4">在戶外<div class="bar4-1"></div> </a>
        </li>
        <li class="bar5">
          <a href="#post5">搭乘大眾交通工具<div class="bar5-1"></div> </a>
        </li>
      </ul>
    </div>

    <div class="content-container">
      <div
        class="content-house"
        id="post1"
      >
        <div class="content-house-text">1.在家中</div>
        <div class="content-house-img">
          <!-- ../assets/img/page-photo/inHome/Frame1.png -->
          <Accordion :data="'保護好頭部、等待地震停止。'" />
          <!-- ../assets/img/page-photo/inHome/Frame2.png -->
          <Accordion
            :data="'避開冰箱、櫥櫃等易碎品，若可以即隨手關火，若遠離火源就等地震停止後再關閉爐火。'"
            more
          />
          <!-- ../assets/img/page-photo/inHome/Frame3.png -->
          <Accordion :data="'可用棉被或枕頭保護自己的頭頸部及身體。'" />
          <!-- ../assets/img/page-photo/inHome/Frame4.png -->
          <Accordion
            :data="'地板容易濕滑，不要慌忙離開，以就地保護頭頸部為原則。'"
            more
          />
          <div class="house5"></div>
          <div class="house6"></div>
        </div>
      </div>
      <div class="line"></div>
      <div
        id="post2"
        class="content-area"
      >
        <div class="content-area-text">2.在公共空間</div>
        <div class="content-area-img">
          <!-- ../assets/img/page-photo/在公共空間/Frame1.png -->
          <Accordion
            :data="'遠離窗戶玻璃、儲物櫃、影印機，可躲在堅固的桌子底下保護自己，並且不要使用電梯。'"
            more
          />
          <!-- ../assets/img/page-photo/在公共空間/Frame2.png -->
          <Accordion
            :data="'用隨身攜帶的包包放在頭頂保護頭部，避免掉落物砸傷。'"
            more
          />
          <!-- ../assets/img/page-photo/在公共空間/Frame3.png -->
          <Accordion
            :data="'按下各樓層按鈕和緊急開關，設法走出電梯。如果被困，使用緊急對講機與外界聯繫。'"
            more
          />
          <!-- ../assets/img/page-photo/在公共空間/Frame4.png -->
          <Accordion
            :data="'遠離容易傾倒的展示架、玻璃製品，用包包保護頭部。聽從工作人員的指示，不要搭乘電梯避難。'"
            more
          />
          <!-- ../assets/img/page-photo/在公共空間/Frame5.png -->
          <Accordion
            :data="'躲在座位之間，用背部保護頭部，等待地震平息。即使停電，緊急出口指示燈也會亮起，不要慌張。。'"
            more
          />
          <div class="area6"></div>
          <div class="area7"></div>
          <div class="area8"></div>
        </div>
      </div>

      <div class="line"></div>

      <div
        id="post3"
        class="content-car"
      >
        <div class="content-car-text">3.在開車</div>
        <div class="content-car-img">
          <!-- ../assets/img/page-photo/在開車/Frame1.png -->
          <Accordion
            :data="'按下各樓層按鈕和緊急開關，設法走出電梯。如果被困，使用緊急對講機與外界聯繫。'"
            more
          />
          <!-- ../assets/img/page-photo/在開車/Frame2.png -->
          <Accordion
            :data="'按下各樓層按鈕和緊急開關，設法走出電梯。如果被困，使用緊急對講機與外界聯繫。'"
            more
          />
          <div class="car3"></div>
          <div class="car4"></div>
        </div>
      </div>

      <div class="line"></div>

      <div
        id="post4"
        class="content-outside"
      >
        <div class="content-outside-text">4.在戶外</div>
        <div class="content-outside-img">
          <!-- ../assets/img/page-photo/在戶外/Frame1.png -->
          <Accordion
            :data="'市中心有較多的玻璃窗及招牌等掉落物，請保護好頭部，可前往大型公園避難。'"
            more
          />
          <!-- ../assets/img/page-photo/在戶外/Frame2.png -->
          <Accordion
            :data="'小心落石，遠離陡坡，因為鬆動的土石可能會崩落。'"
            more
          />
          <!-- ../assets/img/page-photo/在戶外/Frame3.png -->
          <Accordion
            :data="'如果在海邊感受到強烈地震，無需等待疏散指示和建議，即可離開前往安全的高處。'"
            more
          />
          <div class="outside4"></div>
        </div>
      </div>

      <div class="line"></div>

      <div
        id="post5"
        class="content-publictransportation"
      >
        <div class="content-publictransportation-text">5.在大眾交通工具</div>
        <div class="content-publictransportation-img">
          <!-- ../assets/img/page-photo/在大眾交通工具/Frame1.png -->
          <Accordion
            :data="'留意司機可能會突然剎車，請牢握把手、身體重心降低以免受傷。'"
            more
          />
          <!-- ../assets/img/page-photo/在大眾交通工具/Frame2.png -->
          <Accordion
            :data="'捷運行駛速度為每小時30至80公里，如果坐在座位上，請保持低位並用包包保護頭部。如果您站立，請牢牢握住扶手以防止跌倒。鐵軌旁安裝了高壓電力線，擅自跳上鐵軌是極其危險的。'"
            more
          />
          <!-- ../assets/img/page-photo/在大眾交通工具/Frame3.png -->
          <Accordion
            :data="'感受到強烈震動後，列車會緊急停車，停車後請遵從站務人員的指示。'"
            more
          />
          <div class="publictransportation4"></div>
        </div>

      </div>

    </div>
    <div class="footer-container">
      <div class="footer">
        <img src="../assets/img/page-photo/bg/bottom.png" />
      </div>
    </div>

  </div>

  <!-- ------------bg-------------- -->

  <div class="background-image">
    <div class="bg1">
      <img src="../assets/img/page-photo/bg/1.png" />
    </div>
    <div class="bg2">
      <img src="../assets/img/page-photo/bg/2.png" />
    </div>
    <div class="bg3">
      <img src="../assets/img/page-photo/bg/3.png" />
    </div>
    <div class="bg4">
      <img src="../assets/img/page-photo/bg/4.png" />
    </div>
    <div class="bg5">
      <img src="../assets/img/page-photo/bg/5.png" />
    </div>
    <div class="bg6">
      <img src="../assets/img/page-photo/bg/6.png" />
    </div>
    <div class="bg7">
      <img src="../assets/img/page-photo/bg/7.png" />
    </div>
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue';

export default {
  name: 'Protect',
  components: {
    Accordion
  },
  setup () {
  }
}
</script>

<style>
/* 清除預設 */
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
  text-decoration: none;
  list-style: none;
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

/* 聲明1rem等於多少px */
html {
  font-size: 20px;
}

body {
  width: 100%;
  background-color: #f5f5f5;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;
  position: relative;
}

@media screen and (min-width: 1024px) {
  /* ----------HEADER------------ */
  .header {
    width: 100%;
    height: 120px;
    background-color: #50afbd;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .logo-title {
    display: flex;
    height: 120px;
    padding-left: 70px;
    font-style: normal;
    font-size: 1.05rem;
    letter-spacing: 0.05em;
    font-weight: 500;
    justify-content: center;
    align-items: center;
  }

  .logo-title a {
    color: #faf8f6;
  }

  .menu {
    display: flex;
    align-items: center;
    padding-right: 90px;
    padding-left: 0;
    line-height: 29px;
  }

  .menu a {
    letter-spacing: 0.05em;
    color: #faf8f6;
    font-weight: 400;
    font-size: 0.75rem;
  }

  .menu1,
  .menu2 {
    margin-right: 30px;
  }

  .menu3 {
    margin-right: 45px;
  }

  .menu4 {
    display: flex;
    flex-direction: column;
    width: 35px;
    height: 15px;
    margin-top: 3.5px;
  }

  .menu4-1 {
    height: 3px;
    background-color: #faf8f6;
    border-radius: 1.5px;
  }

  .menu4-2 {
    height: 3px;
    margin-top: 10px;
    background-color: #faf8f6;
    border-radius: 1.5px;
  }

  /* ------BANNER------ */

  .banner {
    display: flex;
    width: 100%;
    height: 120px;
    background: #ffeea3;
    border-radius: 0px 0px 0px 248px;
    align-items: center;
    justify-content: center;
  }

  .banner-text {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 93px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
  }

  .bar {
    padding-top: 70px;
    display: flex;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 37.65px;
  }

  .bar1,
  .bar2,
  .bar3,
  .bar4,
  .bar5 {
    display: flex;
    margin: 0 23px;
  }

  .bar1-1,
  .bar2-1,
  .bar3-1,
  .bar4-1,
  .bar5-1 {
    width: 8px;
    height: 8px;
    border-top: 1.5px solid;
    border-right: 1.5px solid;
    display: inline-block;
    transform: rotate(135deg);
    margin-left: 12px;
    margin-bottom: 4px;
  }

  .bar a {
    color: #5e5e5e;
  }

  /* ----------CONTENT----------- */

  /* inHome */

  .content-house {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-house-text {
    font-style: normal;
    font-size: 1.1rem;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    padding-right: 745px;
  }

  .content-house-img {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  /* 在公共空間 */

  .content-area {
    margin-top: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .content-area-text {
    padding-right: 700px;
    font-style: normal;
    font-size: 1.1rem;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    display: flex;
  }

  .content-area-img {
    display: flex;
    flex-wrap: wrap;
    margin: 40px;
    justify-content: center;
  }

  /* 在開車 */

  .content-car {
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-car-text {
    font-style: normal;
    font-size: 1.1rem;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    padding-right: 735px;
  }

  .content-car-img {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .car3,
  .car4 {
    width: 210px;
    height: 210px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在戶外 */

  .content-outside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 350px;
  }

  .content-outside-text {
    font-style: normal;
    font-size: 1.1rem;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    padding-right: 745px;
  }

  .content-outside-img {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-left: -13px;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .outside4 {
    width: 210px;
    height: 210px;
    margin: 0 5px 50px;
  }

  /* 在大眾交通工具 */

  .content-publictransportation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 300px;
  }

  .content-publictransportation-text {
    font-style: normal;
    font-size: 1.1rem;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    padding-right: 660px;
  }

  .content-publictransportation-img {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-left: -13px;
  }

  .publictransportation4 {
    width: 210px;
    height: 210px;
    margin: 0 5px 50px;
  }

  /* --------footer-------- */

  .footer {
    margin-top: 300px;
    width: 100%;
  }

  .footer img {
    width: 100%;
  }

  /* ---bg---- */

  .background-image {
    width: 100%;
    overflow: hidden;
  }

  .bg1 {
    position: absolute;
    right: 50px;
    top: 435px;
    z-index: -2;
  }

  .bg1 img {
    width: 80%;
  }

  .bg2 {
    position: absolute;
    top: 445px;
    z-index: -2;
  }

  .bg2 img {
    width: 99.9%;
  }

  .bg3 {
    position: absolute;
    top: 1750px;
    width: 100%;
    overflow: hidden;
    z-index: -2;
  }

  .bg3 img {
    width: 120%;
    overflow: hidden;
    height: 1200px;
  }

  .bg4 {
    position: absolute;
    top: 1800px;
    right: 0px;
    overflow: hidden;
    z-index: -2;
  }

  .bg5 {
    position: absolute;
    top: 3000px;
    right: 0px;
    height: 1000px;
    overflow: hidden;
    z-index: -2;
  }

  .bg6 {
    position: absolute;
    top: 2800px;
    right: 0;
    overflow: hidden;
    z-index: -2;
  }

  .bg7 {
    position: absolute;
    top: 800px;
    left: -5 px;
  }

  .bg7 img {
    width: 90%;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  /* ----------HEADER------------ */
  .header {
    width: 100%;
    height: 100px;
    background-color: #50afbd;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .logo-title {
    display: flex;
    height: 100px;
    padding-left: 40px;
    font-style: normal;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    font-weight: 500;
    justify-content: center;
    align-items: center;
  }

  .logo-title a {
    color: #faf8f6;
  }

  .menu {
    display: flex;
    align-items: center;
    padding-right: 40px;
    padding-left: 0;
    line-height: 29px;
  }

  .menu a {
    letter-spacing: 0.05em;
    color: #faf8f6;
    font-weight: 400;
    font-size: 0.75rem;
  }

  .menu1,
  .menu2 {
    margin-right: 30px;
  }

  .menu3 {
    margin-right: 45px;
  }

  .menu4 {
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 15px;
    margin-top: 3.5px;
  }

  .menu4-1 {
    height: 3px;
    background-color: #faf8f6;
    border-radius: 1.5px;
  }

  .menu4-2 {
    height: 3px;
    margin-top: 10px;
    background-color: #faf8f6;
    border-radius: 1.5px;
  }

  /* ------BANNER------ */

  .banner {
    display: flex;
    width: 100%;
    height: 100px;
    background: #ffeea3;
    border-radius: 0px 0px 0px 248px;
    align-items: center;
    justify-content: center;
  }

  .banner-text {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 100px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
  }

  .bar {
    padding-top: 55px;
    display: flex;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 37.65px;
  }

  .bar1,
  .bar2,
  .bar3,
  .bar4,
  .bar5 {
    display: flex;
    justify-content: center;
    margin: 0 20px;
  }

  .bar1-1,
  .bar2-1,
  .bar3-1,
  .bar4-1,
  .bar5-1 {
    width: 8px;
    height: 8px;
    border-top: 1.5px solid;
    border-right: 1.5px solid;
    display: inline-block;
    transform: rotate(135deg);
    margin-left: 12px;
    margin-bottom: 4px;
  }

  .bar a {
    color: #5e5e5e;
  }

  /* ---------------------------------- */

  /* inHome */

  .content-house {
    margin: 30px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-house-text {
    font-style: normal;
    font-size: 18px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-house-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* 在公共空間 */

  .content-area {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-area-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-area-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .area6,
  .area7,
  .area8 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在開車 */

  .content-car {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-car-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-car-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* 在戶外 */

  .content-outside {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-outside-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-outside-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* 在大眾交通工具 */

  .content-publictransportation {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-publictransportation-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-publictransportation-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* 分隔線 */
  .line {
    border-top: 1px solid;
    margin: 0 auto;
    width: 87%;
    color: #50afbd;
  }

  .footer {
    margin-top: 64px;
    width: 100%;
  }

  .footer img {
    width: 100%;
  }

  .bg1,
  .bg2,
  .bg3,
  .bg4,
  .bg5,
  .bg6,
  .bg7 {
    display: none;
  }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  /* ----------HEADER------------ */
  .header {
    width: 100%;
    height: 80px;
    background-color: #50afbd;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .logo-title {
    display: flex;
    height: 80px;
    padding-left: 30px;
    font-style: normal;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    font-weight: 500;
    justify-content: center;
    align-items: center;
  }

  .logo-title a {
    color: #faf8f6;
  }

  .menu {
    display: flex;
    align-items: center;
    padding-right: 30px;
    padding-left: 0;
    line-height: 29px;
  }

  .menu a {
    letter-spacing: 0.05em;
    color: #faf8f6;
    font-weight: 400;
    font-size: 0.4rem;
  }

  .menu1,
  .menu2 {
    display: none;
    margin-right: 20px;
  }

  .menu3 {
    display: none;
    margin-right: 30px;
  }

  .menu4 {
    display: flex;
    flex-direction: column;
    width: 20px;
    height: 15px;
    margin-top: 7px;
  }

  .menu4-1 {
    height: 2px;
    background-color: #faf8f6;
    border-radius: 0.5px;
  }

  .menu4-2 {
    height: 2px;
    margin-top: 8px;
    background-color: #faf8f6;
    border-radius: 0.5px;
  }

  /* ------BANNER------ */

  .banner {
    display: flex;
    width: 100%;
    height: 80px;
    background: #ffeea3;
    border-radius: 0px 0px 0px 248px;
    align-items: center;
    justify-content: center;
  }

  .banner-text {
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.05em;
    color: #5e5e5e;
  }

  .bar {
    padding-top: 55px;
    display: flex;
    justify-content: center;
    font-size: 0.65rem;
    font-weight: 400;
    line-height: 37.65px;
  }

  .bar1,
  .bar2,
  .bar3,
  .bar4,
  .bar5 {
    display: flex;
    justify-content: center;
    margin: 0 12px;
  }

  .bar1-1,
  .bar2-1,
  .bar3-1,
  .bar4-1,
  .bar5-1 {
    width: 6px;
    height: 6px;
    border-top: 1.5px solid;
    border-right: 1.5px solid;
    display: inline-block;
    transform: rotate(135deg);
    margin-left: 12px;
    margin-bottom: 4px;
  }

  .bar a {
    color: #5e5e5e;
  }

  /* ----------CONTENT----------- */

  /* inHome */

  .content-house {
    margin: 30px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-house-text {
    font-style: normal;
    font-size: 18px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-house-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .house5,
  .house6 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在公共空間 */

  .content-area {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-area-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-area-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-self: start;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .area6 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在開車 */

  .content-car {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-car-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-car-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  /* 在戶外 */

  .content-outside {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-outside-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-outside-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .outside4 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在大眾交通工具 */

  .content-publictransportation {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-publictransportation-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-publictransportation-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .publictransportation4 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 分隔線 */
  .line {
    border-top: 1px solid;
    margin: 0 auto;
    width: 87%;
    color: #50afbd;
  }

  .footer {
    margin-top: 64px;
    width: 100%;
  }

  .footer img {
    width: 100%;
  }

  .bg1,
  .bg2,
  .bg3,
  .bg4,
  .bg5,
  .bg6,
  .bg7 {
    display: none;
  }
}

@media screen and (max-device-width: 480px) {
  /* ----------HEADER------------ */

  .header {
    width: 100%;
    height: 76px;
    background-color: #50afbd;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .logo-title {
    display: flex;
    height: 76px;
    padding-left: 20px;
    font-style: normal;
    font-size: 13px;
    letter-spacing: 0.05em;
    font-weight: 500;
    justify-content: center;
    align-items: end;
  }

  .logo-title a {
    color: #faf8f6;
    padding-bottom: 17px;
  }

  .menu {
    display: flex;
    align-items: end;
    padding-right: 20px;

    line-height: 29px;
  }

  .menu1,
  .menu2,
  .menu3 {
    display: none;
  }

  .menu4 {
    display: flex;
    flex-direction: column;
    width: 22px;
    height: 15px;
    margin-top: 3.5px;
    padding-bottom: 15px;
  }

  .menu4-1 {
    height: 2px;
    background-color: #faf8f6;
    border-radius: 1.5px;
  }

  .menu4-2 {
    height: 2px;
    margin-top: 7px;
    background-color: #faf8f6;
    border-radius: 1.5px;
  }

  /* ------BANNER------ */

  .banner {
    display: flex;
    width: 100%;
    height: 40px;
    background: #ffeea3;
    align-items: center;
    justify-content: center;
  }

  .banner-text {
    font-weight: 500;
    font-style: normal;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #5e5e5e;
  }

  /* 選單 */

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eaf9fb;
    height: 42px;
    font-size: 10px;
    font-weight: 300;
    line-height: 17px;
    padding: 0 20px;
  }

  .bar1,
  .bar2,
  .bar3,
  .bar4,
  .bar5 {
    display: flex;
  }

  .bar a {
    color: #5e5e5e;
  }

  /* ----------CONTENT----------- */

  /* inHome */

  .content-house {
    margin: 30px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-house-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-house-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* 在公共空間 */

  .content-area {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-area-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-area-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .area6 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在開車 */

  .content-car {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-car-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-car-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  /* 在戶外 */

  .content-outside {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-outside-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-outside-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .outside4 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 在大眾交通工具 */

  .content-publictransportation {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-publictransportation-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #50afbd;
    line-height: 46px;
    letter-spacing: 0.05rem;
    margin-bottom: 18px;
  }

  .content-publictransportation-img {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  /*其他部分做成元件，剩下這個獨立部分在非元件區域製作*/

  .publictransportation4 {
    width: 170px;
    height: 170px;
    margin: 0 5px 50px;
  }
  /*-------------------------*/

  /* 分隔線 */
  .line {
    border-top: 1px solid;
    margin: 0 auto;
    width: 86%;
    color: #50afbd;
  }

  .footer {
    margin-top: 64px;
    width: 100%;
  }

  .footer img {
    width: 100%;
  }

  .bg1,
  .bg2,
  .bg3,
  .bg4,
  .bg5,
  .bg6,
  .bg7 {
    display: none;
  }
}
</style>
