<template>
  <div>
    <dx-linear-gauge
      id="gauge"
      :value="value"
      :subvalues="subvalues"
    >
      <dx-scale
        :start-value="0"
        :end-value="30"
        :tick-interval="5"
      >
        <dx-tick
          color="#536878"
        />
        <dx-label
          :indent-from-tick="-3"
        />
      </dx-scale>
      <dx-range-container
        :offset="10"
      >
        <dx-range
          :start-value="0"
          :end-value="5"
          color="#92000A"
        />
        <dx-range
          :start-value="5"
          :end-value="20"
          color="#E6E200"
        />
        <dx-range
          :start-value="20"
          :end-value="30"
          color="#77DD77"
        />
      </dx-range-container>
      <dx-value-indicator
        :offset="20"
      />
      <dx-subvalue-indicator
        :offset="-15"
      />
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="Issues Closed (with Min and Max Expected)"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
    </dx-linear-gauge>
  </div>
</template>
<script>
import { DxLinearGauge, DxScale, DxTick, DxLabel, DxRangeContainer, DxRange, DxValueIndicator, DxSubvalueIndicator, DxExport, DxTitle, DxFont } from 'devextreme-vue/linear-gauge';

export default {
  components: {
    DxLinearGauge, DxScale, DxTick, DxLabel, DxRangeContainer, DxRange, DxValueIndicator, DxSubvalueIndicator, DxExport, DxTitle, DxFont
  },
  data() {
    return {
      subvalues: [5, 25],
      value: 17
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
