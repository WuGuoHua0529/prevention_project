<template>
  <div class="sideMenu">
    <div class="title">每天一點防災知識</div>
    <ul>
      <li
        v-for="item in listData"
        :key="item.number"
        class="list_li"
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
      { number: '02', title: '為地震做好準備', content: '地震拉地震' },
      { number: '03', title: '防災的個別化需求', content: '性別歧視性別歧視性別歧視性別歧視性別歧視性別歧視性別歧視性別歧視性別歧視' },
      { number: '04', title: '地區防災資訊', content: '沒有訊息拉沒有訊息拉沒有訊息拉沒有訊息拉沒有訊息拉沒有訊息拉' },
      { number: '05', title: '防災博覽會', content: '勃勃勃膽會，勃勃勃膽會勃勃勃膽會，勃勃勃膽會勃勃勃膽會勃勃勃膽會勃勃勃膽會' },
      { number: '06', title: '互動遊戲', content: '遊戲人間遊戲人間遊戲人間遊戲人間遊戲人間遊戲人間' },
    ]);

    return {
      currentNumber,
      listData
    }
  }
}
</script>
<style scoped>
.sideMenu {
  width: 100%;
  /* white-space: nowrap; */
}

.title {
  height: 117px;
  font-size: 1.3rem;
  text-align: center;
  line-height: 117px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #008396;
}

.sideMenu ul {
  list-style-type: none;
}

.sideMenu ul li {
  padding: 1rem 3rem;
  color: #50afbd;
  cursor: pointer;
  border-top: 2px solid #c2d9dc;
}

.sideMenu ul li:last-child {
  border-bottom: 2px solid #c2d9dc;
}

.list_li {
  display: flex;
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
  transition: all 1s ease;
  height: 100%;
}
</style>