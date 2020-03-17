<template>
  <dx-chart
    id="chart"
    :data-source="grossProductData"
    :sticky-hovering="false"
    title="Great Lakes Gross State Product"
  >
    <dx-common-series-settings
      type="spline"
      argument-field="state"
      hover-mode="includePoints"
    >
      <dx-point hover-mode="allArgumentPoints"/>
    </dx-common-series-settings>
    <dx-series
      v-for="year in yearSources"
      :key="year.value"
      :value-field="year.value"
      :name="year.name"
    />
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
      hover-mode="excludePoints"
    />
    <dx-export :enabled="true"/>
  </dx-chart>
</template>
<script>

import {
  DxChart,
  DxCommonSeriesSettings,
  DxSeries,
  DxExport,
  DxLegend,
  DxPoint
} from 'devextreme-vue/chart';

import { yearSources, grossProductData } from './data.js';

export default {

  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxExport,
    DxLegend,
    DxPoint
  },

  data() {
    return {
      yearSources,
      grossProductData
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
