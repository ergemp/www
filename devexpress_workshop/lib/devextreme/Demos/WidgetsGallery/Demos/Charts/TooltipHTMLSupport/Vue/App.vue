<template>
  <div>
    <dx-pie-chart
      id="pie-chart"
      :data-source="populationData"
      palette="Bright"
      title="Top 10 Most Populated States in US"
    >
      <dx-series
        argument-field="name"
        value-field="population"
      />
      <dx-export
        :enabled="true"
      />
      <dx-tooltip
        :enabled="true"
        content-template="tooltipTemplate"
      />
      <template #tooltipTemplate="{ data }">
        <tooltip-template :info="data"/>
      </template>
    </dx-pie-chart>
  </div>
</template>
<script>
import { populationData } from './data.js';
import { DxPieChart, DxSeries, DxExport, DxTooltip } from 'devextreme-vue/pie-chart';
import TooltipTemplate from './TooltipTemplate.vue';

export default {
  components: {
    DxPieChart, DxSeries, DxExport, DxTooltip, TooltipTemplate
  },
  data() {
    return {
      populationData: populationData
    };
  }
};
</script>
<style scoped>
#pie-chart {
    height: 440px;
}
</style>
