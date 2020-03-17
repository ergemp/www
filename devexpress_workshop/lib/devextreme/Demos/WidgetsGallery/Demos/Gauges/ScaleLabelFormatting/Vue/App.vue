<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="45"
    >
      <dx-scale
        :start-value="0"
        :end-value="100"
        :tick-interval="10"
      >
        <dx-label
          :customize-text="customizeText"
        />
      </dx-scale>
      <dx-range-container>
        <dx-range
          :start-value="0"
          :end-value="20"
          color="#CE2029"
        />
        <dx-range
          :start-value="20"
          :end-value="50"
          color="#FFD700"
        />
        <dx-range
          :start-value="50"
          :end-value="100"
          color="#228B22"
        />
      </dx-range-container>
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="Battery Charge"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
    </dx-circular-gauge>
  </div>
</template>
<script>
import { DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxExport, DxTitle, DxFont } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxExport, DxTitle, DxFont
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
