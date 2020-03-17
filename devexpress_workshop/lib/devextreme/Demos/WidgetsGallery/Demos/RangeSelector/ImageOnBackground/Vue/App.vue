<template>
  <dx-range-selector
    id="range-selector"
    v-model="range"
    title="Select a Time Period"
  >
    <dx-margin
      :top="50"
      :bottom="0"
    />
    <dx-background>
      <dx-image
        url="../../../../images/RangeImage.png"
        location="full"
      />
    </dx-background>
    <dx-indent
      :left="65"
      :right="65"
    />
    <dx-slider-marker
      :placeholder-height="30"
      format="shorttime"
    />
    <dx-scale
      :start-value="startValue"
      :end-value="endValue"
      :placeholder-height="20"
    >
      <dx-tick-interval :hours="2"/>
      <dx-minor-tick-interval :hours="1"/>
      <dx-label format="shorttime"/>
    </dx-scale>
  </dx-range-selector>
</template>
<script>
import {
  DxRangeSelector,
  DxMargin,
  DxBackground,
  DxImage,
  DxIndent,
  DxSliderMarker,
  DxScale,
  DxTickInterval,
  DxMinorTickInterval,
  DxLabel
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxBackground,
    DxImage,
    DxIndent,
    DxSliderMarker,
    DxScale,
    DxTickInterval,
    DxMinorTickInterval,
    DxLabel
  },
  data() {
    return {
      startValue: new Date(2012, 8, 29, 0, 0, 0),
      endValue: new Date(2012, 8, 29, 24, 0, 0),
      range: [new Date(2012, 8, 29, 11, 0, 0), new Date(2012, 8, 29, 17, 0, 0)]
    };
  }
};
</script>
<style scoped>
#range-selector {
  height: 300px;
}
</style>
