<template>
  <div id="chart-demo">
    <dx-chart
      id="zoomedChart"
      :data-source="dataSource"
      title="Google Inc. Stock Prices"
    >
      <dx-series
        type="candlestick"
        open-value-field="Open"
        high-value-field="High"
        low-value-field="Low"
        close-value-field="Close"
        argument-field="Date"
      >
        <dx-aggregation :enabled="true"/>
      </dx-series>
      <dx-argument-axis
        :visual-range="visualRange"
        :value-margins-enabled="false"
        argument-type="datetime"
      >
        <dx-grid :visible="true"/>
        <dx-label :visible="false"/>
      </dx-argument-axis>
      <dx-value-axis value-type="numeric"/>
      <dx-margin :right="10"/>
      <dx-legend :visible="false"/>
      <dx-tooltip :enabled="true"/>
    </dx-chart>
    <dx-range-selector
      :data-source="dataSource"
      :value.sync="visualRange"
    >
      <dx-size :height="120"/>
      <dx-rs-chart>
        <dx-rs-value-axis value-type="numeric"/>
        <dx-rs-series
          type="line"
          value-field="Open"
          argument-field="Date"
        >
          <dx-rs-aggregation :enabled="true"/>
        </dx-rs-series>
      </dx-rs-chart>
      <dx-scale
        :placeholder-height="20"
        minor-tick-interval="day"
        tick-interval="month"
        value-type="datetime"
        aggregation-interval="week"
      />
      <dx-behavior
        :snap-to-ticks="false"
        call-value-changed="onMoving"
      />
    </dx-range-selector>
  </div>
</template>
<script>

import DxChart, {
  DxSeries,
  DxAggregation,
  DxArgumentAxis,
  DxGrid,
  DxLabel,
  DxValueAxis,
  DxMargin,
  DxLegend,
  DxTooltip
} from 'devextreme-vue/chart';

import DxRangeSelector, {
  DxSize,
  DxScale,
  DxChart as DxRsChart,
  DxValueAxis as DxRsValueAxis,
  DxSeries as DxRsSeries,
  DxAggregation as DxRsAggregation,
  DxBehavior
} from 'devextreme-vue/range-selector';

import { dataSource } from './data.js';

export default {
  components: {
    DxChart,
    DxSeries,
    DxAggregation,
    DxArgumentAxis,
    DxGrid,
    DxLabel,
    DxValueAxis,
    DxMargin,
    DxLegend,
    DxTooltip,
    DxRangeSelector,
    DxSize,
    DxScale,
    DxRsChart,
    DxRsValueAxis,
    DxRsSeries,
    DxRsAggregation,
    DxBehavior
  },
  data() {
    return {
      dataSource,
      visualRange: []
    };
  }
};
</script>
<style>
#chart-demo {
    height: 450px;
}

#zoomedChart {
    height: 315px;
    margin: 0 0 15px;
}

#chart-demo > div:not(#zoomedChart) {
    height: 120px;
}
</style>
