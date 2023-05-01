<template>
  <div
    class="header"
    :class="{ 'hidden': hiddenHeaderStates  }"
  >
    <div class="row">
      <router-link
        v-slot="{ navigate }"
        custom
        :to="{ name: 'Home' }"
      >
        <div
          class="title"
          @click="navigate"
        >
          <img src="@assets/img/logo.png" />
          一起來防災
        </div>
      </router-link>
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
    <Row>
      <Col
        :xs="0"
        :sm="0"
        :md="24"
        :lg="24"
      >
      <DesktopNav
        :data="navData"
        class="nav_row"
        :class="{ 'open': listOpenStates }"
      />
      </Col>
      <Col
        :xs="24"
        :sm="24"
        :md="0"
        :lg="0"
      >
      <PhoneNav
        :data="navData"
        class="nav_row"
        :class="{ 'open': listOpenStates }"
      />
      </Col>
    </Row>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';
import DesktopNav from '@components/layout/DesktopNav.vue';
import PhoneNav from '@components/layout/PhoneNav.vue';

export default {
  name: 'Header',
  components: {
    DesktopNav,
    PhoneNav
  },
  setup () {
    const listOpenStates = ref(false);
    const hiddenHeaderStates = ref(true);

    const store = useStore();

    watch(() => store.getters.getHeaderHidden, (value) => {
      hiddenHeaderStates.value = value;
    }, { immediate: true });

    const navData = reactive([
      {
        title: '為梅雨及颱風季節做好準備',
        open: false,
        data: [
          { name: '災害可能發生的地方' },
          { name: '防災可以這麼做' },
        ]
      },
      {
        title: '為地震做好準備',
        open: false,
        data: [
          { name: '災害可能發生的地方', path: 'Disaster' },
          { name: '防災可以這麼做', path: 'Earthquake' },
          { name: '地震時怎麼保護自己', path: 'Protect' }
        ]
      },
      {
        title: '人物誌攻略',
        open: false,
        data: []
      },
      {
        title: '災害來臨需要的資訊',
        open: false,
        data: []
      },
      {
        title: '防災多媒體館',
        open: false,
        data: [
          { name: '小遊戲' }
        ]
      },
    ])

    return {
      listOpenStates,
      hiddenHeaderStates,
      navData
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #50afbd;
  height: 90px;
  width: 100%;
  transition: height 1s ease;
  &.hidden {
    height: 0px;
  }

  .row {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    color: white;
  }

  .title {
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
  }
}

.burger {
  @media (min-width: 768px) {
    width: 50px;
  }
  width: 30px;
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

  span {
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
    &:nth-child(1) {
      top: 42%;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 50%;
      opacity: 0;
    }
    &:nth-child(4) {
      top: 58%;
    }
  }

  &.open {
    span {
      &:nth-child(1) {
        top: 42%;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        -webkit-transform: rotate(20deg);
        -moz-transform: rotate(20deg);
        -o-transform: rotate(20deg);
        transform: rotate(20deg);
        opacity: 1;
      }
      &:nth-child(3) {
        -webkit-transform: rotate(-20deg);
        -moz-transform: rotate(-20deg);
        -o-transform: rotate(-20deg);
        transform: rotate(-20deg);
        opacity: 1;
      }
      &:nth-child(4) {
        top: 58%;
        width: 0%;
        left: 50%;
      }
    }
  }
}

.nav_row {
  height: 0px;
  &.open {
    height: 100vh;
    @media (min-width: 768px) {
      height: 268px;
    }
  }
}
</style>
