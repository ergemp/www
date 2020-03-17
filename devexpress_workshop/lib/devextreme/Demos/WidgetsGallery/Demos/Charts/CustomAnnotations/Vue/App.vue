<template>
  <div>
    <dx-chart
      id="chart"
      :data-source="populationData"
      title="Top 5 Most Populated States in US"
    >
      <dx-series
        type="bar"
        argument-field="name"
        value-field="population"
        name="Population"
      />

      <dx-legend
        :visible="false"
      />
      <dx-common-annotation-settings
        :allow-dragging="true"
        type="custom"
        series="Population"
        template="annotationTemplate"
      />
      <dx-annotation
        v-for="data in populationData"
        :argument="data.name"
        :data="data"
        :key="data.name"
      />
      <template #annotationTemplate="{ data }">
        <annotation-template :annotation="data"/>
      </template>
    </dx-chart>
  </div>
</template>
<script>
import { populationData } from './data.js';
import { DxChart, DxSeries, DxLegend, DxAnnotation, DxCommonAnnotationSettings } from 'devextreme-vue/chart';
import AnnotationTemplate from './AnnotationTemplate.vue';

export default {
  components: {
    DxChart, DxSeries, DxLegend, DxAnnotation, DxCommonAnnotationSettings, AnnotationTemplate
  },
  data() {
    return {
      populationData: populationData
    };
  }
};
</script>
<style scoped>
#chart {
    height: 440px;
}
</style>
