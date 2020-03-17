<template>
  <div>
    <dx-polar-chart
      id="zoomedChart"
      :data-source="dataSource"
      title="Stochastic Process"
    >
      <dx-common-series-settings
        :closed="false"
        argument-field="argument"
      />
      <dx-series
        type="scatter"
        name="Test results"
        value-field="value"
      >
        <dx-point :size="8"/>
      </dx-series>
      <dx-series
        type="line"
        name="Expected average"
        value-field="originalValue"
      >
        <dx-point :visible="false"/>
      </dx-series>
      <dx-argument-axis
        :start-angle="90"
        :tick-interval="30"
      />
      <dx-value-axis :visual-range="visualRange"/>
      <dx-export :enabled="true"/>
      <dx-legend
        hover-mode="excludePoints"
        vertical-alignment="top"
        horizontal-alignment="center"
      />
    </dx-polar-chart>
    <dx-range-selector
      :value.sync="visualRange"
    >
      <dx-size :height="100"/>
      <dx-margin
        :top="10"
        :left="60"
        :bottom="10"
        :right="50"
      />
      <dx-scale
        :start-value="0"
        :end-value="8"
        :minor-tick-interval="0.1"
        :tick-interval="1"
      >
        <dx-minor-tick :visible="false"/>
      </dx-scale>
      <dx-behavior call-value-changed="onMoving"/>
    </dx-range-selector>
  </div>
</template>
<script>
import DxPolarChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxPoint,
  DxArgumentAxis,
  DxValueAxis,
  DxExport,
  DxLegend
} from 'devextreme-vue/polar-chart';

import DxRangeSelector, {
  DxSize,
  DxMargin,
  DxScale,
  DxMinorTick,
  DxBehavior
} from 'devextreme-vue/range-selector';

import { dataSource } from './data.js';

export default {
  components: {
    DxPolarChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxPoint,
    DxArgumentAxis,
    DxValueAxis,
    DxExport,
    DxLegend,
    DxRangeSelector,
    DxSize,
    DxMargin,
    DxScale,
    DxMinorTick,
    DxBehavior
  },
  data() {
    return {
      dataSource,
      visualRange: {
        startValue: 0,
        endValue: 8
      }
    };
  }
};
</script>
<style>
#zoomedChart {
	height: 440px;
	width: 100%;
}
</style>
