<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
  >
    <dx-common-series-settings type="scatter"/>
    <dx-series
      argument-field="x1"
      value-field="y1"
    />
    <dx-series
      argument-field="x2"
      value-field="y2"
    >
      <dx-point symbol="triangleDown"/>
    </dx-series>
    <dx-argument-axis :tick-interval="5">
      <dx-grid :visible="true"/>
      <dx-minor-grid :visible="true"/>
    </dx-argument-axis>
    <dx-value-axis :tick-interval="50"/>
    <dx-legend :visible="false"/>
    <dx-common-pane-settings>
      <dx-border :visible="true"/>
    </dx-common-pane-settings>
  </dx-chart>
</template>
<script>
import {
  DxChart,
  DxSeries,
  DxPoint,
  DxCommonSeriesSettings,
  DxLegend,
  DxValueAxis,
  DxArgumentAxis,
  DxGrid,
  DxMinorGrid,
  DxCommonPaneSettings,
  DxBorder
} from 'devextreme-vue/chart';
import { generateDataSource } from './data.js';

export default {
  components: {
    DxChart,
    DxSeries,
    DxPoint,
    DxCommonSeriesSettings,
    DxLegend,
    DxValueAxis,
    DxArgumentAxis,
    DxGrid,
    DxMinorGrid,
    DxCommonPaneSettings,
    DxBorder
  },
  data() {
    return {
      dataSource: generateDataSource()
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
