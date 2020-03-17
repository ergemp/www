<template>
  <dx-chart
    id="chart"
    :data-source="exportData"
    :rotated="true"
    title="Economy - Export Change"
    @point-click="onPointClick"
    @legend-click="onLegendClick"
  >
    <dx-common-series-settings
      argument-field="country"
      type="bar"
      hover-mode="allArgumentPoints"
      selection-mode="allArgumentPoints"
    >
      <dx-label :visible="true">
        <dx-format
          :precision="1"
          type="percent"
        />
      </dx-label>
    </dx-common-series-settings>
    <dx-series
      value-field="year2007"
      name="2007 - 2008"
    />
    <dx-series
      value-field="year2008"
      name="2008 - 2009"
    />
    <dx-value-axis>
      <dx-label>
        <dx-format
          :precision="1"
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
  DxLabel,
  DxFormat,
  DxValueAxis,
  DxLegend,
  DxExport
} from 'devextreme-vue/chart';
import { exportData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxLabel,
    DxFormat,
    DxValueAxis,
    DxLegend,
    DxExport
  },
  data() {
    return {
      exportData
    };
  },
  methods: {
    onPointClick({ target: point }) {
      point.select();
    },

    onLegendClick({ target: series }) {
      if(series.isVisible()) {
        series.hide();
      } else {
        series.show();
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
