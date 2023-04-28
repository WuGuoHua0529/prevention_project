<template>
  <div class="footer">
    <img src="@assets/img/footer.png">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  line-height: 0;
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
