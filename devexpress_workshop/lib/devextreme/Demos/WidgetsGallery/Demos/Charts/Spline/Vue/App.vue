<template>
  <div id="chart-demo">
    <dx-chart
      id="chart"
      :data-source="sharingStatisticsInfo"
      palette="Violet"
      title="Architecture Share Over Time (Count)"
    >
      <dx-common-series-settings
        :type="type"
        argument-field="year"
      />
      <dx-common-axis-settings>
        <dx-grid :visible="true"/>
      </dx-common-axis-settings>
      <dx-series
        v-for="architecture in architectureSources"
        :key="architecture.value"
        :value-field="architecture.value"
        :name="architecture.name"
      />
      <dx-margin :bottom="20"/>
      <dx-argument-axis
        :allow-decimals="false"
        :axis-division-factor="60"
      >
        <dx-label>
          <dx-format type="decimal"/>
        </dx-label>
      </dx-argument-axis>
      <dx-legend
        vertical-alignment="top"
        horizontal-alignment="right"
      />
      <dx-export :enabled="true"/>
      <dx-tooltip :enabled="true"/>
    </dx-chart>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Series Type</span>
        <dx-select-box
          :data-source="types"
          :value.sync="type"
        />
      </div>
    </div>
  </div>
</template>
<script>

import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxCommonAxisSettings,
  DxGrid,
  DxExport,
  DxLegend,
  DxMargin,
  DxTooltip,
  DxLabel,
  DxFormat
} from 'devextreme-vue/chart';
import DxSelectBox from 'devextreme-vue/select-box';

import { architectureSources, sharingStatisticsInfo } from './data.js';

export default {

  components: {
    DxSelectBox,
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxCommonAxisSettings,
    DxGrid,
    DxExport,
    DxLegend,
    DxMargin,
    DxTooltip,
    DxLabel,
    DxFormat
  },

  data() {
    return {
      sharingStatisticsInfo,
      architectureSources,
      types: ['spline', 'stackedspline', 'fullstackedspline'],
      type: 'spline'
    };
  }
};
</script>
<style>
.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
}

.option {
    margin-top: 10px;
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option > span {
    margin-right: 10px;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
}
</style>
