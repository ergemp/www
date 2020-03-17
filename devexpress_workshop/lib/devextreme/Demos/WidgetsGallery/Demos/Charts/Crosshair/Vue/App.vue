<template>
  <dx-chart
    id="chart"
    :data-source="countriesInfo"
  >
    <dx-common-series-settings
      type="spline"
      argument-field="country"
    >
      <dx-point hover-mode="allArgumentPoints"/>
    </dx-common-series-settings>
    <dx-series
      v-for="source in energySources"
      :key="source.value"
      :value-field="source.value"
      :name="source.name"
    />
    <dx-argument-axis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels"
    >
      <dx-grid :visible="true"/>
    </dx-argument-axis>
    <dx-crosshair
      :enabled="true"
      :width="3"
      color="#949494"
      dash-style="dot"
    >
      <dx-label
        :visible="true"
        background-color="#949494"
      >
        <dx-font
          :size="12"
          color="#fff"
        />
      </dx-label>
    </dx-crosshair>
    <dx-legend
      :equal-column-width="true"
      vertical-alignment="bottom"
      horizontal-alignment="center"
      item-text-position="bottom"
    />
    <dx-title text="Energy Consumption in 2004">
      <dx-subtitle text="(Millions of Tons, Oil Equivalent)"/>
    </dx-title>
    <dx-export :enabled="true"/>
    <dx-tooltip :enabled="true"/>
  </dx-chart>
</template>
<script>

import {
  DxChart,
  DxCommonSeriesSettings,
  DxSeries,
  DxArgumentAxis,
  DxGrid,
  DxCrosshair,
  DxExport,
  DxLegend,
  DxPoint,
  DxLabel,
  DxFont,
  DxTitle,
  DxSubtitle,
  DxTooltip
} from 'devextreme-vue/chart';
import { energySources, countriesInfo } from './data.js';

export default {

  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxArgumentAxis,
    DxGrid,
    DxCrosshair,
    DxExport,
    DxLegend,
    DxPoint,
    DxLabel,
    DxFont,
    DxTitle,
    DxSubtitle,
    DxTooltip
  },

  data() {
    return {
      countriesInfo,
      energySources
    };
  }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>
