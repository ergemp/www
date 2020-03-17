<template>
  <dx-range-selector
    id="range-selector"
    :data-source="dataSource"
    title="Select a Year Period"
  >
    <dx-margin :top="50"/>
    <dx-chart>
      <dx-common-series-settings
        argument-field="year"
        value-field="oil"
        type="spline"
      />
      <dx-series-template
        :customize-series="customizeSeries"
        name-field="country"
      />
    </dx-chart>
    <dx-scale>
      <dx-label>
        <dx-format type="decimal"/>
      </dx-label>
    </dx-scale>
  </dx-range-selector>
</template>
<script>
import { dataSource } from './data.js';
import {
  DxRangeSelector,
  DxMargin,
  DxChart,
  DxCommonSeriesSettings,
  DxSeriesTemplate,
  DxScale,
  DxFormat,
  DxLabel
} from 'devextreme-vue/range-selector';

export default {
  components: {
    DxRangeSelector,
    DxMargin,
    DxChart,
    DxCommonSeriesSettings,
    DxSeriesTemplate,
    DxScale,
    DxFormat,
    DxLabel
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    customizeSeries(seriesName) {
      return seriesName === 'USA' ? { color: 'red' } : {};
    }
  }
};
</script>
<style scoped>
#range-selector {
    height: 310px;
}
</style>
