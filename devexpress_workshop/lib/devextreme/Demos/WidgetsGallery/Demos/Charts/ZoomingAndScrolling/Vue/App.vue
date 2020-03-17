<template>
  <dx-chart
    id="chart"
    :data-source="zoomingData"
    palette="Harmony Light"
  >
    <dx-series value-field="y1"/>
    <dx-series value-field="y2"/>
    <dx-argument-axis :visual-range="initialRange"/>
    <dx-scroll-bar :visible="true"/>
    <dx-zoom-and-pan argument-axis="both"/>
    <dx-legend :visible="false"/>
  </dx-chart>
</template>
<script>
import { zoomingData } from './data.js';
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxScrollBar,
  DxZoomAndPan,
  DxLegend
} from 'devextreme-vue/chart';

export default {
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxScrollBar,
    DxZoomAndPan,
    DxLegend
  },
  data() {
    return {
      zoomingData,
      initialRange: [300, 500]
    };
  }
};
</script>
<style scoped>
#chart {
  height: 440px;
  width: 100%;
}
</style>
