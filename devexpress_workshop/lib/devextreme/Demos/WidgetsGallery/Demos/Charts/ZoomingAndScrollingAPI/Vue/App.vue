<template>
  <div>
    <dx-chart
      :data-source="zoomingData"
      :series="series"
      palette="Harmony Light"
    >
      <dx-common-series-settings>
        <dx-point :size="7"/>
      </dx-common-series-settings>
      <dx-legend :visible="false"/>
      <dx-argument-axis :visual-range="range"/>
    </dx-chart>
    <dx-range-selector
      :data-source="zoomingData"
      :value.sync="range"
    >
      <dx-size :height="120"/>
      <dx-margin :left="10"/>
      <dx-scale :minor-tick-count="1"/>
      <dx-rs-chart
        :series="series"
        palette="Harmony Light"
      />
      <dx-behavior call-value-changed="onMoving"/>
    </dx-range-selector>
  </div>
</template>
<script>
import { zoomingData } from './data.js';
import {
  DxChart,
  DxCommonSeriesSettings,
  DxPoint,
  DxLegend,
  DxArgumentAxis
} from 'devextreme-vue/chart';
import {
  DxRangeSelector,
  DxSize,
  DxMargin,
  DxScale,
  DxChart as DxRsChart,
  DxBehavior
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxPoint,
    DxLegend,
    DxArgumentAxis,
    DxRangeSelector,
    DxSize,
    DxMargin,
    DxScale,
    DxRsChart,
    DxBehavior
  },
  data() {
    return {
      zoomingData,
      range: [],
      series: [{
        valueField: 'y1'
      }, {
        valueField: 'y2'
      }, {
        valueField: 'y3'
      }]
    };
  }
};
</script>
