<template>
  <div class="sideMenu">
    <div class="title">每天一點防災知識</div>
    <ul>
      <li
        v-for="item in listData"
        :key="item.number"
        class="list_li"
        :class="{ 'active': item.number === currentNumber }"
        @click="currentNumber = item.number"
      >
        <span class="list_number">{{ item.number }}</span>
        <div>
          <div class="list_title">{{ item.title }}</div>
          <div
            class="list_content"
            :class="{ 'active': item.number === currentNumber }"
          >
            {{ item.content }}
          </div>
        </div>
      </li>
    </ul>
    <div class="title">發生災害時想看的資訊</div>
    <Row class="list_two">
      <Col
        v-for="(item, index) in listTwoData"
        :key="`circle_${index}`"
        class="circle_row"
        span="12"
      >
      <div class="white_circle">
        <!-- <p>{{ item.title }}</p> -->
        <img
          v-for="it in item.data"
          :key="`img_${it}`"
          class="info_img"
          :src="require(`@assets/img/home/info-${it}.png`)"
        />
      </div>

      </Col>
    </Row>
    <div class="sideMenu_footer">
      <div class="footer_title">
        <p>國家災害防救科技中心</p>
        <p>Copyright 2023行政法人國家災害防救科技中心</p>
        <p>All rights reserved</p>
      </div>
      <img
        class="footer_img"
        src="@assets/img/footer-min.png"
      >
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'SideMenu',
  setup () {
    const currentNumber = ref('01');

    const listData = reactive([
      { number: '01', title: '為梅雨及颱風季節做好準備', content: '除了日常的物資外，還需要準備緊急避難包，當地震發生後的物資外，還需要準備緊急避難包，當地震發生後....' },
      { number: '02', title: '為地震做好準備', content: '除了日常的物資外，還需要準備緊急避難包，當地震發生後的物資外，還需要準備緊急避難包，當地震發生後....' },
      { number: '03', title: '防災的個別化需求', content: '除了日常的物資外，還需要準備緊急避難包，當地震發生後的物資外，還需要準備緊急避難包，當地震發生後....' },
      { number: '04', title: '地區防災資訊', content: '除了日常的物資外，還需要準備緊急避難包，當地震發生後的物資外，還需要準備緊急避難包，當地震發生後....' },
      { number: '05', title: '防災博覽會', content: '除了日常的物資外，還需要準備緊急避難包，當地震發生後的物資外，還需要準備緊急避難包，當地震發生後....' },
      { number: '06', title: '互動遊戲', content: '除了日常的物資外，還需要準備緊急避難包，當地震發生後的物資外，還需要準備緊急避難包，當地震發生後....' },
    ]);

    const listTwoData = reactive([
      { title: '各類災害示警', data: [1, 2] },
      { title: '天氣資訊', data: [3, 4] },
      { title: '降雨資訊', data: [5] },
      { title: '地震資訊', data: [6, 7] },
      { title: '土石流資訊', data: [8] },
      { title: '淹水', data: [9, 10] },
      { title: '查詢相關APP', data: [11] },
      { title: '停水資訊', data: [12, 13] },
      { title: '停電通報查詢', data: [14] }
    ])

    return {
      currentNumber,
      listData,
      listTwoData
    }
  }
}
</script>
<style lang="scss" scoped>
.sideMenu {
  width: 100%;
  overflow-y: auto;

  .title {
    height: 117px;
    font-size: 1.3rem;
    text-align: center;
    line-height: 117px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #008396;
  }

  ul {
    list-style-type: none;
    li {
      padding: 1rem 3rem;
      color: #50afbd;
      cursor: pointer;
      border-top: 2px solid #c2d9dc;
      &:last-child {
        border-bottom: 2px solid #c2d9dc;
      }
    }
  }

  .list_li {
    display: flex;
    &.active {
      background: #50afbd;
      color: white;
      .list_number {
        color: white;
      }
    }

    .list_number {
      color: #50afbd;
      margin-right: 10px;
      border-bottom: 1px solid;
      height: 21px;
    }

    .list_title {
      font-weight: bolder;
      font-size: 15px;
      letter-spacing: 0.08em;
    }

    .list_content {
      font-size: 14px;
      font-weight: 300;
      opacity: 0;
      margin-top: 0px;
      height: 0;
    }

    .active {
      opacity: 1;
      margin-top: 20px;
      transition: height 1s ease;
      transition: margin-top 1s ease;
      height: 100%;
    }
  }

  .list_two {
    padding: 0 5px;
    .circle_row {
      width: 170px;
      height: 170px;
      padding: 10px;
    }

    .white_circle {
      width: 100%;
      height: 100%;
      position: relative;
      background: #ffffff;
      box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
      border-radius: 24px 64px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info_img {
      width: 30%;
      padding: 0 2px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
      border-radius: 10px;
    }
  }

  .sideMenu_footer {
    margin-top: 200px;
    position: relative;

    .footer_title {
      position: absolute;
      top: 12%;
      text-align: center;
      padding: 0 10px;
      color: #5e5e5e;
      width: 100%;
    }

    .footer_title p:nth-child(1) {
      margin: 10px 0;
      font-size: 15px;
    }

    .footer_title p:not(:nth-child(1)) {
      margin: 5px 0;
      font-size: 13px;
    }

    .footer_img {
      width: 100%;
      display: block;
    }
  }
}
</style>