<template>
  <dx-polar-chart
    id="chart"
    :data-source="dataSource"
    title="Archimedean Spiral"
  >
    <dx-series
      :closed="false"
      type="line"
      name="Function"
    />
    <dx-argument-axis
      :inverted="true"
      :start-angle="90"
      :tick-interval="45"
      :period="360"
    />
    <dx-export :enabled="true"/>
    <dx-legend :visible="false"/>
  </dx-polar-chart>
</template>
<script>

import {
  DxPolarChart,
  DxSeries,
  DxArgumentAxis,
  DxExport,
  DxLegend
} from 'devextreme-vue/polar-chart';

import { dataSource } from './data.js';

export default {

  components: {
    DxPolarChart,
    DxSeries,
    DxArgumentAxis,
    DxExport,
    DxLegend
  },

  data() {
    return {
      dataSource
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
