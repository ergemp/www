<template>
  <dx-chart
    id="container"
    :data-source="olympicAchievements"
    title="Australian Olympic Medal Count"
  >
    <dx-common-series-settings
      type="stepline"
      argument-field="year"
    >
      <dx-point :visible="false"/>
    </dx-common-series-settings>
    <dx-series
      v-for="medal in medalSources"
      :key="medal.value"
      :value-field="medal.value"
      :name="medal.name"
      :color="medal.color"
    />
    <dx-argument-axis>
      <dx-label>
        <dx-format type="decimal"/>
      </dx-label>
    </dx-argument-axis>
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
    />
    <dx-export :enabled="true"/>
  </dx-chart>
</template>
<script>

import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxLegend,
  DxPoint,
  DxLabel,
  DxFormat
} from 'devextreme-vue/chart';
import { medalSources, olympicAchievements } from './data.js';

export default {

  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxLegend,
    DxPoint,
    DxLabel,
    DxFormat
  },

  data() {
    return {
      olympicAchievements,
      medalSources
    };
  }
};
</script>
<style>
#container {
	height: 440px;
}
</style>
