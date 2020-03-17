<template>
  <dx-polar-chart
    id="chart"
    :data-source="productionData"
    :use-spider-web="true"
    title="Fruit Production in 2010 (Millions of Tons)"
  >
    <dx-common-series-settings type="line"/>
    <dx-series
      v-for="fruit in fruitSources"
      :key="fruit.value"
      :value-field="fruit.value"
      :name="fruit.name"
    />
    <dx-export :enabled="true"/>
    <dx-tooltip :enabled="true"/>
  </dx-polar-chart>
</template>
<script>

import {
  DxPolarChart,
  DxCommonSeriesSettings,
  DxSeries,
  DxExport,
  DxTooltip
} from 'devextreme-vue/polar-chart';

import { fruitSources, productionData } from './data.js';

export default {

  components: {
    DxPolarChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxExport,
    DxTooltip
  },

  data() {
    return {
      fruitSources,
      productionData
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
