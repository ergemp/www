<template>
  <dx-chart
    id="chart"
    :data-source="iceHockeyStatistics"
    :customize-point="customizePoint"
    title="Canadian Men’s National Ice Hockey Team\n at the World Championships"
  >
    <dx-common-series-settings
      argument-field="year"
      value-field="place"
      type="spline"
    >
      <dx-point :visible="false"/>
    </dx-common-series-settings>
    <dx-series color="#888888"/>
    <dx-argument-axis
      :allow-decimals="false"
      :axis-division-factor="60"
    >
      <dx-grid :visible="true"/>
      <dx-label>
        <dx-format type="decimal"/>
      </dx-label>
    </dx-argument-axis>
    <dx-value-axis :inverted="true">
      <dx-grid :visible="false"/>
      <dx-label :customize-text="customizeText"/>
    </dx-value-axis>
    <dx-export
      :enabled="true"
      :formats="exportFormats"
    />
    <dx-legend :visible="false"/>
  </dx-chart>
</template>
<script>

import {
  DxChart,
  DxCommonSeriesSettings,
  DxSeries,
  DxArgumentAxis,
  DxGrid,
  DxLabel,
  DxFormat,
  DxValueAxis,
  DxExport,
  DxLegend,
  DxPoint
} from 'devextreme-vue/chart';

import { iceHockeyStatistics } from './data.js';

export default {

  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxArgumentAxis,
    DxGrid,
    DxLabel,
    DxFormat,
    DxValueAxis,
    DxExport,
    DxLegend,
    DxPoint
  },

  data() {
    return {
      iceHockeyStatistics,
      exportFormats: ['PNG', 'PDF', 'JPEG', 'GIF', 'SVG']
    };
  },

  methods: {
    customizePoint({ value }) {
      if (value == 1) {
        return { image: { url: '../../../../images/icon-medal-gold.png', width: 20, height: 20 }, visible: true };
      } else if (value == 2) {
        return { image: { url: '../../../../images/icon-medal-silver.png', width: 20, height: 20 }, visible: true };
      } else if (value == 3) {
        return { image: { url: '../../../../images/icon-medal-bronse.png', width: 20, height: 20 }, visible: true };
      }
    },

    customizeText({ valueText }) {
      if (valueText == 1) {
        return `${valueText}st place`;
      } else if (valueText == 2) {
        return `${valueText}nd place`;
      } else if (valueText == 3) {
        return `${valueText}rd place`;
      } else {
        return `${valueText}th place`;
      }
    }
  }
};
</script>
<style>
#chart {
	height: 440px;
}
</style>
