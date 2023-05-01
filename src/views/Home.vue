<template>
  <Row
    class="home"
    :class="{ 'min': headerHidden === false }"
  >
    <Col
      class="video_row"
      :class="{ 'min': headerHidden === false }"
      :lg="headerHidden ? 24 : 16"
    >
    <video
      class="video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      title="首頁影片"
      src="@assets/video/home-max.mp4"
      type="video/mp4"
    >
      <source
        src="@assets/video/home-max.mp4"
        type="video/mp4"
      />
    </video>
    </Col>
    <Col
      v-if="!headerHidden"
      :lg="8"
      :class="headerHidden ? 'hiddenSideMenu' : 'showSideMenu'"
    >
    <SideMenu />
    </Col>
  </Row>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import SideMenu from '@components/home/SideMenu.vue';

export default {
  name: 'Home',
  components: {
    SideMenu
  },
  setup () {
    const store = useStore();
    const headerHidden = computed(() => store.getters.getHeaderHidden);

    store.dispatch('setHeaderHidden', true);

    onMounted(() => {
      window.addEventListener('mousewheel', () => {
        if (store.getters.getHeaderHidden) {
          setTimeout(() => {
            store.dispatch('setHeaderHidden', false);
          }, 500);
        }
      });
    });



    return {
      headerHidden
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: space-between;
  &.min {
    height: calc(100% - 90px);
  }

  .video_row {
    overflow: hidden;
    width: 100%;
    @media (min-width: 992px) {
      height: 100%;
    }

    &:min {
      height: 100%;
      transition: height 1s ease;
      transition: width 1s ease;
    }

    .video {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }

  .sideMenu {
    height: 100%;
  }

  .hiddenSideMenu {
    opacity: 0;
  }

  .showSideMenu {
    height: 100%;
    animation: fadein 3s ease;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
