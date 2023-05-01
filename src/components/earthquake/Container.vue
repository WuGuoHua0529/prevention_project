<template>
  <div class="container">
    <Row class="container_center">
      <Col
        class="container_title"
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 10 }"
        :lg="{ span: 8 }"
      >為地震做好準備</Col>
      <Col
        class="container_info"
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 16 }"
        :lg="{ span: 16 }"
      >除了日常的物資外，還需要準備緊急避難包，當地震發生後，建築物嚴重受損，就需要立即緊急撤離建築物，這時候緊急避難包就可以派上用場，立即取用前往避難場所。</Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="scss" scoped>
.container {
  padding: 5%;
  background: #ffeea3;
  @media (min-width: 768px) {
    padding: 5% 5% 5% 20%;
    border-radius: 0px 0px 0px 200px;
  }

  .container_center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
      text-align: initial;
    }

    .container_title {
      font-weight: 700;
      font-size: 20px;
      color: #5e5e5e;
      @media (min-width: 768px) {
        font-size: 34px;
      }
    }

    .container_info {
      width: 550px;
      font-family: "Gill Sans";
      font-weight: 400;
      font-size: 16px;
      color: #5e5e5e;
    }
    .container_button {
      display: none;
    }
  }
}

// @media screen and (max-device-width: 480px) {
//   .container {
//     height: 126px;
//     padding: 17px 10%;
//     background: #ffeea3;
//     text-align: center;
//     .container_title {
//       font-weight: bold;
//       font-size: 14px;
//       line-height: 20px;
//       letter-spacing: 0.05em;
//       color: #5e5e5e;
//     }
//     .container_info {
//       font-weight: 300;
//       font-size: 10px;
//       line-height: 14px;
//       text-align: center;
//       letter-spacing: 0.04em;
//       margin-top: 10px;

//       /* Black */

//       color: #5e5e5e;
//     }
//     img {
//       margin-top: 12px;
//     }
//   }
// }
</style>