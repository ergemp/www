<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="12"
      :subvalues="[8, 18]"
    >
      <dx-scale
        :start-value="0"
        :end-value="20"
        :tick-interval="5"
      />
      <dx-tooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip"
      >
        <dx-font
          :size="40"
          color="#DCD0FF"
        />
      </dx-tooltip>
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="Rheostat Resistance"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
    </dx-circular-gauge>
  </div>
</template>
<script>
import { DxCircularGauge, DxScale, DxTooltip, DxFont, DxExport, DxTitle } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxTooltip, DxFont, DxExport, DxTitle
  },
  methods: {
    customizeTooltip({ valueText }) {
      return {
        text: `${valueText} ohm`
      };
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
