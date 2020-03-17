<template>
  <dx-pie-chart
    id="pie"
    :data-source="dataSource"
    palette="Bright"
    title="Olympic Medals in 2008"
  >
    <dx-series
      argument-field="country"
      value-field="medals"
    >
      <dx-label
        :visible="true"
        :customize-text="formatLabel"
        position="columns"
      >
        <dx-connector
          :visible="true"
          :width="0.5"
        />
        <dx-font :size="16"/>
      </dx-label>
    </dx-series>
    <dx-legend
      :column-count="4"
      orientation="horizontal"
      item-text-position="right"
      horizontal-alignment="center"
      vertical-alignment="bottom"
    />
    <dx-export :enabled="true"/>
  </dx-pie-chart>
</template>

<script>

import DxPieChart, {
  DxSeries,
  DxLegend,
  DxLabel,
  DxConnector,
  DxFont,
  DxExport
} from 'devextreme-vue/pie-chart';

import { dataSource } from './data.js';

export default {
  components: {
    DxPieChart,
    DxSeries,
    DxLegend,
    DxLabel,
    DxConnector,
    DxFont,
    DxExport
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    formatLabel(pointInfo) {
      return `${pointInfo.valueText} (${pointInfo.percentText})`;
    }
  }
};
</script>

<style>
#pie {
    height: 440px;
}
</style>
