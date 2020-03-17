<template>
  <div>
    <div class="long-title"><h3>Energy Production (GWh, 2016)</h3></div>
    <div class="pies-container">
      <dx-pie-chart
        v-for="country in countries"
        id="pie-chart"
        :key="country"
        :data-source="data.filter(i=>i.country===country)"
        :inner-radius="0.65"
        resolve-label-overlapping="shift"
        size-group="piesGroup"
        type="doughnut"
        center-template="centerTemplate"
      >
        <dx-series
          argument-field="commodity"
          value-field="total"
        >
          <dx-label
            :visible="true"
            :customize-text="customizeLabel"
            background-color="none"
            format="fixedPoint"
          >
            <dx-connector :visible="true"/>
          </dx-label>
        </dx-series>
        <dx-legend :visible="false"/>
        <template #centerTemplate="{ data }">
          <center-template :pie-chart="data"/>
        </template>
      </dx-pie-chart>
    </div>
  </div>
</template>
<script>
import { data } from './data.js';
import { DxPieChart, DxSeries, DxExport, DxTooltip, DxLegend, DxLabel, DxConnector } from 'devextreme-vue/pie-chart';
import CenterTemplate from './CenterTemplate.vue';

export default {
  components: {
    DxPieChart, DxSeries, DxExport, DxTooltip, DxLegend, DxLabel, DxConnector, CenterTemplate
  },
  data() {
    return {
      data: data,
      countries: Array.from(new Set(data.map(item => item.country)))
    };
  },
  methods: {
    customizeLabel({ argumentText, valueText }) {
      return `${argumentText}\n${valueText}`;
    }
  }
};
</script>
<style scoped>
.pies-container {
    margin: auto;
    width: 800px;
}

.pies-container > div {
    width: 400px;
    float: left;
    margin-top: -50px;
}

.long-title h3 {
    font-weight: 200;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
