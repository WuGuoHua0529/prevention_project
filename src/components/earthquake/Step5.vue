<template>
  <Row
    align="center"
    justify="space-between"
    class="step_container px-10"
  >
    <Col
      class="step_content ivu-p-16"
      :xs="{ span: 24, order: 1 }"
      :sm="{ span: 24, order: 1 }"
      :md="{ span: 12, order: 1 }"
      :lg="{ span: 12, order: 1 }"
    >
    <div class="step_number">5</div>
    <div class="step_title">建立家人避難聯繫方式</div>
    <div class="step_text">
      地震後電話量可能過載，平時可先與家人討論災時連絡方式，可透過簡訊、LINE報平安，或用三角聯絡法，打給災區外電話較容易接通的親友。
      另外，也可利用消防e點通APP，進入親友協尋功能，即可使用災區親友現況查詢平台。
    </div>
    <div class="step_web">
      <a href="https://portal2.emic.gov.tw/FIS2_Develop/Masses">災區親友現況查詢平台</a>
      <img src="@assets/img/earthquake/nextArrow.png" />
    </div>
    </Col>
    <Col
      class="step_img ivu-p-16"
      :xs="{ span: 24, order: 2 }"
      :sm="{ span: 24, order: 2 }"
      :md="{ span: 12, order: 2 }"
      :lg="{ span: 12, order: 2 }"
    >
    <img src="@assets/img/earthquake/step5/main.png" />
    </Col>
  </Row>
</template>

<script>
export default {
  name: "Step5",
};
</script>