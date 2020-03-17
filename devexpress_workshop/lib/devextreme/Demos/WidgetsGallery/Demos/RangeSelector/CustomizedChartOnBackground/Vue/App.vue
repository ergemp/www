<template>
  <dx-range-selector
    id="range-selector"
    :data-source="dataSource"
    v-model="range"
    title="Select a Range in the CPU Usage History"
  >
    <dx-margin
      :left="15"
      :right="15"
      :top="50"
    />
    <dx-scale
      :minor-tick-interval="0.5"
      :tick-interval="1"
    >
      <dx-label :customize-text="customizeText"/>
    </dx-scale>
    <dx-slider-marker :visible="false"/>
    <dx-background color="#808080"/>
    <dx-chart
      :top-indent="0.05"
      :bottom-indent="0.05"
    >
      <dx-series
        :width="3"
        color="#ffa500"
        type="line"
        argument-field="x"
        value-field="y"
      />
    </dx-chart>
  </dx-range-selector>
</template>
<script>
import { dataSource } from './data.js';
import {
  DxRangeSelector,
  DxMargin,
  DxScale,
  DxLabel,
  DxSliderMarker,
  DxBackground,
  DxChart,
  DxSeries
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxScale,
    DxLabel,
    DxSliderMarker,
    DxBackground,
    DxChart,
    DxSeries
  },
  data() {
    return {
      dataSource,
      range: [0, 5]
    };
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} s`;
    }
  }
};
</script>
<style scoped>
#range-selector {
  height: 270px;
}
</style>
