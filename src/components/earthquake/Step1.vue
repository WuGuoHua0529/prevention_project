<template>
  <Row
    align="center"
    justify="space-between"
    class="step_container px-10"
  >
    <Col
      class="step_img ivu-p-16"
      :xs="{ span: 24, order: 2 }"
      :sm="{ span: 24, order: 2 }"
      :md="{ span: 12, order: 1 }"
      :lg="{ span: 12, order: 1 }"
    >
    <img src="@assets/img/earthquake/step1/main.png" />
    </Col>
    <Col
      class="step_content ivu-p-16"
      :xs="{ span: 24, order: 1 }"
      :sm="{ span: 24, order: 1 }"
      :md="{ span: 12, order: 2 }"
      :lg="{ span: 12, order: 2 }"
    >
    <div class="step_number">1</div>
    <div class="step_title">耐震評估與補強</div>
    <div class="step_text">
      臺灣地震頻繁，若住家興建年代較早，擔心建築物潛在耐震能力不足，可找結構、土木、大地或建築技師公會進行建物耐震評估。如有耐震補強需求，可向地方政府申請私有建物耐震弱層補強作業，有機會獲得補助經費，相關資訊可參考「私有建物耐震弱層補強資訊網」。
    </div>
    <div class="step_web">
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