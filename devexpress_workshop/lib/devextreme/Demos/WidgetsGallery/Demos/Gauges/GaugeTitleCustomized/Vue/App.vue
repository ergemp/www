<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="7"
    >
      <dx-scale
        :start-value="0"
        :end-value="10"
        :tick-interval="2"
      />
      <dx-title
        text="Amount of Produced Gold (Kilos)"
        horizontal-alignment="center"
        vertical-alignment="bottom"
      >
        <dx-font
          :size="30"
          color="#CFB53B"
        />
        <dx-margin
          :top="25"
        />
      </dx-title>
    </dx-circular-gauge>
  </div>
</template>
<script>
import { DxCircularGauge, DxScale, DxTitle, DxFont, DxMargin } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxTitle, DxFont, DxMargin
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
