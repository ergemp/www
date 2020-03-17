<template>
  <dx-range-selector
    id="range-selector"
    v-model="range"
    title="Select a Vacation Period"
  >
    <dx-margin :top="50"/>
    <dx-scale
      :start-value="startValue"
      :end-value="endValue"
    >
      <dx-minor-tick :visible="false"/>
      <dx-minor-tick-interval :days="1"/>
      <dx-tick-interval :weeks="1"/>
      <dx-min-range :weeks="1"/>
      <dx-max-range :months="1"/>
    </dx-scale>
    <dx-slider-marker format="monthAndDay"/>
  </dx-range-selector>
</template>
<script>
import {
  DxRangeSelector,
  DxMargin,
  DxScale,
  DxMinorTick,
  DxMinorTickInterval,
  DxTickInterval,
  DxMinRange,
  DxMaxRange,
  DxSliderMarker
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxScale,
    DxMinorTick,
    DxMinorTickInterval,
    DxTickInterval,
    DxMinRange,
    DxMaxRange,
    DxSliderMarker
  },
  data() {
    return {
      startValue: new Date(2011, 1, 1),
      endValue: new Date(2011, 6, 1),
      range: [new Date(2011, 1, 5), new Date(2011, 2, 5)]
    };
  }
};
</script>
<style scoped>
#range-selector {
  height: 250px;
}
</style>
