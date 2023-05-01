<template>
  <div
    class="imgHoverbox_row"
    @mouseenter="opHover(true)"
    @mouseleave="opHover(false)"
    @click="callBackText"
  >
    <div
      v-if="hoverDom"
      class="hover_text"
      :style="{
        'width': width
      }"
    >
      {{ hoverText }}
    </div>
    <img
      v-if="imgName"
      :src="require(`@assets/img/earthquake/step2/${imgName}`)"
    />
    <div
      v-else
      class="img_div"
    ></div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "ImgHoverbox",
  props: {
    hoverText: {
      type: String,
      default: ''
    },
    imgName: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '200px'
    },
    hoverAction: {
      type: Boolean,
      default: true
    }
  },
  emit: ['callBackText'],
  setup (props, context) {
    const hoverDom = ref(false);

    function callBackText () {
      context.emit('callBackText', props.hoverText);
    }

    function opHover (states) {
      if (props.hoverAction) {
        hoverDom.value = states
      }
    }

    return {
      hoverDom,
      callBackText,
      opHover
    };
  },
};
</script>

<style lang="scss" scoped>
.imgHoverbox_row {
  position: relative;

  img,
  .img_div {
    width: 100%;
    height: 100%;
  }
}

.hover_text {
  position: absolute;
  top: -60%;
  left: 25%;
  height: 89px;
  background: #50afbd;
  border-radius: 64px 24px 24px 0px;
  color: #fff;
  text-align: center;
  line-height: 89px;
  padding: 0 10%;
  z-index: 3;
}
</style>