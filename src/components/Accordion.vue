<template>
  <div
    class="accordion"
    :class="{ 'hover-container': startHoverStates , 'rwd-container-img': rwdWidth }"
  >
    <img
      class="accordion_img"
      :class="{ 'hover-container-img': startHoverStates , 'rwd-img': rwdWidth }"
      :src="require(`@assets/img/page-photo/${imgSrc}`)"
      alt=""
    ><img/>
    <div
      v-if="startHoverStates"
      class="hover-content"
    >
      <div class="hover_text">{{ data }}</div>
    </div>

    <div
      v-else
      class="accordion_content"
    >
      <div
        class="accordion_text"
        :class="{ 'text': more, 'collapse': collapseStates }"
      >{{ data }}</div>
      <div
        v-if="more"
        class="Accordion_btn"
        :class="{ 'active': !collapseStates }"
        @click="changeState"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Accordion',
  props: {
    data: {
      type: String,
      default: ''
    },
    more: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: 'inhome/inhome_1.png'
    }
  },
  setup () {
    const startHoverStates = ref(true);
    //  但是只要頁面刷新，就不會觸發，需要改

    const collapseStates = ref(true);
    // const rwdWidth = ref(false);

    function changeState () {
      collapseStates.value = !collapseStates.value;
    }

    // 1.監聽尺寸大於ＸＸＸ
    window.addEventListener('resize', function () {
      console.log('ffff');
      if (window.innerWidth >= 1024) {
        startHoverStates.value = true
      } else {

        startHoverStates.value = false
      }

    });

    //  2.監聽尺寸大於ＸＸＸ
    //  window.addEventListener('resize', function() {
    //   console.log('ccc44');
    //   if (window.innerWidth <= 1024 && window.innerWidth >= 767 ){
    //     rwdWidth.value = true
    //   }else{

    //     rwdWidth.value = false 
    //     // 跑不出東西????
    //   }

    // });

    return {
      startHoverStates,
      collapseStates,
      changeState,
      // rwdWidth,

    }
  }
}
</script>

<style scoped>
.rwd-container-img {
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin: 0 5px 50px;
  width: 190px;
  height: 190px;
}

.rwd-img {
  width: 190px;
  height: 190px;
  margin: 0 15px;
  z-index: -1;
}

/*小於過1024 手風琴式對話筐的css*/
.accordion {
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin: 0 5px 50px;
  width: 170px;
  height: 170px;
}

.accordion_img {
  width: 170px;
  height: 170px;
  margin: 0 15px;
  z-index: -1;
}

.accordion_content {
  position: absolute;
  top: 133px;
  display: flex;
  flex-direction: column;
  width: 154px;
  padding-bottom: 10px;
  background: #ffeea3;
  border-radius: 0 0 20px 20px;
}

.accordion_text {
  text-align: center;
  padding: 10px 14px 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.06em;
  color: #5e5e5e;
}

.Accordion_btn {
  display: block;
  margin: 5px auto;
  color: #5e5e5e;
  width: 6px;
  height: 6px;
  border-top: 1.3px solid;
  border-right: 1.3px solid;
  transform: rotate(135deg);
  z-index: 2;
}

.collapse {
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.text {
  background-color: #ffeea3;
  border-radius: 0 0 20px 20px;
}

.active {
  transform: rotate(-45deg);
}

/*超過1024 hover對話筐的css*/

.hover-container {
  position: relative;
  width: 210px;
  height: 210px;
  margin: 0px 10px;
  align-items: start;
}
.hover-container-img {
  width: 210px;
  height: 210px;
}
.hover-container:nth-child(5) {
  margin-top: 140px;
  width: 76%;
}
.hover-container:hover .hover-content {
  display: block;
  position: absolute;
}
.hover-content {
  display: none;
  top: 170px;
  left: 40px;
  width: 225px;
  height: 65px;
}
.hover_text {
  padding: 20px 20px 20px 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 130%;
  letter-spacing: 0.07em;
  color: #5e5e5e;
  text-align: left;
  background: #ffeea3;
  border-radius: 0px 17px 17px 45px;
}
</style>
