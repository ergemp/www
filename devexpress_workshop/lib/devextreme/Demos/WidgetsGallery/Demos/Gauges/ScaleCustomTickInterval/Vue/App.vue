<template>
  <div>
    <dx-linear-gauge
      id="gauge"
      :value="4.3"
    >
      <dx-scale
        :start-value="0"
        :end-value="5"
        :tick-interval="2.5"
        :minor-tick-interval="0.625"
      >
        <dx-minor-tick
          :visible="true"
        />
      </dx-scale>
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="TV Show Rating"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
    </dx-linear-gauge>
  </div>
</template>
<script>
import { DxLinearGauge, DxScale, DxMinorTick, DxExport, DxTitle, DxFont } from 'devextreme-vue/linear-gauge';

export default {
  components: {
    DxLinearGauge, DxScale, DxMinorTick, DxExport, DxTitle, DxFont
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
