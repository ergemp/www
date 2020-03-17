<template>
  <dx-chart
    id="chart"
    :customize-point="customizePoint"
    :data-source="dataSource"
    title="Relative Masses of the Heaviest Solar System Objects"
  >
    <dx-series
      argument-field="name"
      value-field="mass"
      type="scatter"
    >
      <dx-point :size="20"/>
    </dx-series>
    <dx-value-axis
      type="logarithmic"
      title="Mass Relative to the Earth"
    />
    <dx-argument-axis>
      <dx-grid :visible="true"/>
      <dx-label
        :rotation-angle="20"
        overlapping-behavior="rotate"
      />
    </dx-argument-axis>
    <dx-legend :visible="false"/>
    <dx-export :enabled="true"/>
    <dx-common-pane-settings>
      <dx-border :visible="true"/>
    </dx-common-pane-settings>
    <dx-tooltip :enabled="true"/>
  </dx-chart>
</template>
<script>
import {
  DxChart,
  DxSeries,
  DxValueAxis,
  DxLabel,
  DxLegend,
  DxExport,
  DxGrid,
  DxArgumentAxis,
  DxTooltip,
  DxCommonPaneSettings,
  DxBorder,
  DxTitle,
  DxPoint
} from 'devextreme-vue/chart';

import { dataSource } from './data.js';

export default {

  components: {
    DxChart,
    DxSeries,
    DxValueAxis,
    DxLabel,
    DxLegend,
    DxExport,
    DxGrid,
    DxArgumentAxis,
    DxTooltip,
    DxCommonPaneSettings,
    DxBorder,
    DxTitle,
    DxPoint
  },

  data() {
    return { dataSource };
  },

  methods: {
    customizePoint({ data }) {
      let color, hoverStyle;
      switch (data.type) {
        case 'Star':
          color = 'red';
          hoverStyle = { border: { color: 'red' } };
          break;
        case 'Satellite':
          color = 'gray';
          hoverStyle = { border: { color: 'gray' } };
      }
      return { color, hoverStyle };
    }
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
