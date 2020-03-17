<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
  >
    <dx-title text="Production of Crude Oil">
      <dx-subtitle text="(in Barrels)"/>
    </dx-title>
    <dx-common-series-settings
      argument-field="state"
      value-field="value"
      type="bar"
    >
      <dx-aggregation
        :enabled="true"
        method="sum"
      />
    </dx-common-series-settings>
    <dx-argument-axis :aggregate-by-category="true"/>
    <dx-series-template name-field="year"/>
  </dx-chart>
</template>
<script>

import DxChart, {
  DxArgumentAxis,
  DxTitle,
  DxSubtitle,
  DxCommonSeriesSettings,
  DxAggregation,
  DxSeriesTemplate
} from 'devextreme-vue/chart';

import { oilProductionData } from './data.js';

export default {
  components: {
    DxChart,
    DxArgumentAxis,
    DxTitle,
    DxSubtitle,
    DxCommonSeriesSettings,
    DxAggregation,
    DxSeriesTemplate
  },

  data() {
    return {
      dataSource: oilProductionData
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
