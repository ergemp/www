<template>
  <div>
    <div class="long-title">
      <h3>Humidity in Rooms (%)</h3>
    </div>
    <div id="gauge-demo">
      <dx-circular-gauge
        id="gaugeOptions1"
        :value="80"
        class="gauge"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="10"
        />
        <dx-geometry
          :start-angle="180"
          :end-angle="90"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="gaugeOptions2"
        :value="75"
        class="gauge"
      >
        <dx-scale
          :start-value="100"
          :end-value="0"
          :tick-interval="10"
        />
        <dx-geometry
          :start-angle="90"
          :end-angle="0"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="gaugeOptions3"
        :value="70"
        class="gauge"
      >
        <dx-scale
          :start-value="100"
          :end-value="0"
          :tick-interval="10"
        />
        <dx-geometry
          :start-angle="-90"
          :end-angle="-180"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="gaugeOptions4"
        :value="68"
        class="gauge"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="10"
        />
        <dx-geometry
          :start-angle="0"
          :end-angle="-90"
        />
      </dx-circular-gauge>
    </div>
  </div>
</template>
<script>

import { DxCircularGauge, DxScale, DxGeometry } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxGeometry
  }
};
</script>
<style scoped>
#gauge-demo {
    height: 440px;
    width: 100%;
}

.gauge {
	width: 50%;
	height: 50%;
	float: left;
}

.long-title h3 {
    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;
    font-weight: 200;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
