<template>
  <Row class="imgList_row">
    <Col
      v-for="(item, index) in data"
      :key="`data_${index}`"
      class="imgList_col"
      span="12"
    >
    <div
      class="white_box"
      :class="{
        'parallelogram': parallelogram,
        'square': square,
        'flex_end': title === 'bottom'
      }"
    >
      <p
        v-if="title==='top'"
        class="imgList_title"
      >
        {{ item.title }}
      </p>
      <div>
        <img
          v-for="it in item.data"
          :key="`dataImg_${it}`"
          :class="iconBox ? 'icon_box' : 'img_box'"
          :src="require(`@assets/img/home/${imgSrc}/${imgSrc}-${it}.png`)"
        />
      </div>
      <p
        v-if="title === 'bottom'"
        class="imgList_title"
      >
        {{ item.title }}
      </p>
    </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'ImgListRow',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    imgSrc: {
      type: String,
      default: ''
    },
    square: {
      type: Boolean,
      default: false
    },
    parallelogram: {
      type: Boolean,
      default: false
    },
    iconBox: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'top'
    }
  },
  setup () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.imgList_row {
  padding: 0 5px;
  .imgList_col {
    width: 170px;
    height: 170px;
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .imgList_title {
    color: #50afbd;
  }

  .white_box {
    max-width: 170px;
    min-width: 150px;
    width: 100%;
    height: 100%;
    position: relative;
    background: #ffffff;
    box-shadow: 0px 8px 17px -2px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &.flex_end {
      justify-content: flex-end;
      padding-bottom: 20px;
    }
  }

  .square {
    border-radius: 38px;
  }

  .parallelogram {
    border-radius: 24px 64px;
  }

  .icon_box {
    width: 45px;
    padding: 0 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    margin-top: 5px;
  }

  .img_box {
    width: 45px;
    margin-bottom: 5px;
  }
}
</style>