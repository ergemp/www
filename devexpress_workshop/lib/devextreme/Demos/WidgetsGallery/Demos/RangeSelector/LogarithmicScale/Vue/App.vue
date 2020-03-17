<template>
  <div>
    <dx-chart
      id="zoomed-chart"
      :data-source="dataSource"
      :resize-panes-on-zoom="true"
    >
      <dx-series/>
      <dx-argument-axis
        :value-margins-enabled="false"
        :minor-tick-count="10"
        :visual-range="range"
        type="logarithmic"
      >
        <dx-label format="exponential"/>
        <dx-grid :visible="true"/>
        <dx-minor-grid :visible="true"/>
      </dx-argument-axis>
      <dx-legend :visible="false"/>
    </dx-chart>
    <dx-range-selector
      id="range-selector"
      :data-source="dataSource"
      :value.sync="range"
    >
      <dx-rs-chart>
        <dx-rs-series/>
      </dx-rs-chart>
      <dx-scale
        :min-range="1"
        :minor-tick-count="10"
        type="logarithmic"
      >
        <dx-rs-label format="exponential"/>
      </dx-scale>
      <dx-slider-marker format="exponential"/>
      <dx-behavior
        :snap-to-ticks="false"
        call-value-changed="onMoving"
      />
    </dx-range-selector>
  </div>
</template>
<script>
import { dataSource } from './data.js';
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxGrid,
  DxMinorGrid,
  DxLegend,
  DxLabel
} from 'devextreme-vue/chart';
import {
  DxRangeSelector,
  DxScale,
  DxSliderMarker,
  DxBehavior,
  DxLabel as DxRsLabel,
  DxChart as DxRsChart,
  DxSeries as DxRsSeries
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxGrid,
    DxMinorGrid,
    DxLegend,
    DxLabel,
    DxRangeSelector,
    DxScale,
    DxSliderMarker,
    DxBehavior,
    DxRsLabel,
    DxRsChart,
    DxRsSeries
  },
  data() {
    return {
      dataSource,
      range: []
    };
  }
};
</script>
<style scoped>
#zoomed-chart{
    height: 335px;
    margin: 0 0 15px;
}

#range-selector {
    height: 120px;
}
</style>
