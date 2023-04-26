<template>
  <div
    class="header"
    :class="{ 'hidden': hiddenHeaderStates  }"
  >
    <div class="row_header">
      <div class="title_header">一起來防災</div>
      <ul class="ul_header">
        <li>每天一點防災知識</li>
        <li>災害來臨需要的資訊</li>
        <li>小遊戲</li>
      </ul>
      <div
        class="burger"
        @click="listOpenStates = !listOpenStates"
        :class="{ 'open': listOpenStates }"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      class="list_header"
      :class="{ 'open': listOpenStates }"
    >
      <div class="list_row">
        <ul>
          <li class="title">為梅雨及颱風季節做好準備</li>
          <li>災害可能發生的地方</li>
          <li>防災可以這麼做</li>
        </ul>
        <ul>
          <li class="title">為地震做好準備</li>
          <li>災害可能發生的地方</li>
          <li>防災可以這麼做</li>
          <li>地震時怎麼保護自己</li>
        </ul>
        <ul>
          <li class="title">人物誌攻略</li>
          <li>災害可能發生的地方</li>
          <li>防災可以這麼做</li>
          <li>地震時怎麼保護自己</li>
        </ul>
        <ul>
          <li class="title">各縣市防災專區</li>
          <li>災害可能發生的地方</li>
          <li>防災可以這麼做</li>
          <li>地震時怎麼保護自己</li>
        </ul>
        <ul>
          <li class="title">防災多媒體館</li>
          <li>災害可能發生的地方</li>
          <li>防災可以這麼做</li>
          <li>地震時怎麼保護自己</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Header',
  setup () {
    const listOpenStates = ref(false);
    const hiddenHeaderStates = ref(false);

    const store = useStore();

    watch(() => store.getters.getHeaderHidden, (value) => {
      hiddenHeaderStates.value = value;
    });

    return {
      listOpenStates,
      hiddenHeaderStates
    }
  }
}
</script>
<style scoped>
.header {
  background-color: #50afbd;
  height: 90px;
  width: 100%;
  transition: height 1s ease;
}

.header.hidden {
  height: 0px;
}

.row_header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  color: white;
}

.title_header {
  font-weight: 700;
  font-size: 1.5rem;
}

.ul_header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font-weight: 500;
  font-size: 1rem;
}

.ul_header li {
  padding: 0 0.5rem;
}

.burger {
  width: 50px;
  height: 100%;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.burger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.burger span:nth-child(1) {
  top: 42%;
}

.burger span:nth-child(2),
.burger span:nth-child(3) {
  top: 50%;
  opacity: 0;
}

.burger span:nth-child(4) {
  top: 58%;
}

.burger.open span:nth-child(1) {
  top: 42%;
  width: 0%;
  left: 50%;
}

.burger.open span:nth-child(2) {
  -webkit-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  -o-transform: rotate(20deg);
  transform: rotate(20deg);
  opacity: 1;
}

.burger.open span:nth-child(3) {
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  -o-transform: rotate(-20deg);
  transform: rotate(-20deg);
  opacity: 1;
}

.burger.open span:nth-child(4) {
  top: 58%;
  width: 0%;
  left: 50%;
}

.list_header {
  width: 100%;
  height: 0px;
  transition: height 0.5s ease;
  position: relative;
  overflow: hidden;
}

.list_header.open {
  height: 218px;
}

.list_row {
  height: 100%;
  padding: 60px 100px;
  background: #bedee4;
  display: flex;
  justify-content: space-between;
}

.list_header ul {
  list-style-type: none;
}

.list_header ul li {
  font-style: normal;
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #008396;
}

.list_header ul li:not(.title) {
  cursor: pointer;
}

.list_header ul .title {
  font-weight: 500;
  font-size: 1rem;
  line-height: 29px;
  color: #008396;
}
</style>
