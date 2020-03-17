<template>
  <div>
    <dx-linear-gauge
      id="gauge"
      :value="35"
    >
      <dx-geometry
        orientation="vertical"
      />
      <dx-scale
        :start-value="0"
        :end-value="50"
        :custom-ticks="customTicks"
      />
      <dx-title
        text="Fuel Volume (in Liters)"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
      <dx-export
        :enabled="true"
      />
    </dx-linear-gauge>
  </div>
</template>
<script>
import { DxLinearGauge, DxGeometry, DxScale, DxTitle, DxFont, DxExport } from 'devextreme-vue/linear-gauge';

export default {
  components: {
    DxLinearGauge, DxGeometry, DxScale, DxTitle, DxFont, DxExport
  },
  data() {
    return {
      customTicks: [0, 10, 25, 50]
    };
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
