<template>
  <div>
    <dx-bar-gauge
      id="gauge"
      :start-value="0"
      :end-value="100"
      :values="values"
    >
      <dx-label
        :indent="30"
        :format="format"
        :customize-text="customizeText"
      />
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="Series' Ratings"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
    </dx-bar-gauge>
  </div>
</template>
<script>
import { DxBarGauge, DxLabel, DxExport, DxTitle, DxFont } from 'devextreme-vue/bar-gauge';

export default {
  components: {
    DxBarGauge, DxLabel, DxExport, DxTitle, DxFont
  },
  data() {
    return {
      values: [47.27, 65.32, 84.59, 71.86],
      format: {
        type: 'fixedPoint',
        precision: 1
      }
    };
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} %`;
    }
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
