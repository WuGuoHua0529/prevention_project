<template>
  <div class="nav_desktop">
    <div class="nav_slogan">每天一點防災知識</div>
    <div class="row">
      <ul
        v-for="(item, index) in data"
        :key="`ul_${index}`"
      >
        <li class="title">{{ item.title }}</li>
        <router-link
          v-for="(it, i) in item.data"
          :key="`listPatn_${i}`"
          v-slot="{ navigate }"
          custom
          :to="{ name: it.path }"
        >
          <li @click="navigate">
            {{ it.name }}
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopNav',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.nav_desktop {
  width: 100%;
  transition: height 0.5s ease;
  position: relative;
  overflow: hidden;
  z-index: 999;
  background: #bedee4;

  .nav_slogan {
    width: 80%;
    font-weight: 700;
    font-size: 28px;
    color: #008396;
    margin: 30px 0px 20px 100px;
  }

  .row {
    height: 100%;
    padding: 0px 100px;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  ul {
    list-style-type: none;
    li {
      font-style: normal;
      font-weight: 400;
      font-size: 0.5rem;
      line-height: 26px;
      letter-spacing: 0.05em;
      color: #008396;
      &:not(.title) {
        cursor: pointer;
      }
    }

    .title {
      font-weight: 500;
      font-size: 1rem;
      line-height: 22px;
      color: #008396;
      border-bottom: 1px solid #50afbd;
      margin-bottom: 11px;
    }
  }
}
</style>
