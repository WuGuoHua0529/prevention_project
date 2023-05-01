<template>
  <div class="sideMenu">
    <div class="title">每天一點防災知識</div>
    <ListDrawer :data="listData" />

    <div class="title">發生災害時想看的資訊</div>
    <ImgListRow
      :data="infoData"
      :imgSrc="'info'"
      :title="'top'"
      parallelogram
      iconBox
    />

    <div class="title">人物誌攻略</div>
    <ImgListRow
      :data="peopleData"
      :imgSrc="'people'"
      :title="'bottom'"
      square
    />

    <div class="title">防災多媒體館</div>
    <ListDrawer
      :data="multimediaData"
      contentMore
    />

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
import ListDrawer from '@components/home/ListDrawer.vue';
import ImgListRow from '@components/home/ImgListRow.vue';

export default {
  name: 'SideMenu',
  components: {
    ListDrawer,
    ImgListRow
  },
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

    const infoData = reactive([
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

    const peopleData = reactive([
      { title: '高齡者', data: [1] },
      { title: '幼童', data: [2] },
      { title: '飼主', data: [3] },
      { title: '男/女性', data: [4] },
      { title: '身障者', data: [5] }
    ])

    const multimediaData = reactive([
      { number: '01', title: '短片', content: [] },
      { number: '02', title: '影劇', content: [] },
      { number: '03', title: '動畫', content: [] },
      { number: '04', title: '遊戲', content: [] },
      { number: '05', title: '書籍', content: [] },
      {
        number: '06',
        title: '場館體驗',
        content: [
          { name: '921地震教育園區', imgSrc: 'multimedia-1.png' },
          { name: '車壟埔斷層保存園區', imgSrc: 'multimedia-2.png' },
          { name: '莫拉克風災紀念館', imgSrc: 'multimedia-3.png' },
          { name: '國立台灣科學校教育館', imgSrc: 'multimedia-1.png' },
          { name: '桃園防災館', imgSrc: 'multimedia-2.png' },
          { name: '特色防災校園遊學路線', imgSrc: 'multimedia-3.png' }
        ]
      },
    ]);

    return {
      currentNumber,
      listData,
      infoData,
      peopleData,
      multimediaData
    }
  }
}
</script>
<style lang="scss" scoped>
.sideMenu {
  @media (min-width: 992px) {
    overflow-y: auto;
  }
  width: 100%;

  .title {
    height: 117px;
    font-size: 1.3rem;
    text-align: center;
    line-height: 117px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #008396;
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