<template>
  <dx-chart
    id="chart"
    :data-source="weatherData"
    default-pane="bottom"
  >
    <dx-common-series-settings argument-field="month"/>
    <dx-series
      pane="top"
      value-field="avgT"
      name="Average Temperature, °C"
    >
      <dx-value-error-bar
        :line-width="1"
        :opacity="0.8"
        low-value-field="avgLowT"
        high-value-field="avgHighT"
      />
    </dx-series>
    <dx-series
      pane="bottom"
      value-field="avgH"
      type="bar"
      name="Average Humidity, %"
    >
      <dx-value-error-bar
        :value="3"
        :line-width="1"
        type="fixed"
      />
    </dx-series>

    <dx-pane name="top"/>
    <dx-pane name="bottom"/>

    <dx-argument-axis>
      <dx-label display-mode="stagger"/>
    </dx-argument-axis>
    <dx-value-axis pane="top">
      <dx-grid :visible="true"/>
      <dx-title text="Temperature, °C"/>
    </dx-value-axis>
    <dx-value-axis
      :tick-interval="50"
      pane="bottom"
    >
      <dx-grid :visible="true"/>
      <dx-title text="Humidity, %"/>
    </dx-value-axis>

    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
    />
    <dx-export :enabled="true"/>
    <dx-tooltip
      :enabled="true"
      :customize-tooltip="customizeTooltip"
    />
    <dx-title text="Weather in Los Angeles, California"/>
  </dx-chart>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxValueErrorBar,
  DxPane,
  DxArgumentAxis,
  DxValueAxis,
  DxExport,
  DxLegend,
  DxLabel,
  DxTitle,
  DxTooltip,
  DxGrid
} from 'devextreme-vue/chart';
import { weatherData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxValueErrorBar,
    DxPane,
    DxArgumentAxis,
    DxValueAxis,
    DxExport,
    DxLegend,
    DxLabel,
    DxTitle,
    DxTooltip,
    DxGrid
  },

  data() {
    return {
      weatherData
    };
  },

  methods: {
    customizeTooltip(pointInfo) {
      return {
        text: `${pointInfo.seriesName}: ${pointInfo.value
        } (range: ${pointInfo.lowErrorValue
        } - ${pointInfo.highErrorValue})`
      };
    }
  }
};
</script>
<style>
#chart {
	height: 440px;
}
</style>
