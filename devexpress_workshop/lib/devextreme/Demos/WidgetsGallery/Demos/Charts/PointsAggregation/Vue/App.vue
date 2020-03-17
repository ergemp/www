<template>
  <div id="chart-demo">
    <dx-chart
      id="chart"
      :data-source="weatherData"
    >
      <dx-common-series-settings argument-field="date"/>
      <dx-series
        axis="precipitation"
        color="#03a9f4"
        type="bar"
        value-field="precipitation"
        name="Precipitation"
      />
      <dx-series
        axis="temperature"
        color="#ffc0bb"
        type="rangearea"
        range-value1-field="minTemp"
        range-value2-field="maxTemp"
        name="Temperature range"
      >
        <dx-aggregation
          :enabled="useAggregation"
          :calculate="calculateRangeArea"
          method="custom"
        />
      </dx-series>
      <dx-series
        axis="temperature"
        color="#e91e63"
        value-field="temp"
        name="Average temperature"
      >
        <dx-point :size="7"/>
        <dx-aggregation
          :enabled="useAggregation"
          :method="currentFunction"
        />
      </dx-series>

      <dx-argument-axis
        :aggregation-interval="currentInterval"
        :value-margins-enabled="false"
        argument-type="datetime"
      />
      <dx-value-axis name="temperature">
        <dx-title text="Temperature, °C">
          <dx-font color="#e91e63"/>
        </dx-title>
        <dx-label>
          <dx-font color="#e91e63"/>
        </dx-label>
      </dx-value-axis>
      <dx-value-axis
        name="precipitation"
        position="right"
      >
        <dx-title text="Precipitation, mm">
          <dx-font color="#03a9f4"/>
        </dx-title>
        <dx-label>
          <dx-font color="#03a9f4"/>
        </dx-label>
      </dx-value-axis>

      <dx-legend :visible="false"/>
      <dx-tooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip"
      />
      <dx-title text="Weather in Las Vegas, NV (2017)"/>
    </dx-chart>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <dx-check-box
          :value.sync="useAggregation"
          text="Aggregation enabled"
        />
      </div>
      <div class="option">
        <span>Interval:</span>
        <dx-select-box
          :data-source="aggregationIntervals"
          :value.sync="currentInterval"
          display-expr="displayName"
          value-expr="interval"
        />
      </div>
      <div class="option">
        <span>Method:</span>
        <dx-select-box
          :data-source="aggregationFunctions"
          :value.sync="currentFunction"
          display-expr="displayName"
          value-expr="func"
        />
      </div>
    </div>
  </div>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxAggregation,
  DxPoint,
  DxArgumentAxis,
  DxValueAxis,
  DxTitle,
  DxFont,
  DxLegend,
  DxLabel,
  DxTooltip
} from 'devextreme-vue/chart';
import DxCheckBox from 'devextreme-vue/check-box';
import DxSelectBox from 'devextreme-vue/select-box';
import { weatherData, aggregationFunctions, aggregationIntervals } from './data.js';

export default {
  components: {
    DxCheckBox,
    DxSelectBox,
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxAggregation,
    DxPoint,
    DxArgumentAxis,
    DxValueAxis,
    DxTitle,
    DxFont,
    DxLegend,
    DxLabel,
    DxTooltip
  },

  data() {
    return {
      aggregationFunctions,
      aggregationIntervals,
      weatherData,
      useAggregation: true,
      currentFunction: aggregationFunctions[0].func,
      currentInterval: aggregationIntervals[0].interval
    };
  },

  methods: {
    calculateRangeArea(aggregationInfo) {
      if(!aggregationInfo.data.length) {
        return;
      }

      let temp = aggregationInfo.data.map(item => item.temp);
      return {
        date: aggregationInfo.intervalStart,
        maxTemp: Math.max.apply(null, temp),
        minTemp: Math.min.apply(null, temp)
      };
    },

    customizeTooltip(pointInfo) {
      const aggregationInfo = pointInfo.point.aggregationInfo;
      const start = aggregationInfo && aggregationInfo.intervalStart;
      const end = aggregationInfo && aggregationInfo.intervalEnd;
      const handlers = {
        'Average temperature': arg => {
          return {
            text: `${(!aggregationInfo ?
              `Date: ${arg.argument.toDateString()}` :
              `Interval: ${start.toDateString()} - ${end.toDateString()}`)
            }<br/>Temperature: ${arg.value.toFixed(2)} °C`
          };
        },
        'Temperature range': arg => {
          return {
            text: `Interval: ${start.toDateString()
            } - ${end.toDateString()
            }<br/>Temperature range: ${arg.rangeValue1
            } - ${arg.rangeValue2} °C`
          };
        },
        'Precipitation': arg => {
          return {
            text: `Date: ${arg.argument.toDateString()
            }<br/>Precipitation: ${arg.valueText} mm`
          };
        }
      };

      return handlers[pointInfo.seriesName](pointInfo);
    }
  }
};
</script>
<style>
#chart-demo {
    height: 700px;
}

#chart {
    height: 500px;
    margin: 0 0 15px;
}

.options {
    padding: 20px;
    margin-top: 20px;
    background-color: rgba(191, 191, 191, 0.15);
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option {
    margin-top: 10px;
}

.option > span {
    width: 50px;
    display: inline-block;
    margin-right: 10px;
}

.option > .dx-selectbox {
    display: inline-block;
    vertical-align: middle;
}
</style>
