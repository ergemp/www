<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
    title="Noisy and Original Signals"
    @legend-click="onLegendClick"
  >
    <dx-common-series-settings
      argument-field="argument"
    >
      <dx-point :visible="false"/>
    </dx-common-series-settings>
    <dx-series
      value-field="originalValue"
      name="Original Signal"
    />
    <dx-series
      value-field="value"
      name="Noisy Signal"
    />
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
      marker-template="markerTemplate"
    />
    <template #markerTemplate="{ data }">
      <marker-template :item="data"/>
    </template>
  </dx-chart>
</template>
<script>
import { DxChart, DxSeries, DxCommonSeriesSettings, DxPoint, DxLegend } from 'devextreme-vue/chart';
import { dataSource } from './data.js';
import MarkerTemplate from './MarkerTemplate.vue';

export default {
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxPoint,
    DxLegend,
    MarkerTemplate
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    onLegendClick(e) {
      e.target.isVisible() ? e.target.hide() : e.target.show();
    }
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
