<template>
  <div class="nav_phone">
    <div class="nav_phoneRow">
      <div class="nav_slogan">每天一點防災知識</div>
      <div class="nav_phoneCol">
        <ul
          v-for="(item, index) in data"
          :key="`ul_${index}`"
          class="ul_title"
        >
          <li
            class="li_title"
            @click="item.open = !item.open"
          >
            {{ item.title }}
            <i
              v-if="item.data.length"
              class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"
              :class="{ 
                'arrow_open': item.open,
              }"
            ></i>
          </li>
          <transition name="slide-up">
            <ul v-if="item.open">
              <router-link
                v-for="(it, i) in item.data"
                :key="`patn_${i}`"
                v-slot="{ navigate }"
                custom
                :to="{ name: it.path }"
              >
                <li
                  class="options_li"
                  @click="navigate"
                >
                  - {{ it.name }}
                </li>
              </router-link>
            </ul>
          </transition>
        </ul>
      </div>
    </div>
    <img
      class="footer_nav"
      src="@assets/img/footer-nav.png"
    >
  </div>
</template>

<script>
export default {
  name: 'PhoneNav',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.nav_phone {
  width: 100%;
  transition: height 0.5s ease;
  position: relative;
  overflow: hidden;
  z-index: 999;
  background: #fff;
  padding: 0px 10%;

  .nav_slogan {
    width: 100%;
    font-weight: 500;
    font-size: 1.7rem;
    color: #5e5e5e;
    border-bottom: 1px solid #50afbd;
    padding-left: 15%;
  }

  .nav_phoneRow {
    padding-top: 20px;
    border-bottom: 1px solid #50afbd;
  }

  .nav_phoneCol {
    height: 100%;
    padding-left: 15%;
  }

  .ul_title {
    list-style-type: none;
    margin-top: 20px;
    margin-bottom: 20px;
    .li_title {
      letter-spacing: 0.05em;
      font-size: 16px;
      line-height: 156%;
      color: #5e5e5e;
      cursor: pointer;
      margin: 10px 0;
    }
  }

  .options_li {
    font-weight: 300;
    margin: 10px 0;
    padding-left: 20px;
  }

  .arrow_open {
    transform: rotate(180deg);
  }

  .footer_nav {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
