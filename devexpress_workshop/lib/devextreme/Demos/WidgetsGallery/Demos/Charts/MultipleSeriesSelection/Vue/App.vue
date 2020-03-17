<template>
  <dx-chart
    id="chart"
    :data-source="statisticsData"
    series-selection-mode="multiple"
    title="Internet Explorer Statistics"
    @series-click="onSeriesClick"
  >
    <dx-common-series-settings
      argument-field="year"
      type="stackedarea"
    />
    <dx-series
      v-for="version in versionSources"
      :key="version.value"
      :value-field="version.value"
      :name="version.name"
    />
    <dx-common-axis-settings :value-margins-enabled="false"/>
    <dx-argument-axis type="discrete"/>
    <dx-value-axis>
      <dx-label>
        <dx-format
          :precision="2"
          type="percent"
        />
      </dx-label>
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
  DxCommonAxisSettings,
  DxArgumentAxis,
  DxValueAxis,
  DxLabel,
  DxFormat,
  DxLegend,
  DxExport
} from 'devextreme-vue/chart';
import { versionSources, statisticsData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxCommonAxisSettings,
    DxArgumentAxis,
    DxValueAxis,
    DxLabel,
    DxFormat,
    DxLegend,
    DxExport
  },
  data() {
    return {
      versionSources,
      statisticsData
    };
  },
  methods: {
    onSeriesClick({ target: series }) {
      if (series.isSelected()) {
        series.clearSelection();
      } else {
        series.select();
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
