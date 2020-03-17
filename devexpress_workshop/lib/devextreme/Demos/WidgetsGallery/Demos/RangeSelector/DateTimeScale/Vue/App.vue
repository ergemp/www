<template>
  <dx-range-selector
    id="range-selector"
    :data-source="dataSource"
    v-model="range"
    title="Select a Month Period"
  >
    <dx-margin :top="50"/>
    <dx-chart>
      <dx-common-series-settings
        type="steparea"
        argument-field="date"
      />
      <dx-series
        value-field="dayT"
        color="yellow"
      />
      <dx-series
        value-field="nightT"
      />
    </dx-chart>
    <dx-scale value-type="datetime">
      <dx-tick-interval :days="2"/>
      <dx-minor-tick-interval :days="1"/>
    </dx-scale>
    <dx-slider-marker format="day"/>
  </dx-range-selector>
</template>
<script>
import { dataSource } from './data.js';
import {
  DxRangeSelector,
  DxMargin,
  DxChart,
  DxCommonSeriesSettings,
  DxSeries,
  DxScale,
  DxTickInterval,
  DxMinorTickInterval,
  DxSliderMarker
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxScale,
    DxTickInterval,
    DxMinorTickInterval,
    DxSliderMarker
  },
  data() {
    return {
      dataSource,
      range: ['2013/03/01', '2013/03/07']
    };
  }
};
</script>
<style scoped>
#range-selector {
  height: 400px;
}
</style>
