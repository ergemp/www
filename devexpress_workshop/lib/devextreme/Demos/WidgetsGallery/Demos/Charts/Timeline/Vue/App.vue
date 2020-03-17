<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
    :rotated="true"
    :bar-group-padding="0.2"
  >
    <dx-argument-axis :categories="categories">
      <dx-tick :visible="false"/>
    </dx-argument-axis>
    <dx-title
      text="The British Monarchy"
      subtitle="An Abbreviated Timeline"
    />
    <dx-common-series-settings
      argument-field="monarch"
      type="rangebar"
      range-value1-field="start"
      range-value2-field="end"
      bar-overlap-group="monarchs"
    />
    <dx-series-template name-field="house"/>
    <dx-animation :enabled="false"/>
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
    >
      <dx-title text="Royal Houses"/>
    </dx-legend>
  </dx-chart>
</template>
<script>
import {
  DxChart,
  DxCommonSeriesSettings,
  DxArgumentAxis,
  DxAnimation,
  DxTick,
  DxSeriesTemplate,
  DxLegend,
  DxTitle
} from 'devextreme-vue/chart';
import dataSource from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxArgumentAxis,
    DxAnimation,
    DxSeriesTemplate,
    DxLegend,
    DxTitle,
    DxTick,
  },
  data() {
    return {
      dataSource,
      categories: ['Royal Houses']
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
