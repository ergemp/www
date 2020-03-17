<template>
  <div>
    <div class="long-title">
      <h3>Available Disk Space</h3>
    </div>
    <div id="gauge-demo">
      <dx-linear-gauge
        id="c1"
        :value="75"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-value-indicator
          type="rectangle"
          color="#9B870C"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c2"
        :value="80"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-value-indicator
          type="rhombus"
          color="#779ECB"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c3"
        :value="65"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-value-indicator
          type="circle"
          color="#8FBC8F"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c4"
        :value="90"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-value-indicator
          type="rangeBar"
          color="#483D8B"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c5"
        :value="70"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-value-indicator
          type="textCloud"
          color="#734F96"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c6"
        :value="85"
      >
        <dx-scale
          :start-value="0"
          :end-value="100"
          :tick-interval="50"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-value-indicator
          type="triangleMarker"
          color="#f05b41"
        />
      </dx-linear-gauge>
    </div>
  </div>
</template>
<script>
import { DxLinearGauge, DxScale, DxLabel, DxValueIndicator } from 'devextreme-vue/linear-gauge';

export default {
  components: {
    DxLinearGauge, DxScale, DxLabel, DxValueIndicator
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} %`;
    }
  }
};
</script>
<style scoped>
#gauge-demo {
    width: 100%;
}

#c1, #c2, #c3, #c4, #c5, #c6 {
    height: 110px;
}

#c5 {
    width: 107%;
    margin-left: -40px;
}

.long-title h3 {
    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;
    font-weight: 200;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
