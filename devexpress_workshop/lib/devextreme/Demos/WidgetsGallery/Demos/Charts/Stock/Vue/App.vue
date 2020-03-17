<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
    title="Stock Price"
  >
    <dx-common-series-settings
      argument-field="date"
      type="stock"
    />
    <dx-series
      name="DELL"
      open-value-field="o"
      high-value-field="h"
      low-value-field="l"
      close-value-field="c"
    >
      <dx-reduction color="red"/>
    </dx-series>
    <dx-argument-axis :workdays-only="true">
      <dx-label format="shortDate"/>
    </dx-argument-axis>
    <dx-value-axis :tick-interval="1">
      <dx-title text="US dollars"/>
      <dx-label>
        <dx-format
          :precision="0"
          type="currency"
        />
      </dx-label>
    </dx-value-axis>
    <dx-export :enabled="true"/>
    <dx-tooltip
      :enabled="true"
      :customize-tooltip="customizeTooltip"
      location="edge"
    />
  </dx-chart>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxReduction,
  DxArgumentAxis,
  DxLabel,
  DxFormat,
  DxValueAxis,
  DxTitle,
  DxExport,
  DxTooltip
} from 'devextreme-vue/chart';

import { dataSource } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxReduction,
    DxArgumentAxis,
    DxLabel,
    DxFormat,
    DxValueAxis,
    DxTitle,
    DxExport,
    DxTooltip
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    customizeTooltip(pointInfo) {
      return {
        text: `Open: $${pointInfo.openValue}<br/>
Close: $${pointInfo.closeValue}<br/>
High: $${pointInfo.highValue}<br/>
Low: $${pointInfo.lowValue}<br/>`
      };
    }
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
