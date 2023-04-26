<template>
  <div
    class="home"
    :class="{ 'min': headerHidden === false }"
  >
    <div
      class="video_row"
      :class="{ 'min': headerHidden === false }"
    >
      <video
        class="video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        title="首頁影片"
        src="../assets/video/home-max.mp4"
        type="video/mp4"
      >
        <source
          src="../assets/video/home-max.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <SideMenu
      v-if="!headerHidden"
      :class="headerHidden ? 'hiddenSideMenu' : 'showSideMenu'"
    />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SideMenu from '../components/home/SideMenu.vue';

export default {
  name: 'Home',
  components: {
    SideMenu
  },
  setup () {
    const store = useStore();
    const headerHidden = computed(() => store.getters.getHeaderHidden);

    store.dispatch('setHeaderHidden', true);

    window.addEventListener('mousewheel', () => {
      if (store.getters.getHeaderHidden) {
        setTimeout(() => {
          store.dispatch('setHeaderHidden', false);
        }, 500);
      }
    });


    return {
      headerHidden
    }
  }
}
</script>
<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.home.min,
.sideMenu {
  height: calc(100% - 90px);
}

.video_row {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.video_row.min {
  height: 100%;
  width: 70%;
  transition: height 1s ease;
  transition: width 1s ease;
}

.video {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

.hiddenSideMenu {
  opacity: 0;
}

.showSideMenu {
  width: 30%;
  animation: fadein 3s ease;
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