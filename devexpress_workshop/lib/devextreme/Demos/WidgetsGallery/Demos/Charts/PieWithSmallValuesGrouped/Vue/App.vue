<template>
  <dx-pie-chart
    id="pie"
    :data-source="dataSource"
    palette="Bright"
    title="Top internet languages"
  >
    <dx-series
      argument-field="language"
      value-field="percent"
    >
      <dx-label
        :visible="true"
        :customize-text="formatLabel"
        format="fixedPoint"
      >
        <dx-connector
          :visible="true"
          :width="0.5"
        />
      </dx-label>
      <dx-small-values-grouping
        :threshold="4.5"
        mode="smallValueThreshold"
      />
    </dx-series>
    <dx-legend
      horizontal-alignment="center"
      vertical-alignment="bottom"
    />
    <dx-export :enabled="true"/>
  </dx-pie-chart>
</template>

<script>

import DxPieChart, {
  DxSeries,
  DxLabel,
  DxConnector,
  DxSmallValuesGrouping,
  DxLegend,
  DxExport
} from 'devextreme-vue/pie-chart';

import { dataSource } from './data.js';

export default {
  components: {
    DxPieChart,
    DxSeries,
    DxLabel,
    DxConnector,
    DxSmallValuesGrouping,
    DxLegend,
    DxExport
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    formatLabel(pointInfo) {
      return `${pointInfo.argumentText}: ${pointInfo.valueText}%`;
    }
  }
};
</script>

<style>
#pie {
    height: 440px;
}
</style>
