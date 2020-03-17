<template>
  <dx-range-selector
    id="range-selector"
    :data-source="dataSource"
    v-model="range"
    title="Select a Range in the Costs and Revenues History"
  >
    <dx-margin :top="50"/>
    <dx-scale>
      <dx-minor-tick-interval :days="1"/>
      <dx-tick-interval :days="7"/>
    </dx-scale>
    <dx-chart>
      <dx-series
        argument-field="t"
        value-field="costs"
      />
      <dx-series
        argument-field="t"
        value-field="income"
      />
      <dx-value-axis :min="0"/>
    </dx-chart>
  </dx-range-selector>
</template>
<script>
import { dataSource } from './data.js';
import {
  DxRangeSelector,
  DxMargin,
  DxScale,
  DxTickInterval,
  DxMinorTickInterval,
  DxChart,
  DxSeries,
  DxValueAxis
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxScale,
    DxTickInterval,
    DxMinorTickInterval,
    DxChart,
    DxSeries,
    DxValueAxis
  },
  data() {
    return {
      dataSource,
      range: [new Date(2011, 11, 25), new Date(2012, 0, 1)]
    };
  }
};
</script>
<style scoped>
#range-selector {
  height: 310px;
}
</style>
