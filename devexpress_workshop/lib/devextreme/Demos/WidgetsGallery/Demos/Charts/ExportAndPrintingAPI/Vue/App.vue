
<template>
  <div>
    <dx-chart
      id="chart"
      ref="chart"
      :data-source="mountains"
      title="The Highest Mountains"
    >
      <dx-series
        type="bar"
        argument-field="name"
        value-field="height"
        color="#E55253"
      />
      <dx-argument-axis :visible="true"/>
      <dx-value-axis>
        <dx-visual-range :start-value="8000"/>
        <dx-label :customize-text="customizeLabelText"/>
      </dx-value-axis>
      <dx-tooltip
        :enabled="true"
        :customize-tooltip="customizeTooltipText"
      />
      <dx-legend :visible="false"/>
    </dx-chart>
    <div id="buttonGroup">
      <dx-button
        icon="print"
        text="Print"
        @click="printChart"
      />
      <dx-button
        icon="export"
        text="Export"
        @click="exportChart"
      />
    </div>
  </div>
</template>

<script>
import DxChart, {
  DxSeries,
  DxLegend,
  DxTooltip,
  DxArgumentAxis,
  DxLabel,
  DxValueAxis,
  DxVisualRange
} from 'devextreme-vue/chart';
import DxButton from 'devextreme-vue/button';
import { mountains } from './data.js';

export default {
  components: {
    DxChart,
    DxSeries,
    DxLegend,
    DxTooltip,
    DxArgumentAxis,
    DxLabel,
    DxValueAxis,
    DxVisualRange,
    DxButton
  },
  data() {
    return {
      mountains
    };
  },
  methods: {
    printChart() {
      this.$refs.chart.instance.print();
    },

    exportChart() {
      this.$refs.chart.instance.exportTo('Example', 'png');
    },

    customizeTooltipText(pointInfo) {
      return {
        text: `<span class='title'>${pointInfo.argumentText
        }</span><br />&nbsp;<br />System: ${pointInfo.point.data.system
        }<br />Height: ${pointInfo.valueText} m`
      };
    },

    customizeLabelText({ value }) {
      return `${value} m`;
    }
  }
};
</script>
<style>
#chart {
    height: 440px;
    margin-bottom:30px;
}

#buttonGroup {
    text-align: center;
    margin-bottom: 20px;
}

#buttonGroup > .dx-button {
    margin: 0 20px;
}

.title {
    font-size: 15px;
    font-weight: 500;
}
</style>

