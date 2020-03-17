<template>
  <div>
    <div class="long-title">
      <h3>Power of Engines</h3>
    </div>
    <div id="gauge-demo">
      <dx-circular-gauge
        id="rectangleNeedle"
        :value="75"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-value-indicator
          type="rectangleNeedle"
          color="#9B870C"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="twoColorNeedle"
        :value="80"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-value-indicator
          type="twoColorNeedle"
          color="#779ECB"
          second-color="#734F96"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="triangleNeedle"
        :value="65"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-value-indicator
          type="triangleNeedle"
          color="#8FBC8F"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="rangebar"
        :value="90"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-value-indicator
          type="rangeBar"
          color="#f05b41"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="textCloud"
        :value="70"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-value-indicator
          type="textCloud"
          color="#483D8B"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="triangleMarker"
        :value="85"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-value-indicator
          type="triangleMarker"
          color="#e0e33b"
        />
      </dx-circular-gauge>
    </div>
  </div>
</template>
<script>

import { DxCircularGauge, DxScale, DxLabel, DxGeometry, DxValueIndicator } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxLabel, DxGeometry, DxValueIndicator
  },

  methods: {
    customizeText({ valueText }) {
      return `${valueText} %`;
    }
  }
};

</script>
<style scoped>
#chart-demo {
    width: 100%;
}

#rectangleNeedle, #twoColorNeedle, #triangleNeedle, #rangebar, #textCloud, #triangleMarker {
    display: inline-block;
}

#rectangleNeedle, #twoColorNeedle, #triangleNeedle {
    width: 33%;
}

#rangebar, #triangleMarker {
    width: 32%;
}

#textCloud {
    width: 35%;
    vertical-align: bottom;
}

.long-title h3 {
    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;
    font-weight: 200;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
