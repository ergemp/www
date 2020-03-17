<template>
  <div>
    <div class="long-title">
      <h3>Grades of Goods</h3>
    </div>
    <div id="gauge-demo">
      <dx-circular-gauge
        id="triangleMarker"
        :value="8"
        :subvalues="[2,8]"
      >
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-scale
          :start-value="0"
          :end-value="10"
          :tick-interval="1"
        />
        <dx-subvalue-indicator
          type="triangleMarker"
          color="#8FBC8F"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="rectangleNeedle"
        :value="9"
        :subvalues="[2,8]"
      >
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-scale
          :start-value="0"
          :end-value="10"
          :tick-interval="1"
        />
        <dx-subvalue-indicator
          type="rectangleNeedle"
          color="#9B870C"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="triangleNeedle"
        :value="5"
        :subvalues="[2,8]"
      >

        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-scale
          :start-value="0"
          :end-value="10"
          :tick-interval="1"
        />
        <dx-subvalue-indicator
          type="triangleNeedle"
          color="#779ECB"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="textCloud"
        :value="6"
        :subvalues="[2,8]"
      >
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-scale
          :start-value="0"
          :end-value="10"
          :tick-interval="1"
        />
        <dx-subvalue-indicator
          type="textCloud"
          color="#f05b41"
        />
      </dx-circular-gauge>
      <dx-circular-gauge
        id="twoColorNeedle"
        :value="4"
        :subvalues="[2,8]"
      >
        <dx-geometry
          :start-angle="180"
          :end-angle="0"
        />
        <dx-scale
          :start-value="0"
          :end-value="10"
          :tick-interval="1"
        />
        <dx-subvalue-indicator
          type="twoColorNeedle"
          color="#779ECB"
          second-color="#734F96"
        />
      </dx-circular-gauge>
    </div>
  </div>
</template>
<script>

import { DxCircularGauge, DxScale, DxGeometry, DxSubvalueIndicator } from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxGeometry, DxSubvalueIndicator
  }
};
</script>
<style scoped>
#gauge-demo {
    width: 100%;
    text-align: center;
}

#triangleMarker, #rectangleNeedle, #triangleNeedle, #textCloud, #twoColorNeedle {
    display: inline-block;
}

#triangleMarker, #rectangleNeedle, #triangleNeedle {
    width: 33%;
}

#twoColorNeedle {
    width: 31%;
}

#textCloud {
    width: 37%;
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
