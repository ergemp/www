<template>
  <dx-chart
    id="chart"
    :data-source="dataSource"
  >
    <dx-title
      text="Apple Stock Price"
      subtitle="AAPL"
    />
    <dx-common-series-settings
      argument-field="date"
      type="line"
    />
    <dx-series
      value-field="close"
      name="AAPL"
    />
    <dx-legend :visible="false"/>
    <dx-argument-axis argument-type="datetime"/>
    <dx-value-axis position="right"/>
    <dx-common-annotation-settings
      :customize-tooltip="customizeTooltip"
      series="AAPL"
      type="image"
    >
      <dx-font
        :size="16"
        :weight="600"
      />
      <dx-image
        :width="50.5"
        :height="105.75"
      />
    </dx-common-annotation-settings>
    <dx-annotation
      v-for="annotation in annotationSources"
      :key="annotation.description"
      :argument="annotation.date"
      :type="annotation.type"
      :text="annotation.text"
      :description="annotation.description"
      :padding-top-bottom="annotation.padding"
      :offset-y="annotation.offset"
    >
      <dx-image :url="annotation.image"/>
    </dx-annotation>
  </dx-chart>
</template>
<script>
import { dataSource, annotationSources } from './data.js';
import { DxChart, DxTitle, DxCommonSeriesSettings, DxSeries, DxLegend, DxArgumentAxis, DxValueAxis, DxCommonAnnotationSettings, DxFont, DxImage, DxAnnotation } from 'devextreme-vue/chart';

export default {
  components: {
    DxChart, DxTitle, DxCommonSeriesSettings, DxSeries, DxLegend, DxArgumentAxis, DxValueAxis, DxCommonAnnotationSettings, DxFont, DxImage, DxAnnotation
  },
  data() {
    return {
      dataSource,
      annotationSources
    };
  },
  methods: {
    customizeTooltip(annotation) {
      return {
        html: `<div class='tooltip'>${annotation.description}</div>`
      };
    }
  }
};
</script>
<style scoped>
#chart {
    height: 440px;
}
.tooltip {
    width: 300px;
}
</style>
