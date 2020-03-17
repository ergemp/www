<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="750"
    >
      <dx-scale
        :start-value="0"
        :end-value="1000"
        :tick-interval="100"
        :minor-tick-interval="25"
      >
        <dx-tick
          color="#9c9c9c"
        />
        <dx-minor-tick
          :visible="true"
          color="#9c9c9c"
        />
      </dx-scale>
      <dx-range-container
        background-color="none"
      />
      <dx-title
        text="Fan Speed (in rpm)"
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
import { DxCircularGauge, DxScale, DxTick, DxMinorTick, DxRangeContainer, DxTitle, DxFont, DxExport } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxTick, DxMinorTick, DxRangeContainer, DxTitle, DxFont, DxExport
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
