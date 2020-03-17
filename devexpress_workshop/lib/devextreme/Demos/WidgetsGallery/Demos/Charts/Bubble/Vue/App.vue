<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
    :palette="palette"
    title="Correlation between Total Population and\n Population with Age over 60"
    @series-click="seriesClick"
  >
    <dx-common-series-settings type="bubble"/>
    <dx-series
      name="Europe"
      argument-field="total1"
      value-field="older1"
      size-field="perc1"
      tag-field="tag1"
    />
    <dx-series
      name="Africa"
      argument-field="total2"
      value-field="older2"
      size-field="perc2"
      tag-field="tag2"
    />
    <dx-series
      name="Asia"
      argument-field="total3"
      value-field="older3"
      size-field="perc3"
      tag-field="tag3"
    />
    <dx-series
      name="North America"
      argument-field="total4"
      value-field="older4"
      size-field="perc4"
      tag-field="tag4"
    />
    <dx-argument-axis title="Total Population">
      <dx-label :customize-text="customizeText"/>
    </dx-argument-axis>
    <dx-value-axis title="Population with Age over 60">
      <dx-label :customize-text="customizeText"/>
    </dx-value-axis>
    <dx-legend
      :visible="true"
      position="inside"
      horizontal-alignment="left"
    >
      <dx-border :visible="true"/>
    </dx-legend>
    <dx-export :enabled="true"/>
  </dx-chart>
</template>
<script>
import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxPoint,
  DxLegend,
  DxValueAxis,
  DxArgumentAxis,
  DxLabel,
  DxBorder,
  DxTooltip,
  DxExport
} from 'devextreme-vue/chart';
import { dataSource } from './data.js';

export default {
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxPoint,
    DxLegend,
    DxValueAxis,
    DxArgumentAxis,
    DxLabel,
    DxBorder,
    DxTooltip,
    DxExport
  },
  data() {
    return {
      dataSource,
      palette: ['#00ced1', '#008000', '#ffd700', '#ff7f50']
    };
  },
  methods: {
    customizeTooltip(pointInfo) {
      return {
        text: `${pointInfo.point.tag}<br/>Total Population: ${pointInfo.argumentText}M<br/>Population with Age over 60: ${pointInfo.valueText}M (${pointInfo.size}%)`
      };
    },
    seriesClick(e) {
      const series = e.target;
      if (series.isVisible()) {
        series.hide();
      } else {
        series.show();
      }
    },
    customizeText(e) {
      return `${e.value}M`;
    }
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
