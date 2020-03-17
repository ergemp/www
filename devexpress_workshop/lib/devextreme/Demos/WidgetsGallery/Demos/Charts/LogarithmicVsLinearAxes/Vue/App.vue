<template>
  <div>
    <dx-chart
      id="chart"
      :data-source="dataSource"
      title="Damped Sine Wave"
    >
      <dx-pane name="top"/>
      <dx-pane name="bottom"/>
      <dx-series pane="top"/>
      <dx-series pane="bottom"/>
      <dx-common-axis-settings
        :end-on-tick="false"
      />
      <dx-value-axis
        :linear-threshold="-3"
        type="logarithmic"
        title="Logarithmic Axis"
        pane="top"
      />
      <dx-value-axis
        title="Linear Axis"
        pane="bottom"
      />
      <dx-tooltip
        :enabled="true"
        format="exponential"
      />
      <dx-crosshair
        :enabled="true"
      >
        <dx-horizontal-line
          :visible="false"
        />
        <dx-label
          :visible="true"
          :format="crosshairFormat"
        />
      </dx-crosshair>
      <dx-legend
        :visible="false"
      />
    </dx-chart>
  </div>
</template>
<script>
import { dataSource } from './data.js';
import { DxChart, DxPane, DxSeries, DxCommonAxisSettings, DxValueAxis, DxTooltip, DxCrosshair, DxHorizontalLine, DxLabel, DxLegend } from 'devextreme-vue/chart';

export default {
  components: {
    DxChart, DxPane, DxSeries, DxCommonAxisSettings, DxValueAxis, DxTooltip, DxCrosshair, DxHorizontalLine, DxLabel, DxLegend
  },
  data() {
    return {
      dataSource: dataSource,
      crosshairFormat: {
        type: 'fixedPoint',
        precision: 2
      }
    };
  }
};
</script>
<style scoped>
#chart {
    height: 450px;
}
</style>
