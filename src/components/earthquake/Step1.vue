<template>
  <Row class="step1_container">
    <Col
      class="step1_img"
      :xs="24"
      :sm="24"
      :md="12"
      :lg="12"
    >
    <img src="@assets/img/earthquake/step1/main.png" />
    </Col>
    <Col
      class="step1_info"
      :xs="24"
      :sm="24"
      :md="12"
      :lg="12"
    >
    <div class="step1_number">1</div>
    <div class="step1_title">耐震評估與補強</div>
    <div class="step1_text">
      臺灣地震頻繁，若住家興建年代較早，擔心建築物潛在耐震能力不足，可找結構、土木、大地或建築技師公會進行建物耐震評估。如有耐震補強需求，可向地方政府申請私有建物耐震弱層補強作業，有機會獲得補助經費，相關資訊可參考「私有建物耐震弱層補強資訊網」。
    </div>
    <div class="step1_web">
      <a href="http://privatebuilding.ncree.org.tw/index.aspx">私有建物耐震弱層補強資訊網</a>
      <img src="@assets/img/earthquake/nextArrow.png" />
    </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "Step1",
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 480px) {
  .step1_container {
    margin: 0 auto;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step1_img img {
      width: 570px;
    }

    .step1_info {
      width: 420px;
      margin-right: 100px;
    }

    .step1_number {
      font-family: "Noto Sans TC";
      margin-top: 80px;
      margin-left: -21px;
      font-weight: 500;
      font-size: 220px;
      letter-spacing: 0.05em;
      -webkit-text-stroke: 4px #50afbd;
      color: #ffffff;
    }

    .step1_title {
      margin-top: -15px;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0.05em;
      color: #50afbd;
    }

    .step1_text {
      margin-top: 35px;
      font-size: 16px;
      line-height: 156%;
      letter-spacing: 0.02em;
      color: #5e5e5e;
    }

    .step1_web {
      margin-top: 80px;
      margin-left: 24px;
      position: relative;
      width: 219px;
      height: 34px;
      background-color: white;
      border-radius: 17px;
      &::before {
        content: "";
        width: 24px;
        height: 24px;
        background-image: url(@assets/img/earthquake/idea.png);
        position: absolute;
        top: 2px;
        left: -28px;
      }

      a {
        position: absolute;
        top: 9px;
        left: 15px;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0.1em;
      }

      img {
        position: absolute;
        top: 14px;
        left: 192px;
      }
    }
  }
}

@media screen and (max-device-width: 480px) {
  .step1_container {
    width: 100vw;
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    background-size: contain;
    background-image: url(@assets/img/earthquake/step1/step1_bg.png);
    background-repeat: no-repeat;
    padding: 0 14vw;
    text-align: center;
    .step1_number {
      font-family: "Noto Sans TC";
      font-weight: bold;
      font-size: 48px;
      line-height: 70px;
      letter-spacing: 0.05em;
      color: #ffffff;
      -webkit-text-stroke: 1px #50afbd;
    }
    .step1_title {
      font-family: "Noto Sans TC";
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.05em;
      color: #50afbd;
    }
    .step1_text {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-size: 12px;
      line-height: 146%;
      letter-spacing: 0.02em;
      color: #5e5e5e;
      margin-top: 12px;
    }
    .step1_web {
      width: 200px;
      height: 34px;
      background-color: white;
      border-radius: 17px;
      margin: 24px auto 0 auto;
      position: relative;
      a {
        // position: relative;
        font-size: 12px;
        line-height: 34px;
      }
      img {
        margin-left: 6px;
      }
      &::before {
        width: 24px;
        background-image: url(@assets/img/earthquake/idea.png);
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .step1_img img {
      width: 218px;
    }
  }
}
</style>