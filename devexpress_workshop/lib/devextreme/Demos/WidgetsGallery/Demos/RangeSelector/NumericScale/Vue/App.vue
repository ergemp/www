<template>
  <dx-range-selector
    id="range-selector"
    :data-source="dataSource"
    v-model="range"
    title="Select a Product Weight"
  >
    <dx-margin :top="50"/>
    <dx-chart>
      <dx-common-series-settings
        type="spline"
        argument-field="weight"
      />
      <dx-series
        value-field="appleCost"
        color="#00ff00"
      />
      <dx-series
        value-field="orangeCost"
        color="#ffa500"
      />
    </dx-chart>
    <dx-scale value-type="numeric"/>
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
  DxScale
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxScale
  },
  data() {
    return {
      dataSource: dataSource,
      range: ['1', '2']
    };
  }
};
</script>
<style scoped>
#range-selector {
  height: 400px;
}
</style>
