
<template>
  <div id="chart-demo">
    <div class="chart_environment">
      <Form ref="form"/>
      <dx-chart
        id="chart"
        ref="chart"
        :data-source="dataSource"
        palette="Violet"
      >
        <dx-common-series-settings
          :bar-padding="0.3"
          argument-field="state"
          type="bar"
        />
        <dx-series
          value-field="year1990"
          name="1990"
        />
        <dx-series
          value-field="year2000"
          name="2000"
        />
        <dx-series
          value-field="year2010"
          name="2010"
        />
        <dx-series
          value-field="year2016"
          name="2016"
        />
        <dx-series
          value-field="year2017"
          name="2017"
        />
        <dx-legend
          vertical-alignment="bottom"
          horizontal-alignment="center"
        />
        <dx-title
          text="Oil Production"
          subtitle="(in millions tonnes)"
        />
      </dx-chart>
    </div>
    <div class="controls-pane">
      <dx-button
        id="export"
        :width="145"
        icon="export"
        type="default"
        text="Export"
        @click="onClick()"
      />
    </div>
  </div>

</template>

<script>

function prepareMarkup(chartSVG, markup) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="820px" height="420px">'
  + `${markup}<g transform="translate(305,12)">${chartSVG}</g></svg>`;
}

import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxLegend,
  DxExport,
  DxTitle
} from 'devextreme-vue/chart';

import { exportFromMarkup } from 'devextreme/viz/export';
import DxButton from 'devextreme-vue/button';
import { dataSource } from './data.js';
import Form from './Form.vue';
import toCanvas from 'canvg';

export default {
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxLegend,
    DxExport,
    DxTitle,
    Form,
    DxButton
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    onClick() {
      const chartSVG = this.$refs.chart.instance.svg();
      const formContent = this.$refs.form.getMarkup();

      exportFromMarkup(prepareMarkup(chartSVG, formContent), {
        width: 820,
        height: 420,
        margin: 0,
        format: 'png',
        svgToCanvas(svg, canvas) {
          return new Promise((resolve) => {
            toCanvas(canvas, new XMLSerializer().serializeToString(svg), {
              ignoreDimensions: true,
              ignoreClear: true,
              renderCallback: resolve
            });
          });
        }
      });
    }
  },
};
</script>
<style>
#chart-demo {
    height: 460px;
}

#chart {
    position: absolute;
    top: 12px;
    right: 35px;
    width: 480px;
    height: 347px;
}

.chart_environment {
    width: 820px;
    position: relative;
    margin: 0 auto;
}

.controls-pane {
    display: block;
    text-align: center;
}
</style>

