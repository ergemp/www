<template>
  <div>
    <div class="long-title">
      <h3>Current Price (with Min and Max)</h3>
    </div>
    <div id="gauge-demo">
      <dx-linear-gauge
        id="c1"
        :value="24"
        :subvalues="[18, 43]"
      >
        <dx-scale
          :start-value="10"
          :end-value="50"
          :tick-interval="10"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-subvalue-indicator
          type="rectangle"
          color="#9B870C"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c2"
        :value="38"
        :subvalues="[18, 43]"
      >
        <dx-scale
          :start-value="10"
          :end-value="50"
          :tick-interval="10"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-subvalue-indicator
          type="rhombus"
          color="#779ECB"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c3"
        :value="21"
        :subvalues="[18, 43]"
      >
        <dx-scale
          :start-value="10"
          :end-value="50"
          :tick-interval="10"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-subvalue-indicator
          type="circle"
          color="#8FBC8F"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c4"
        :value="42"
        :subvalues="[18, 43]"
      >
        <dx-scale
          :start-value="10"
          :end-value="50"
          :tick-interval="10"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-subvalue-indicator
          type="textCloud"
          color="#734F96"
        />
      </dx-linear-gauge>
      <dx-linear-gauge
        id="c5"
        :value="28"
        :subvalues="[18, 43]"
      >
        <dx-scale
          :start-value="10"
          :end-value="50"
          :tick-interval="10"
        >
          <dx-label :customize-text="customizeText"/>
        </dx-scale>
        <dx-subvalue-indicator
          type="triangleMarker"
          color="#f05b41"
        />
      </dx-linear-gauge>
    </div>
  </div>
</template>
<script>

import { DxLinearGauge, DxScale, DxSubvalueIndicator, DxLabel } from 'devextreme-vue/linear-gauge';

export default {
  components: {
    DxLinearGauge, DxScale, DxSubvalueIndicator, DxLabel
  },
  methods: {
    customizeText({ valueText }) {
      return `$${valueText}`;
    }
  }
};
</script>
<style scoped>
#gauge-demo {
    text-align: center;
    width: 100%;
}

#c1, #c2, #c3, #c4, #c5 {
    height: 110px;
}

#c4 {
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
