<template>
  <div class="pies-container">
    <dx-pie-chart
      v-for="(options, index) in pieCharts"
      :key="index"
      :data-source="options.dataSource"
      :title="options.title"
      :palette="options.palette"
      class="pie"
      size-group="piesGroup"
    >
      <dx-series
        argument-field="name"
        value-field="area"
      >
        <dx-label
          :visible="true"
          format="percent"
        />
      </dx-series>
      <dx-legend
        :row-count="2"
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="right"
      />
    </dx-pie-chart>
  </div>
</template>

<script>

import DxPieChart, {
  DxSeries,
  DxLabel,
  DxLegend
} from 'devextreme-vue/pie-chart';

import { countries, waterLandRatio } from './data.js';

export default {
  components: {
    DxPieChart,
    DxSeries,
    DxLabel,
    DxLegend
  },
  data() {
    return {
      pieCharts: [{
        title: 'Area of Countries',
        palette: 'Soft',
        dataSource: countries
      }, {
        title: 'Water/Land Ratio',
        palette: 'Soft Pastel',
        dataSource: waterLandRatio
      }]
    };
  }
};
</script>

<style>
.pies-container {
    margin: auto;
    width: 800px;
}

.pies-container > .pie {
    width: 400px;
    float: left;
}
</style>
