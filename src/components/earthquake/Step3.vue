<template>
  <Row
    align="center"
    justify="space-between"
    class="step_container px-10"
  >
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_number">3</div>
    </Col>
    <Col
      class="step_content"
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
    >
    <div class="step_title">儲備日常用品與緊急物資</div>
    <div class="step_text">
      當發生大規模地震，出現停電、停水或瓦斯中斷的狀況，若住家安全且有儲備日用品，就能選擇在熟悉且較舒適的住家中避難。平時可以透過「循環儲糧法」，一邊消耗一邊購買日用品，就不用擔心購買不必要或出現過期的狀況。
    </div>
    <div class="step_web">
      <a href="https://world.aeon-ryukyu.jp/tc/magazine/1384/?magazine_color=life">循環儲糧法查看</a>
      <img src="@assets/img/earthquake/nextArrow.png" />
    </div>
    </Col>
  </Row>
  <Row style="margin-bottom: 15%">
    <Col
      class="step_img"
      :xs="{ span: 0 }"
      :sm="{ span: 0 }"
      :md="{ span: 24 }"
      :lg="{ span: 24 }"
    >
    <div class="slider_over">
      <div class="step3_slidershow">

        <div
          class="item_group"
          @mouseenter="hoverStatesOption.mark1 = true"
          @mouseleave="hoverStatesOption.mark1 = false"
        >
          <span class="step3_mark mark1"></span>
          <img
            v-if="hoverStatesOption.mark1"
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk_dark.png"
          />
          <img
            v-else
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk.png"
          />
          <div
            class="mark_content"
            v-if="hoverStatesOption.mark1 === true"
          >
            <p>1.針對停電可以準備</p>
            <ul>
              <li>請確保停電時，有安全的光源與設備可以維持行動、獲取外界資訊，以及禦寒保暖。建議您可在家中的每個房間都備有手電筒(同時搭配儲備電池)、太陽能露營燈或掛燈，這樣停電時，不管身在家中哪個空間，都能找到光源。</li>
              <li>另外，暖暖包、毛毯及保溫瓶這類物品，可以有助於維持身體的溫暖。行動電源、防災收音機及乾電池的準備，則是能有助於災時獲取外界資訊。</li>
            </ul>
          </div>
          <template v-else>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/gas.png" />
              <span>卡式瓦斯爐、瓦斯罐</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/pot.png" />
              <span>鍋具</span>
            </div>
          </template>
        </div>

        <div
          class="item_group"
          @mouseenter="hoverStatesOption.mark2 = true"
          @mouseleave="hoverStatesOption.mark2 = false"
        >
          <span class="step3_mark mark2"></span>
          <img
            v-if="hoverStatesOption.mark2"
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk_light.png"
          />
          <img
            v-else
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk.png"
          />
          <div
            class="mark_content"
            v-if="hoverStatesOption.mark2 === true"
          >
            <p>2.針對停水可以準備</p>
            <ul>
              <li>男性每日所需水量約3.5公升，女性所需約2.5公升以維持健康，請在家中保留至少三天的飲用水，並且根據您的家庭成員組成進行 準備。</li>
              <li>另外，「防災用廁所」可在無法排水的情況下如廁，當中的凝結劑具有除臭和抗菌的效果，準備三天以上的份量較安心。濕紙巾則能用於擦拭身體，保持清潔。
                保鮮膜、烤盤紙、廚房用剪刀或刨刀，可讓您在處理食材時，減少用水量。</li>
            </ul>
          </div>
          <template v-else>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/water.png" />
              <span>礦泉水(三天份)</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/bucket.png" />
              <span>儲水桶</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/tissue1.png" />
              <span>濕紙巾</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/tissue2.png" />
              <span>廁所便利包</span>
            </div>
          </template>
        </div>

        <div
          class="item_group"
          @mouseenter="hoverStatesOption.mark3 = true"
          @mouseleave="hoverStatesOption.mark3 = false"
        >
          <span class="step3_mark mark3"></span>
          <img
            v-if="hoverStatesOption.mark3"
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk_dark.png"
          />
          <img
            v-else
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk.png"
          />
          <div
            class="mark_content"
            v-if="hoverStatesOption.mark3 === true"
          >
            <p>3.針對瓦斯中斷可以準備</p>
            <ul>
              <li>溫熱的食物能夠療癒身心！在瓦斯中斷的情況下，可以使用卡式瓦斯爐來烹煮熱食，將食材充分煮熟也能避免食物中毒，並搭配添購足夠的瓦斯罐。</li>
            </ul>
          </div>
          <template v-else>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/light1.png" />
              <span>露營燈</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/light2.png" />
              <span>手電筒</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/light3.png" />
              <span>提燈</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/radio.png" />
              <span>收音機</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/dynamo.png" />
              <span>發電機</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/warmbag.png" />
              <span>暖暖包</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/bottle.png" />
              <span>保溫瓶</span>
            </div>
          </template>
        </div>

        <div
          class="item_group"
          @mouseenter="hoverStatesOption.mark4 = true"
          @mouseleave="hoverStatesOption.mark4 = false"
        >
          <span class="step3_mark mark4"></span>
          <img
            v-if="hoverStatesOption.mark4"
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk_light.png"
          />
          <img
            v-else
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk.png"
          />
          <div
            class="mark_content"
            v-if="hoverStatesOption.mark4 === true"
          >
            <p>4.針對儲糧可以準備</p>
            <ul>
              <li>大規模災害發生後的初期，可能不容易獲取食物，請在家中儲備至少一週的緊急食物，選擇室溫下也能保存的類型，例如調理即食品、罐頭、泡麵、堅果、果汁、保久乳、根莖類蔬菜等，較不會因為電力中斷而出現食物腐敗的情況。類型可涵蓋米麵主食、乳製品、魚肉豆蛋白質(罐頭)、膳食纖維、維生素(罐頭/果乾)、碳水化合物(餅乾/點心)、調味料等，就能兼顧營養均衡。</li>
            </ul>
            <div class="remind">參考資料：崇光房屋服務有限公司（2021）。 公寓防災教科書。</div>
          </div>
          <template v-else>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/dryrice.png" />
              <span>乾燥飯包</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/drynoddle.png" />
              <span>乾燥麵條包</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/cookies.png" />
              <span>罐頭、泡麵、餅乾</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/juice.png" />
              <span>果汁</span>
            </div>
          </template>
        </div>

        <div
          class="item_group"
          @mouseenter="hoverStatesOption.mark5 = true"
          @mouseleave="hoverStatesOption.mark5 = false"
        >
          <span class="step3_mark mark5"></span>
          <img
            v-if="hoverStatesOption.mark5"
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk_dark.png"
          />
          <img
            v-else
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk.png"
          />
          <div
            class="mark_content"
            v-if="hoverStatesOption.mark5 === true"
          >
            <p>5.針對醫療保健可以準備</p>
            <ul>
              <li>為了因應災害可能導致醫療機構失靈的狀況，家中最好準備基本的急救物資，例如腸胃藥、止痛藥、感冒藥、個人常用藥物等內服藥，眼藥水、貼布、蚊蟲咬傷等外用藥，以及外傷處理用品。若有慢性疾病且正在服用處方藥，請幫自己準備好足夠的藥物。女性則可以儲備多一點生理用品，以應對無法預期的災害到來。</li>
            </ul>
          </div>
          <template v-else>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/drup.png" />
              <span>急救包、口罩、酒精</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step4/drug1.png" />
              <span>常備藥</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/supplies.png" />
              <span>生理用品</span>
            </div>
          </template>
        </div>

        <div
          class="item_group"
          @mouseenter="hoverStatesOption.mark6 = true"
          @mouseleave="hoverStatesOption.mark6 = false"
        >
          <span class="step3_mark mark6"></span>
          <img
            v-if="hoverStatesOption.mark6"
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk_light.png"
          />
          <img
            v-else
            class="mark_bg"
            src="@assets/img/earthquake/step3/mark_bk.png"
          />
          <div
            class="mark_content"
            v-if="hoverStatesOption.mark6 === true"
          >
            <p>6.針對其他可以準備</p>
            <ul>
              <li>地震後，出入的大門可能變形，窗戶玻璃也可能破碎，因此準備防身用品有其必要。同時為了以防震後火災，家中最好也要備置家用滅火器。
                平時也能先將家庭財產文件進行整理，例如把證件影本、保險稅單、土地權狀等彙整到一份文件夾中，當災後面臨申請補助，或需要離開的情況時，便能提出相關證明與迅速帶走。
                另外，地震後也可能需要搬運物資或遇到無法倒垃圾的情況，利用搬運堆車及除臭垃圾袋即可解決這類困擾。</li>
            </ul>
            <div class="remind">參考資料：凱西●海瑞森（2020）。 災難超前部署。創意市集出版。</div>
          </div>
          <template v-else>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/defense.png" />
              <span>防身用品</span>
            </div>
            <div class="item_group_item">
              <img src="@assets/img/earthquake/step3/car.png" />
              <span>搬運推車</span>
            </div>
          </template>
        </div>

      </div>
    </div>
    <!-- <div class="button_right">
      <img src="@assets/img/earthquake/step3/button_right.png" />
    </div> -->
    </Col>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 0 }"
      :lg="{ span: 0 }"
    >
    <swiper-container autoPlay="true">
      <swiper-slide>
        <div
          class="bk_mobile bk_left_mobile"
          @click="mobileSelectImg = !mobileSelectImg"
        >
          <span class="step3_mark mark1"></span>
          <img
            v-show="mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_dark_mobile.png"
          />
          <img
            v-show="!mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_mobile.png"
          />
          <div class="item_group_mobile">
            <Row v-show="mobileSelectImg">
              <Col class="item_group_mobile_text">
              <h3 class="ivu-mb-8">1.針對停電可以準備</h3>
              <div class="ivu-mb-8">
                請確保停電時，有安全的光源與設備可以維持行動、獲取外界資訊，以及禦寒保暖。建議您可在家中的每個房間都備有手電筒(同時搭配儲備電池)、太陽能露營燈或掛燈，這樣停電時，不管身在家中哪個空間，都能找到光源。
              </div>
              <div class="ivu-mb-8">
                另外，暖暖包、毛毯及保溫瓶這類物品，可以有助於維持身體的溫暖。行動電源、防災收音機及乾電池的準備，則是能有助於災時獲取外界資訊。
              </div>
              </Col>
            </Row>
            <Row
              v-show="!mobileSelectImg"
              class="item_group_mobile_img"
            >
              <Col
                span="24"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/gas.png" />
                <span>卡式瓦斯爐、瓦斯罐</span>
              </div>
              </Col>
              <Col
                span="24"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/pot.png" />
                <span>鍋具</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="bk_mobile bk_center_mobile"
          @click="mobileSelectImg = !mobileSelectImg"
        >
          <span class="step3_mark mark2"></span>
          <img
            v-show="mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_light_mobile.png"
          />
          <img
            v-show="!mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_mobile.png"
          />
          <div class="item_group_mobile">
            <Row v-show="mobileSelectImg">
              <Col class="item_group_mobile_text">
              <h3 class="ivu-mb-8">2.針對停水可以準備</h3>
              <div class="ivu-mb-8">
                男性每日所需水量約3.5公升，女性所需約2.5公升以維持健康，請在家中保留至少三天的飲用水，並且根據您的家庭成員組成進行 準備。
              </div>
              <div class="ivu-mb-8">
                另外，「防災用廁所」可在無法排水的情況下如廁，當中的凝結劑具有除臭和抗菌的效果，準備三天以上的份量較安心。濕紙巾則能用於擦拭身體，保持清潔。
              </div>
              <div class="ivu-mb-8">
                保鮮膜、烤盤紙、廚房用剪刀或刨刀，可讓您在處理食材時，減少用水量。
              </div>
              </Col>
            </Row>
            <Row
              v-show="!mobileSelectImg"
              class="item_group_mobile_img"
            >
              <Col
                span="12"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/water.png" />
                <span>礦泉水(三天份)</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/bucket.png" />
                <span>儲水桶</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/tissue1.png" />
                <span>濕紙巾</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/tissue2.png" />
                <span>廁所便利包</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="bk_mobile bk_center_mobile"
          @click="mobileSelectImg = !mobileSelectImg"
        >
          <span class="step3_mark mark3"></span>
          <img
            v-show="mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_dark_mobile.png"
          />
          <img
            v-show="!mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_mobile.png"
          />
          <div class="item_group_mobile">
            <Row v-show="mobileSelectImg">
              <Col class="item_group_mobile_text">
              <h3 class="ivu-mb-8">3.針對瓦斯中斷可以準備</h3>
              <div class="ivu-mb-8">
                溫熱的食物能夠療癒身心！在瓦斯中斷的情況下，可以使用卡式瓦斯爐來烹煮熱食，將食材充分煮熟也能避免食物中毒，並搭配添購足夠的瓦斯罐。
              </div>
              </Col>
            </Row>
            <Row
              v-show="!mobileSelectImg"
              class="item_group_mobile_img"
            >
              <Col
                span="8"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/light1.png" />
                <span>露營燈</span>
              </div>
              </Col>
              <Col
                span="8"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/light2.png" />
                <span>手電筒</span>
              </div>
              </Col>
              <Col
                span="8"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/light3.png" />
                <span>提燈</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/radio.png" />
                <span>收音機</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/dynamo.png" />
                <span>發電機</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/bottle.png" />
                <span>保溫瓶</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/warmbag.png" />
                <span>暖暖包</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="bk_mobile bk_center_mobile"
          @click="mobileSelectImg = !mobileSelectImg"
        >
          <span class="step3_mark mark4"></span>
          <img
            v-show="mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_light_mobile.png"
          />
          <img
            v-show="!mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_mobile.png"
          />
          <div class="item_group_mobile">
            <Row v-show="mobileSelectImg">
              <Col class="item_group_mobile_text">
              <h3 class="ivu-mb-8">4.針對儲糧可以準備</h3>
              <div class="ivu-mb-8">
                大規模災害發生後的初期，可能不容易獲取食物，請在家中儲備至少一週的緊急食物，選擇室溫下也能保存的類型，例如調理即食品、罐頭、泡麵、堅果、果汁、保久乳、根莖類蔬菜等，較不會因為電力中斷而出現食物腐敗的情況。類型可涵蓋米麵主食、乳製品、魚肉豆蛋白質(罐頭)、膳食纖維、維生素(罐頭/果乾)、碳水化合物(餅乾/點心)、調味料等，就能兼顧營養均衡。
              </div>
              <div class="remind ivu-mb-8">
                參考資料：崇光房屋服務有限公司（2021）。 公寓防災教科書。
              </div>
              </Col>
            </Row>
            <Row
              v-show="!mobileSelectImg"
              class="item_group_mobile_img"
            >
              <Col
                span="12"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/dryrice.png" />
                <span>乾燥飯包</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/drynoddle.png" />
                <span>乾燥麵條包</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/cookies.png" />
                <span>罐頭、泡麵、餅乾</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/juice.png" />
                <span>果汁</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="bk_mobile bk_center_mobile"
          @click="mobileSelectImg = !mobileSelectImg"
        >
          <span class="step3_mark mark5"></span>
          <img
            v-show="mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_dark_mobile.png"
          />
          <img
            v-show="!mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_mobile.png"
          />
          <div class="item_group_mobile">
            <Row v-show="mobileSelectImg">
              <Col class="item_group_mobile_text">
              <h3 class="ivu-mb-8">5.針對醫療保健可以準備</h3>
              <div class="ivu-mb-8">
                為了因應災害可能導致醫療機構失靈的狀況，家中最好準備基本的急救物資，例如腸胃藥、止痛藥、感冒藥、個人常用藥物等內服藥，眼藥水、貼布、蚊蟲咬傷等外用藥，以及外傷處理用品。若有慢性疾病且正在服用處方藥，請幫自己準備好足夠的藥物。女性則可以儲備多一點生理用品，以應對無法預期的災害到來。
              </div>
              </Col>
            </Row>
            <Row
              v-show="!mobileSelectImg"
              class="item_group_mobile_img"
            >
              <Col
                span="12"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step4/drug1.png" />
                <span>常備藥</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mb-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/supplies.png" />
                <span>生理用品</span>
              </div>
              </Col>
              <Col
                span="24"
                class="ivu-mt-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/drup.png" />
                <span>急救包、口罩、酒精</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="bk_mobile bk_center_mobile"
          @click="mobileSelectImg = !mobileSelectImg"
        >
          <span class="step3_mark mark6"></span>
          <img
            v-show="mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_light_mobile.png"
          />
          <img
            v-show="!mobileSelectImg"
            class="mark_bk_mobile"
            src="@assets/img/earthquake/step3/mark_bk_mobile.png"
          />
          <div class="item_group_mobile">
            <Row v-show="mobileSelectImg">
              <Col class="item_group_mobile_text">
              <h3 class="ivu-mb-8">6.針對其他可以準備</h3>
              <div class="ivu-mb-8">
                地震後，出入的大門可能變形，窗戶玻璃也可能破碎，因此準備防身用品有其必要。同時為了以防震後火災，家中最好也要備置家用滅火器。
              </div>
              <div class="ivu-mb-8">
                平時也能先將家庭財產文件進行整理，例如把證件影本、保險稅單、土地權狀等彙整到一份文件夾中，當災後面臨申請補助，或需要離開的情況時，便能提出相關證明與迅速帶走。
              </div>
              <div class="ivu-mb-8">
                另外，地震後也可能需要搬運物資或遇到無法倒垃圾的情況，利用搬運堆車及除臭垃圾袋即可解決這類困擾。
              </div>
              <div class="remind ivu-mb-8">
                參考資料：凱西●海瑞森（2020）。 災難超前部署。創意市集出版。
              </div>
              </Col>
            </Row>
            <Row
              v-show="!mobileSelectImg"
              class="item_group_mobile_img6"
            >
              <Col
                span="12"
                class="ivu-mb-16 ivu-pr-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/defense.png" />
                <span>防身用品</span>
              </div>
              </Col>
              <Col
                span="12"
                class="ivu-mb-16 ivu-pl-16"
              >
              <div class="item_group_item">
                <img src="@assets/img/earthquake/step3/car.png" />
                <span>搬運推車</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    </Col>
  </Row>
</template>

<script>
import { register } from 'swiper/element/bundle';
register();
import { reactive, ref } from 'vue';


export default {
  name: "Step3",
  setup () {
    const hoverStatesOption = reactive({
      mark1: false,
      mark2: false,
      mark3: false,
      mark4: false,
      mark5: false,
      mark6: false
    });

    const mobileSelectImg = ref(false);

    return {
      hoverStatesOption,
      mobileSelectImg
    }
  }
};
</script>

<style lang="scss" scoped>
.step_container {
  margin: 0;
  .step_number {
    text-align: center;
    @media (min-width: 768px) {
      text-align: right;
      margin-right: 30%;
    }
  }

  .step_content {
    justify-content: center;
  }
}

.slider_over {
  &::-webkit-scrollbar {
    display: none;
  }
}

.mark_content {
  position: absolute;
  z-index: 3;

  p {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-top: 20px;
  }

  li {
    margin: 10px 0;
  }

  .remind {
    color: #008396;
  }
}

.item_group {
  position: relative;
}

.slider_over {
  overflow: scroll;
  max-width: 100%;
}

.step3_slidershow {
  display: flex;
  width: 4728px;
  height: 500px;
  background-size: contain;
  background-image: url(@assets/img/earthquake/step3/scroll_bk.png);
  background-repeat: no-repeat;
}

.step3_slidershow .item_group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 180px;
  margin-left: 334px;
  width: 9%;
  height: 40%;
}

.step3_slidershow .item_group:first-child {
  margin-left: 254px;
}

.item_group_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 25%;
  position: relative;
}

.item_group_item img {
  margin-top: 10px;
}

.item_group_item span {
  white-space: nowrap;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: #5e5e5e;
}

.mark_bg {
  position: absolute;
  top: -40%;
}

.bk_mobile {
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  &.bk_left_mobile {
    background-image: url(@assets/img/earthquake/step3/bk_left_mobile.png);
  }
  &.bk_center_mobile {
    background-image: url(@assets/img/earthquake/step3/bk_center_mobile.png);
  }
  &.bk_right_mobile {
    background-image: url(@assets/img/earthquake/step3/bk_right_mobile.png);
  }

  .mark_bk_mobile {
    width: 90%;
    height: 90%;
    margin-top: 45px;
  }
}

.step3_mark {
  &::after {
    font-weight: 700;
    font-size: 36px;
    line-height: 85px;
    letter-spacing: 0.1em;
    color: #ffffff;
    white-space: pre;
    text-align: center;
    padding-top: 30px;
    vertical-align: middle;
    position: absolute;
    bottom: 173px;
    left: 450px;
    width: 150px;
    height: 150px;
    background-size: 100%;
    background-image: url(@assets/img/earthquake/step3/Star3.png);
    background-repeat: no-repeat;
    z-index: 2;
  }

  &.mark1::after {
    background-size: cover;
    content: "瓦斯\A中斷";
    line-height: 36px;
    top: 50px;
    left: 20px;
    font-size: 20px;
    padding: 15px;
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      font-size: 36px;
      left: 450px;
      top: initial;
      background-size: 100%;
      width: 150px;
      height: 150px;
      line-height: 45px;
      padding-top: 30px;
    }
  }
  &.mark2::after {
    content: "停水";
    line-height: 65px;
    top: 50px;
    left: 25px;
    font-size: 20px;
    padding: 15px;
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      font-size: 36px;
      left: 450px;
      top: initial;
      background-size: 100%;
      width: 150px;
      height: 150px;
      line-height: 85px;
      padding-top: 30px;
    }
  }
  &.mark3::after {
    content: "停電";
    line-height: 65px;
    top: 50px;
    left: 25px;
    font-size: 20px;
    padding: 15px;
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      font-size: 36px;
      left: 450px;
      top: initial;
      background-size: 100%;
      width: 150px;
      height: 150px;
      line-height: 85px;
      padding-top: 30px;
    }
  }
  &.mark4::after {
    content: "儲糧";
    line-height: 65px;
    top: 50px;
    left: 25px;
    font-size: 20px;
    padding: 15px;
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      font-size: 36px;
      left: 450px;
      top: initial;
      background-size: 100%;
      width: 150px;
      height: 150px;
      line-height: 85px;
      padding-top: 30px;
    }
  }
  &.mark5::after {
    content: "醫藥\A健康";
    background-size: cover;
    line-height: 36px;
    top: 50px;
    left: 20px;
    font-size: 20px;
    padding: 15px;
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      font-size: 36px;
      left: 450px;
      top: initial;
      background-size: 100%;
      width: 150px;
      height: 150px;
      line-height: 45px;
      padding-top: 30px;
    }
  }
  &.mark6::after {
    content: "其他";
    line-height: 65px;
    top: 50px;
    left: 25px;
    font-size: 20px;
    padding: 15px;
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      font-size: 36px;
      left: 450px;
      top: initial;
      background-size: 100%;
      width: 150px;
      height: 150px;
      line-height: 85px;
      padding-top: 30px;
    }
  }
}

.button_left {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #5e5e5e;
  position: relative;
  top: 271px;
  left: 324px;
}

.button_left img {
  width: 25%;
  position: absolute;
  top: 12px;
  left: 15px;
}

.button_right {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #5e5e5e;
  position: relative;
  top: -271px;
  left: 1110px;
}

.button_right img {
  width: 25%;
  position: absolute;
  top: 12px;
  left: 18px;
}

.item_group_mobile {
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0 15%;

  .item_group_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 100%;
    position: relative;
  }

  .item_group_item img {
    margin-top: 10px;
  }

  .item_group_mobile_img {
    padding-top: 50%;
  }

  .item_group_mobile_img6 {
    padding-top: 130%;
  }

  .item_group_mobile_text {
    padding-top: 50%;
    .remind {
      color: #008396;
    }
  }
}
</style>