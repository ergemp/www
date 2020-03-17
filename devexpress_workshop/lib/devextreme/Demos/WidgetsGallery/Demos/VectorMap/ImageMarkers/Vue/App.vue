<template>
  <dx-vector-map
    id="vector-map"
    :bounds="bounds"
  >
    <dx-layer
      :data-source="usa"
      :hover-enabled="false"
      border-color="#ffffff"
    />
    <dx-layer
      :data-source="weatherData"
      :size="51"
      data-field="url"
      element-type="image"
      type="marker"
    >
      <dx-label
        data-field="text"
      >
        <dx-font :size="14"/>
      </dx-label>
    </dx-layer>
    <dx-loading-indicator :show="true"/>
  </dx-vector-map>
</template>
<script>

import * as mapsData from 'devextreme/dist/js/vectormap-data/usa.js';

import {
  DxVectorMap,
  DxLabel,
  DxLayer,
  DxFont
} from 'devextreme-vue/vector-map';

import { weatherData } from './data.js';

export default {
  components: {
    DxVectorMap,
    DxLabel,
    DxLayer,
    DxFont
  },
  data() {
    return {
      weatherData,
      usa: mapsData.usa,
      bounds: [-118, 52, -80, 20]
    };
  }
};
</script>
<style>
#vector-map {
    height: 440px;
}
</style>
