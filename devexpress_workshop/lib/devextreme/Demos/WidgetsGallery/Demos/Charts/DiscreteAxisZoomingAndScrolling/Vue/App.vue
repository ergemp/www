<template>
  <div>
    <div id="chart-demo">
      <dx-chart
        id="zoomedChart"
        :data-source="dataSource"
        palette="Soft"
        title="The Chemical Composition of the Earth Layers"
      >
        <dx-series
          v-for="item in series"
          :value-field="item.valueField"
          :name="item.name"
          :key="item.name"
        />
        <dx-common-series-settings
          :ignore-empty-points="true"
          type="bar"
        />
        <dx-value-axis>
          <dx-label :customize-text="customizeText"/>
        </dx-value-axis>
        <dx-argument-axis :visual-range="range"/>
        <dx-legend
          :visible="true"
          vertical-alignment="top"
          horizontal-alignment="right"
          orientation="horizontal"
        >
          <dx-border :visible="true"/>
        </dx-legend>
      </dx-chart>
      <dx-range-selector
        :data-source="dataSource"
        :value.sync="range"
      >
        <dx-size :height="120"/>
        <dx-margin :left="10"/>
        <dx-scale :minor-tick-count="1"/>
        <dx-rs-chart
          palette="Soft"
        >
          <dx-rs-chart-series
            v-for="item in series"
            :value-field="item.valueField"
            :name="item.name"
            :key="item.name"
          />
          <dx-common-series-settings-options
            :ignore-empty-points="true"
            type="bar"
          />
        </dx-rs-chart>
        <dx-behavior call-value-changed="onMoving"/>
      </dx-range-selector>
    </div>
  </div>
</template>
<script>
import { dataSource } from './data.js';
import {
  DxChart,
  DxValueAxis,
  DxArgumentAxis,
  DxLabel,
  DxLegend,
  DxBorder,
  DxCommonSeriesSettings,
  DxSeries
} from 'devextreme-vue/chart';
import {
  DxRangeSelector,
  DxSize,
  DxMargin,
  DxScale,
  DxChart as DxRsChart,
  DxBehavior,
  DxCommonSeriesSettings as DxCommonSeriesSettingsOptions,
  DxSeries as DxRsChartSeries
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxChart,
    DxValueAxis,
    DxArgumentAxis,
    DxLabel,
    DxLegend,
    DxBorder,
    DxRangeSelector,
    DxSize,
    DxMargin,
    DxScale,
    DxRsChart,
    DxBehavior,
    DxCommonSeriesSettings,
    DxCommonSeriesSettingsOptions,
    DxSeries,
    DxRsChartSeries
  },
  data() {
    return {
      dataSource,
      range: [],
      series: [{
        name: 'Si',
        valueField: 'Si'
      }, {
        name: 'Fe',
        valueField: 'Fe'
      }, {
        name: 'Ni',
        valueField: 'Ni'
      }, {
        name: 'S',
        valueField: 'S'
      }, {
        name: 'O',
        valueField: 'O'
      }, {
        name: 'Mg',
        valueField: 'Mg'
      }, {
        name: 'Al',
        valueField: 'Al'
      }, {
        name: 'K',
        valueField: 'K'
      }, {
        name: 'Na',
        valueField: 'Na'
      }]
    };
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText}%`;
    }
  }
};
</script>
<style scoped>
#zoomedChart {
  margin-bottom: 20px;
}
</style>
