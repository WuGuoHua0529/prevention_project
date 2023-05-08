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
    <img src="@assets/img/earthquake/step6/main.png" />
    </Col>
    <Col
      class="step_content ivu-p-16"
      :xs="{ span: 24, order: 1 }"
      :sm="{ span: 24, order: 1 }"
      :md="{ span: 12, order: 2 }"
      :lg="{ span: 12, order: 2 }"
    >
    <div class="step_number">6</div>
    <div class="step_title">確認避難路線與地點</div>
    <div class="step_text">
      地與家人討論震後避難地點與路線，並實際走一次，查看哪邊可能受阻及可能花費的時間，選定兩條路線較保險。
    </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "Step6",
};
</script>