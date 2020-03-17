<template>
  <div>
    <dx-circular-gauge
      id="gauge"
      :value="value"
      :subvalues="subvalues"
    >
      <dx-scale
        :start-value="0"
        :end-value="100"
        :tick-interval="10"
      >
        <dx-tick
          color="#536878"
        />
        <dx-label
          :indent-from-tick="3"
        />
      </dx-scale>
      <dx-range-container
        :offset="10"
      >
        <dx-range
          :start-value="0"
          :end-value="30"
          color="#92000A"
        />
        <dx-range
          :start-value="30"
          :end-value="70"
          color="#E6E200"
        />
        <dx-range
          :start-value="70"
          :end-value="100"
          color="#77DD77"
        />
      </dx-range-container>
      <dx-value-indicator
        :offset="50"
      />
      <dx-subvalue-indicator
        :offset="-25"
      />
      <dx-title
        text="Amount of Tickets Sold (with Min and Max Expected)"
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
import { DxCircularGauge, DxScale, DxTick, DxLabel, DxRangeContainer, DxRange, DxValueIndicator, DxSubvalueIndicator, DxTitle, DxFont, DxExport } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxTick, DxLabel, DxRangeContainer, DxRange, DxValueIndicator, DxSubvalueIndicator, DxTitle, DxFont, DxExport
  },
  data() {
    return {
      subvalues: [40, 90],
      value: 85
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
