<template>
  <div>
    <div class="long-title">
      <h3>Average temperature in London</h3>
    </div>
    <div id="chart-demo">
      <dx-polar-chart
        id="radarChart"
        :data-source="dataSource"
      >
        <dx-common-series-settings :type="currentType"/>
        <dx-series
          value-field="day"
          name="Day"
          color="#ba4d51"
        />
        <dx-series
          value-field="night"
          name="Night"
          color="#5f8b95"
        />
        <dx-margin
          :top="50"
          :bottom="50"
          :left="100"
        />
      </dx-polar-chart>
      <div class="center">
        <div>Series Type</div>&nbsp;
        <dx-select-box
          :width="200"
          :data-source="types"
          :value.sync="currentType"
        />
      </div>
    </div>
  </div>
</template>
<script>

import {
  DxPolarChart,
  DxCommonSeriesSettings,
  DxSeries,
  DxMargin
} from 'devextreme-vue/polar-chart';
import DxSelectBox from 'devextreme-vue/select-box';

import { types, dataSource } from './data.js';

export default {

  components: {
    DxSelectBox,
    DxPolarChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxMargin
  },

  data() {
    return {
      types,
      dataSource,
      currentType: types[0]
    };
  }
};
</script>
<style>
#chart-demo {
	height: 600px;
}

#radarChart {
	height: 500px;
}

#chart-demo > .center {
	text-align: center;
}

#chart-demo > .center > div,
#chart-demo > .center > .dx-widget {
	display: inline-block;
	vertical-align: middle;
}

.long-title h3 {
	font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;
	font-weight: 200;
	font-size: 28px;
	text-align: center;
	margin-bottom: 20px;
}
</style>
