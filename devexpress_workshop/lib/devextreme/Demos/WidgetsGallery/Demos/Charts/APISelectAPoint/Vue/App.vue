<template>
  <dx-chart
    id="chart"
    :data-source="catBreedsData"
    :rotated="true"
    title="Most Popular US Cat Breeds"
    @done="onDone"
    @point-click="onPointClick"
  >
    <dx-common-series-settings
      argument-field="breed"
      type="bar"
    />
    <dx-series
      value-field="count"
      name="breeds"
      color="#a3d6d2"
    >
      <dx-selection-style color="#ec2e7a">
        <dx-hatching direction="none"/>
      </dx-selection-style>
    </dx-series>
    <dx-legend :visible="false"/>
    <dx-export :enabled="true"/>
  </dx-chart>
</template>
<script>
import DxChart, {
  DxCommonSeriesSettings,
  DxSelectionStyle,
  DxHatching,
  DxSeries,
  DxLegend,
  DxExport
} from 'devextreme-vue/chart';
import { catBreedsData } from './data.js';

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSelectionStyle,
    DxHatching,
    DxSeries,
    DxLegend,
    DxExport
  },
  data() {
    return {
      catBreedsData
    };
  },
  methods: {
    onDone({ component }) {
      component.getSeriesByPos(0).getPointsByArg('Siamese')[0].select();
    },

    onPointClick({ target: point }) {
      if (point.isSelected()) {
        point.clearSelection();
      } else {
        point.select();
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
