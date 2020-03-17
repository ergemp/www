<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="105"
    >
      <dx-scale
        :start-value="50"
        :end-value="150"
        :tick-interval="10"
      >
        <dx-label
          :use-range-colors="true"
        />
      </dx-scale>
      <dx-range-container
        palette="Pastel"
      >
        <dx-range
          :start-value="50"
          :end-value="90"
        />
        <dx-range
          :start-value="90"
          :end-value="130"
        />
        <dx-range
          :start-value="130"
          :end-value="150"
        />
      </dx-range-container>
      <dx-title
        text="Temperature of the Liquid in the Boiler"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
      <dx-export
        :enabled="true"
      />
    </dx-circular-gauge>
  </div>
</template>
<script>
import { DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxTitle, DxFont, DxExport } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxTitle, DxFont, DxExport
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
