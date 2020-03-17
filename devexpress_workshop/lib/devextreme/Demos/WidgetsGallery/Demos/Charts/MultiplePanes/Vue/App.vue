<template>
  <dx-chart
    id="chart"
    :data-source="weatherData"
    default-pane="bottomPane"
    title="Weather in Glendale, CA"
  >
    <dx-common-series-settings argument-field="month"/>
    <dx-series
      pane="topPane"
      color="#b0daff"
      type="rangeArea"
      range-value1-field="minT"
      range-value2-field="maxT"
      name="Monthly Temperature Ranges, °C"
    />
    <dx-series
      pane="topPane"
      value-field="avgT"
      name="Average Temperature, °C"
    >
      <dx-label
        :visible="true"
        :customize-text="temperatureCustomizeText"
      />
    </dx-series>
    <dx-series
      type="bar"
      value-field="prec"
      name="prec, mm"
    >
      <dx-label
        :visible="true"
        :customize-text="precipitationCustomizeText"
      />
    </dx-series>

    <dx-pane name="topPane"/>
    <dx-pane name="bottomPane"/>

    <dx-value-axis pane="bottomPane">
      <dx-grid :visible="true"/>
      <dx-title text="Precipitation, mm"/>
    </dx-value-axis>
    <dx-value-axis pane="topPane">
      <dx-grid :visible="true"/>
      <dx-title text="Temperature, °C"/>
    </dx-value-axis>

    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
    />
    <dx-export :enabled="true"/>
  </dx-chart>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxPane,
  DxValueAxis,
  DxExport,
  DxLegend,
  DxLabel,
  DxTitle,
  DxGrid
} from 'devextreme-vue/chart';
import { weatherData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxPane,
    DxValueAxis,
    DxExport,
    DxLegend,
    DxLabel,
    DxTitle,
    DxGrid
  },

  data() {
    return {
      weatherData
    };
  },

  methods: {
    temperatureCustomizeText({ valueText }) {
      return `${valueText} °C`;
    },

    precipitationCustomizeText({ valueText }) {
      return `${valueText} mm`;
    }
  }
};
</script>
<style>
#chart {
	height: 440px;
}
</style>
