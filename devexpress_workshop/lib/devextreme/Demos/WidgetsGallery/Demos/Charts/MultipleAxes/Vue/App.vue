<template>
  <dx-chart
    id="chart"
    :data-source="populationData"
    palette="Vintage"
  >
    <dx-common-series-settings
      argument-field="year"
      type="fullstackedbar"
    />
    <dx-series
      v-for="continent in continentSources"
      :key="continent.value"
      :value-field="continent.value"
      :name="continent.name"
    />
    <dx-series
      axis="total"
      type="spline"
      value-field="total"
      name="Total"
      color="#008fd8"
    />

    <dx-value-axis>
      <dx-grid :visible="true"/>
    </dx-value-axis>
    <dx-value-axis
      name="total"
      position="right"
      title="Total Population, billions"
    >
      <dx-grid :visible="true"/>
    </dx-value-axis>

    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
    />
    <dx-export :enabled="true"/>
    <dx-tooltip
      :enabled="true"
      :shared="true"
      :customize-tooltip="customizeTooltip"
    >
      <dx-format
        :precision="1"
        type="largeNumber"
      />
    </dx-tooltip>
    <dx-title text="Evolution of Population by Continent"/>
  </dx-chart>
</template>
<script>

import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxValueAxis,
  DxExport,
  DxLegend,
  DxTooltip,
  DxTitle,
  DxGrid,
  DxFormat
} from 'devextreme-vue/chart';
import { continentSources, populationData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxValueAxis,
    DxExport,
    DxLegend,
    DxTooltip,
    DxTitle,
    DxGrid,
    DxFormat
  },

  data() {
    return {
      continentSources,
      populationData
    };
  },

  methods: {
    customizeTooltip(pointInfo) {
      const items = pointInfo.valueText.split('\n');
      const color = pointInfo.point.getColor();

      items.forEach((item, index) => {
        if(item.indexOf(pointInfo.seriesName) === 0) {
          const element = document.createElement('span');

          element.textContent = item;
          element.style.color = color;
          element.className = 'active';

          items[index] = element.outerHTML;
        }
      });

      return { text: items.join('\n') };
    }
  }
};
</script>
<style>
#chart {
	height: 440px;
}

.active {
	font-weight: 500;
}
</style>
