<template>
  <ul class="list_drawer">
    <li
      v-for="item in data"
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
          <template v-if="contentMore">
            <Row>
              <Col
                v-for="(it, i) in item.content"
                :key="`content_${i}`"
                class="content_more"
                span="12"
              >
              <img :src="require(`@assets/img/home/multimedia/${it.imgSrc}`)" />
              <p>{{ it.name }}</p>
              </Col>
            </Row>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ListDrawer',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    contentMore: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const currentNumber = ref('01');

    return {
      currentNumber
    }
  }
}
</script>
<style lang="scss" scoped>
.list_drawer {
  list-style-type: none;

  li {
    padding: 1rem 2rem;
    color: #50afbd;
    cursor: pointer;
    border-top: 2px solid #c2d9dc;
    &:last-child {
      border-bottom: 2px solid #c2d9dc;
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

    .content_more {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 20px;
      margin-bottom: 20px;
      p {
        font-size: 12px;
        font-weight: 400;
      }
      img {
        width: 52px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>