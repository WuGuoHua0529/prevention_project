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
    <div class="step_number">7</div>
    <div class="step_title">進行臨震行為與避難練習</div>
    <div class="step_text">
      尋找家中適合避難的位置，如堅固的桌子底下，並實際進行臨震行為的演練。
    </div>
    </Col>
    <Col
      class="step_img ivu-p-16"
      :xs="{ span: 24, order: 2 }"
      :sm="{ span: 24, order: 2 }"
      :md="{ span: 12, order: 2 }"
      :lg="{ span: 12, order: 2 }"
    >
    <img src="@assets/img/earthquake/step7/main.png" />
    </Col>
  </Row>
</template>

<script>
export default {
  name: "Step7",
};
</script>