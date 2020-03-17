<template>
  <dx-range-selector
    id="range-selector"
    title="Select a Lead Concentration in Water"
  >
    <dx-margin :top="50"/>
    <dx-scale
      :minor-tick-interval="0.001"
      :tick-interval="0.005"
      :start-value="0.004563"
      :end-value="0.04976"
    >
      <dx-label>
        <dx-format
          :precision="3"
          type="fixedPoint"
        />
      </dx-label>
    </dx-scale>
    <dx-slider-marker
      :customize-text="customizeText"
    >
      <dx-format
        :precision="4"
        type="fixedPoint"
      />
    </dx-slider-marker>
    <dx-behavior :snap-to-ticks="false"/>
  </dx-range-selector>
</template>
<script>
import {
  DxRangeSelector,
  DxMargin,
  DxScale,
  DxLabel,
  DxSliderMarker,
  DxFormat,
  DxBehavior
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxScale,
    DxLabel,
    DxSliderMarker,
    DxFormat,
    DxBehavior
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} mg/L`;
    }
  }
};
</script>
<style scoped>
#range-selector {
  height: 210px;
}
</style>
