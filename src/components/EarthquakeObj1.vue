<template>
  <template v-for="item in contents_data1" :key="item.key">
    <Transition name="fade">
      <div class="content-container" ref="scrollArea">
        <div class="earthquake-first fade-in">
          <h2 class="unit_title">{{ item.unit_title }}</h2>
          <div class="subtitle">{{ item.subtitle }}</div>
          <ul v-for="(it, i) in item.data" :key="`data_${i}`" >
            <li class="introduction">{{ it.content }}</li>
          </ul>
          <div class="progressbar"></div>
        </div>
          <img :src="require(`../img/earthquake_${item.key}.png`)">
      </div>
    </Transition>
  </template>
</template>

<script>
import { reactive } from 'vue';

export default {
name:"EarthquakeObj1View",
setup () {
  const contents_data1 = reactive(
    [
      {
        key: 1,
        unit_title: '地震災害',
        subtitle: '1.年代久遠的建築物',
        data: [
          { content: "1974年以前興建的房子，因為當時並無耐震設計規範，因此房屋大多不具有抗震能力。" },
          { content: "1974年以後興建的房子，由於耐震設計規範仍舊不足，加上部分房屋施工品質不夠確實，抗震能力普遍來說還是不佳。" },
          { content: "1999年九二一大地震後設計施工的房子，由於政府規範此後興建的建築物，結構耐震性必須達可承受震度5級以上的標準，因此結構安全相對較高。" },
          { content: "若擔心住家結構狀況，可找專家進行建物耐震評估，如有耐震補強需求，可向地方政府申請補助。" },
          { img: "../img/earthquake_1.png" }
        ]
      },
      {
        key: 2,
        subtitle: '2.結構不安全的建築物',
        data: [
          { content: "土造或磚造結構" },
          { content: "土造的房屋內外沒有樑柱支撐，土塊難以承受水平搖晃的地震力，當地震震度達4~5級時即有倒塌風險。磚造的建築物沒有鋼筋，且柱子較小，受地震力破壞後易呈現破碎情況，難有逃生空間。" },
          { content: "一樓結構較軟弱" },
          { content: "騎樓式建築、夾層屋設計、一樓樓層過度挑高，或將一樓隔間打通、柱子打掉而沒有補強，會使一樓的結構較其他樓層明顯軟弱，地震振動的能量便會集中在這個樓層，該樓層可能先行坍塌，導致其他樓層跟著倒塌。" },
          { content: "頂樓違章加蓋" },
          { content: "增加建築物底層結構的負荷，會降低房屋的耐震力。" },
          { content: "延伸閱讀：一次搞懂：最危險和最安全的房屋結構" },
          { img: "../img/earthquake_2.png" }
        ]
      },
      {
        key: 3,
        subtitle: '3.易傾倒或墜落的物件',
        data: [
          { content: "近年臺灣地震，最常見到民眾家中出現電視摔落地面、家具擺飾品掉落、水塔傾倒等狀況。平時可做好家具固定措施，減少地震造成的財物損失。" },
          { content: "地震後外出避難時，則要盡量遠離圍牆、電線杆、屋頂的瓦片、空調室外機、花盆、窗戶玻璃等，這些可能墜落、倒塌或爆裂的物品。" },
          { img: "../img/earthquake_3.png" }
        ]
      },
      {
        key: 4,
        subtitle: '4.易發生震後火災的地點',
        data: [
          { content: "在菜市場及小吃攤，因為瓦斯桶存放數量較多，且經常用火，當遇到地震劇烈搖晃，若管線脫落就容易造成瓦斯外洩，注意可能釀成火災或氣爆。" },
          { content: "另外，在木造房屋較密集的地區若發生火災，則容易造成延燒現象；若是在巷弄狹窄的地方，則搶救不易，將導致災情擴大。" },
          { content: "地震後外出避難時，請盡量避開上述易發生火災的地點。" },
          { img: "../img/earthquake_4.png" }
        ]
      },
      {
        key: 5,
        subtitle: '5.易發生土壤液化的地區',
        data: [
          { content: "土壤液化是指土壤在地震影響下，土壤性質轉變為類似液體的狀態。這樣的現象會使土壤的強度大幅下降，可能引發建物損壞等災害。" },
          { content: "可前往「土壤液化潛勢查詢系統」，查詢住家是否位於土壤液化潛勢地區。若位於高度土壤液化潛勢區。" },
          { content: "若位於高度土壤液化潛勢區，可依照簡易自主檢查表自我檢視，也可向地方政府申請地質調查報告，再尋求大地技師的專業診斷。" },
          { img: "../img/earthquake_5.png" }
        ]
      }
    ]
  );

  return {
    contents_data1,
  }
}
}
</script>