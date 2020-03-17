<template>
  <dx-pie-chart
    :data-source="data"
    :animation="false"
  >
    <dx-series
      argument-field="name"
      value-field="value"
    >
      <dx-label
        :visible="true"
        :customize-text="customizeText"
      >
        <dx-connector
          :visible="true"
          :width="1"
        />
      </dx-label>
    </dx-series>
    <dx-legend :visible="false"/>
  </dx-pie-chart>
</template>
<script>

import DxPieChart, {
  DxSeries,
  DxLabel,
  DxLegend,
  DxConnector
} from 'devextreme-vue/pie-chart';

export default {
  components: {
    DxPieChart,
    DxSeries,
    DxLabel,
    DxLegend,
    DxConnector
  },
  props: {
    data: {
      type: Array,
      default: ()=>[]
    }
  },
  methods: {
    customizeText(pointInfo) {
      return `${pointInfo.argument[0].toUpperCase()}${
        pointInfo.argument.slice(1)
      }: $${pointInfo.value}M`;
    }
  },
};
</script>
