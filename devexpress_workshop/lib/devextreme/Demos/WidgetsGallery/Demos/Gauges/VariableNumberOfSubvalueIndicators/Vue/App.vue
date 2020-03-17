<template>
  <div>
    <div id="gauge-demo">
      <dx-linear-gauge
        id="gauge"
        :value="value.primary"
        :subvalues="value.secondary"
      >
        <dx-scale
          :start-value="0"
          :end-value="10"
          :tick-interval="2"
        >
          <dx-label
            :customize-text="customizeText"
          />
        </dx-scale>
        <dx-tooltip
          :enabled="true"
          :customize-tooltip="customizeTooltip"
        />
        <dx-export
          :enabled="true"
        />
        <dx-title
          text="Power of Air Conditioners in Store Departments (kW)"
        >
          <dx-font
            :size="28"
          />
        </dx-title>
      </dx-linear-gauge>
      <dx-select-box
        id="selectbox"
        :data-source="dataSource"
        :value.sync="value"
        :width="200"
        display-expr="name"
      />
    </div>
  </div>
</template>
<script>
import { dataSource } from './data.js';
import { DxLinearGauge, DxScale, DxLabel, DxTooltip, DxExport, DxTitle, DxFont } from 'devextreme-vue/linear-gauge';
import { DxSelectBox } from 'devextreme-vue/select-box';

export default {
  components: {
    DxLinearGauge, DxScale, DxLabel, DxTooltip, DxExport, DxTitle, DxFont,
    DxSelectBox
  },
  data() {
    return {
      dataSource: dataSource,
      value: dataSource[0]
    };
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} kW`;
    },
    customizeTooltip(scaleValue) {
      var result = `${scaleValue.valueText} kW`;
      if (scaleValue.index >= 0) {
        result = `Secondary ${scaleValue.index + 1}: ${result}`;
      } else {
        result = `Primary: ${result}`;
      }
      return {
        text: result
      };
    }
  }
};
</script>
<style scoped>
#gauge-demo {
    height: 440px;
    width: 100%;
}

#gauge {
    height: 400px;
}
</style>
