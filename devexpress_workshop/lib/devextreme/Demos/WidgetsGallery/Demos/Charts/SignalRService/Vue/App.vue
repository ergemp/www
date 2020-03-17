<template>
  <div v-if="connectionStarted">
    <dx-chart
      id="chart"
      ref="chart"
      :data-source="dataSource"
      :margin="{right: 30}"
      :customize-point="customizePoint"
      zooming-mode="all"
      scrolling-mode="all"
      title="Stock Price"
    >

      <dx-series
        argument-field="date"
        type="candlestick"
        pane="Price"
      >
        <dx-aggregation
          :enabled="true"
          :calculate="calculateCandle"
          method="custom"
        />
      </dx-series>
      <dx-series
        argument-field="date"
        value-field="volume"
        type="bar"
        color="red"
        pane="Volume"
        name="Volume"
      >
        <dx-aggregation
          :enabled="true"
          method="sum"
        />
      </dx-series>
      <dx-pane name="Price"/>
      <dx-pane
        :height="80"
        name="Volume"
      />
      <dx-legend :visible="false"/>
      <dx-argument-axis
        :min-visual-range-length="{minutes: 10}"
        :visual-range="{length: 'hour'}"
        argument-type="datetime"
      />
      <dx-zoom-and-pan argument-axis="both"/>
      <dx-value-axis :placeholder-size="50"/>
      <dx-scroll-bar :visible="true"/>
      <dx-loading-indicator :enabled="true"/>
      <dx-tooltip
        :enabled="true"
        :shared="true"
        argument-format="shortDateShortTime"
        content-template="tooltipTemplate"
      />
      <dx-crosshair
        :enabled="true"
        :horizontal-line="{visible: false}"
      />
      <template #tooltipTemplate="{ data }">
        <tooltip-template :point-info="data"/>
      </template>
    </dx-chart>
  </div>
</template>
<script>

import {
  DxChart,
  DxArgumentAxis,
  DxValueAxis,
  DxAggregation,
  DxSeries,
  DxLegend,
  DxScrollBar,
  DxZoomAndPan,
  DxLoadingIndicator,
  DxPane,
  DxTooltip,
  DxCrosshair
} from 'devextreme-vue/chart';
import CustomStore from 'devextreme/data/custom_store';
import TooltipTemplate from './TooltipTemplate.vue';
import { HubConnectionBuilder } from '@aspnet/signalr';

export default {
  components: {
    DxChart,
    DxArgumentAxis,
    DxValueAxis,
    DxAggregation,
    DxLegend,
    DxSeries,
    DxScrollBar,
    DxZoomAndPan,
    DxLoadingIndicator,
    DxPane,
    DxTooltip,
    DxCrosshair,
    TooltipTemplate
  },

  data() {
    return {
      connectionStarted: false,
      dataSource: null
    };
  },

  mounted() {
    var hubConnection = new HubConnectionBuilder()
      .withUrl('https://js.devexpress.com/Demos/NetCore/stockTickDataHub')
      .build();

    var store = new CustomStore({
      load: () => hubConnection.invoke('getAllData'),
      key: 'date'
    });

    hubConnection
      .start()
      .then(() => {
        hubConnection.on('updateStockPrice', (data) => {
          store.push([{ type: 'insert', key: data.date, data: data }]);
        });
        this.dataSource = store;
        this.connectionStarted = true;
      });
  },

  methods: {
    calculateCandle(aggregationInfo) {
      const prices = aggregationInfo.data.map(d => d.price);
      if (prices.length) {
        return {
          date: aggregationInfo.intervalStart,
          open: prices[0],
          high: Math.max.apply(null, prices),
          low: Math.min.apply(null, prices),
          close: prices[prices.length - 1]
        };
      }
    },

    customizePoint(pointInfo) {
      if(pointInfo.seriesName === 'Volume') {
        const point = this.$refs.chart.instance.getAllSeries()[0].getPointsByArg(pointInfo.argument)[0].data;
        if(point.close >= point.open) {
          return { color: '#1db2f5' };
        }
      }
    }
  }
};
</script>

<style>
#chart {
    height: 440px;
}
</style>
