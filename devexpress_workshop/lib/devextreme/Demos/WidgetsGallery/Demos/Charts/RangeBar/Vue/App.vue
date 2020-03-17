<template>
  <dx-chart
    id="chart"
    :data-source="oilPrices"
    palette="Violet"
    title="Crude Oil Prices in 2005"
  >
    <dx-common-series-settings
      argument-field="date"
      type="rangebar"
    />
    <dx-series
      range-value1-field="aVal1"
      range-value2-field="aVal2"
      name="ANS West Coast"
    />
    <dx-series
      range-value1-field="tVal1"
      range-value2-field="tVal2"
      name="West Texas Intermediate"
    />

    <dx-argument-axis>
      <dx-label format="month"/>
    </dx-argument-axis>
    <dx-value-axis title="$ per barrel"/>

    <dx-export :enabled="true"/>
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
    />
  </dx-chart>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxArgumentAxis,
  DxValueAxis,
  DxLabel,
  DxExport,
  DxLegend
} from 'devextreme-vue/chart';
import { oilPrices } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxArgumentAxis,
    DxValueAxis,
    DxLabel,
    DxExport,
    DxLegend
  },
  data() {
    return {
      oilPrices
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
