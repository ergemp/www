<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="2200"
      :subvalues="[2700]"
    >
      <dx-scale
        :start-value="0"
        :end-value="3000"
        :tick-interval="500"
      >
        <dx-label
          :customize-text="customizeText"
        />
      </dx-scale>
      <dx-subvalue-indicator
        type="textCloud"
      >
        <dx-text
          :format="format"
          :customize-text="customizeText"
        />
      </dx-subvalue-indicator>
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="Oven Temperature (includes Recommended)"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
    </dx-circular-gauge>
  </div>
</template>
<script>
import { DxCircularGauge, DxScale, DxLabel, DxSubvalueIndicator, DxText, DxExport, DxTitle, DxFont } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxLabel, DxSubvalueIndicator, DxText, DxExport, DxTitle, DxFont
  },
  data() {
    return {
      format: {
        type: 'thousands',
        precision: 1
      }
    };
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} °C`;
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
