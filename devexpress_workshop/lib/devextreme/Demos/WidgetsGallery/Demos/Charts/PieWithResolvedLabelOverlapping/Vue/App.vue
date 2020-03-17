<template>
  <div>
    <dx-pie-chart
      :data-source="dataSource"
      :resolve-label-overlapping="resolveMode"
      palette="Bright"
      title="Olympic Medals in 2008"
    >
      <dx-series
        argument-field="country"
        value-field="medals"
      >
        <dx-label
          :visible="true"
          :customize-text="formatText"
        />
      </dx-series>
      <dx-margin :bottom="20"/>
      <dx-export :enabled="true"/>
      <dx-legend :visible="false"/>
      <dx-animation :enabled="false"/>
    </dx-pie-chart>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Label Overlapping Resolution Mode</span>
        <dx-select-box
          :data-source="resolveModes"
          v-model="resolveMode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DxPieChart, {
  DxSeries,
  DxLabel,
  DxMargin,
  DxExport,
  DxLegend,
  DxAnimation
} from 'devextreme-vue/pie-chart';
import DxSelectBox from 'devextreme-vue/select-box';

import { dataSource } from './data.js';

export default {
  components: {
    DxPieChart,
    DxSeries,
    DxLabel,
    DxMargin,
    DxExport,
    DxLegend,
    DxAnimation,
    DxSelectBox
  },
  data() {
    return {
      dataSource,
      resolveModes: ['shift', 'hide', 'none'],
      resolveMode: 'shift'
    };
  },
  methods: {
    formatText(pointInfo) {
      return `${pointInfo.argumentText} (${pointInfo.percentText})`;
    }
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
