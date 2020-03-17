<template>
  <dx-chart
    id="chart"
    :data-source="inflationData"
    palette="Violet"
    title="Annual Inflation Rate in 2010 and 2011"
  >
    <dx-common-series-settings
      argument-field="date"
      type="rangearea"
    />
    <dx-series
      range-value1-field="val2010"
      range-value2-field="val2011"
      name="2010 - 2011"
    />

    <dx-argument-axis :value-margins-enabled="false">
      <dx-label format="month"/>
    </dx-argument-axis>
    <dx-value-axis
      :tick-interval="0.5"
      :value-margins-enabled="false"
    >
      <dx-visual-range
        start-value="0.5"
        end-value="4"
      />
      <dx-label :customize-text="customizeLabelText">
        <dx-format
          :precision="2"
          type="fixedPoint"
        />
      </dx-label>
    </dx-value-axis>

    <dx-export :enabled="true"/>
    <dx-legend :visible="false"/>
  </dx-chart>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxArgumentAxis,
  DxValueAxis,
  DxLabel,
  DxVisualRange,
  DxFormat,
  DxExport,
  DxLegend
} from 'devextreme-vue/chart';
import { inflationData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxArgumentAxis,
    DxValueAxis,
    DxLabel,
    DxVisualRange,
    DxFormat,
    DxExport,
    DxLegend
  },
  data() {
    return {
      inflationData
    };
  },
  methods: {
    customizeLabelText({ valueText }) {
      return `${valueText} %`;
    }
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
