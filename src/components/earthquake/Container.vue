<template>
  <div class="container">
    <div class="container_center">
      <div class="container_title">為地震做好準備</div>
      <div class="container_info">
        除了日常的物資外，還需要準備緊急避難包，當地震發生後，建築物嚴重受損，就需要立即緊急撤離建築物，這時候緊急避難包就可以派上用場，立即取用前往避難場所。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style>
.container {
  height: 124px;
  padding: 124px 360px;
  background: #ffeea3;
  border-radius: 0px 0px 0px 248px;
}

.container .container_center {
  display: flex;
  justify-content: space-between;
}

.container .container_title {
  font-weight: 700;
  font-size: 64px;
  color: #5e5e5e;
}

.container .container_info {
  width: 550px;
  font-family: "Gill Sans";
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  color: #5e5e5e;
}
</style>