<template>
  <dx-range-selector
    id="range-selector"
    v-model="range"
    title="Select House Price Range"
  >
    <dx-margin :top="50"/>
    <dx-scale
      :start-value="15000"
      :end-value="150000"
      :minor-tick-interval="500"
      :tick-interval="15000"
    >
      <dx-minor-tick :visible="false"/>
      <dx-label format="currency"/>
    </dx-scale>
    <dx-slider-marker format="currency"/>
  </dx-range-selector>
</template>
<script>
import {
  DxRangeSelector,
  DxMargin,
  DxScale,
  DxMinorTick,
  DxLabel,
  DxSliderMarker
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxScale,
    DxMinorTick,
    DxLabel,
    DxSliderMarker
  },
  data() {
    return {
      range: [40000, 80000]
    };
  }
};
</script>
<style scoped>
#range-selector {
  height: 210px;
}
</style>
