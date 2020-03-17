<template>
  <dx-chart
    id="chart"
    :data-source="medalStatistics"
    :rotated="true"
    point-selection-mode="multiple"
    title="Olympic Medals in 2008"
    @point-click="onPointClick"
  >
    <dx-common-series-settings
      argument-field="country"
      type="stackedbar"
    >
      <dx-selection-style>
        <dx-hatching direction="left"/>
      </dx-selection-style>
    </dx-common-series-settings>
    <dx-series
      v-for="medal in medalSources"
      :key="medal.value"
      :value-field="medal.value"
      :name="medal.name"
      :color="medal.color"
    />
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
  DxSelectionStyle,
  DxHatching,
  DxSeries,
  DxLegend,
  DxExport
} from 'devextreme-vue/chart';
import { medalSources, medalStatistics } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSelectionStyle,
    DxHatching,
    DxSeries,
    DxLegend,
    DxExport
  },
  data() {
    return {
      medalSources,
      medalStatistics
    };
  },
  methods: {
    onPointClick({ target: point }) {
      if (point.isSelected()) {
        point.clearSelection();
      } else {
        point.select();
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
