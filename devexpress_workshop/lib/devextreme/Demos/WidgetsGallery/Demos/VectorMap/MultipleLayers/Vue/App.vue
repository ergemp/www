<template>
  <dx-vector-map
    id="vector-map"
    :bounds="bounds"
    :max-zoom-factor="3"
    title="Sea Currents"
  >
    <dx-layer
      :data-source="mapsWorld"
      :hover-enabled="false"
    />
    <dx-layer
      :data-source="streamsData"
      :color-groups="colorGroups"
      :hover-enabled="false"
      :palette="streamsPalette"
      color-grouping-field="tag"
      border-color="none"
      name="water"
    />
    <dx-legend
      :customize-text="customizeText"
      horizontal-alignment="right"
      vertical-alignment="top"
    >
      <dx-source
        layer="water"
        grouping="color"
      />
      <dx-font :size="14"/>
    </dx-legend>
    <dx-export :enabled="true"/>
  </dx-vector-map>
</template>
<script>

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

import {
  DxVectorMap,
  DxExport,
  DxLayer,
  DxLegend,
  DxSource,
  DxFont
} from 'devextreme-vue/vector-map';

import { streamsData } from './data.js';

export default {
  components: {
    DxVectorMap,
    DxExport,
    DxLayer,
    DxLegend,
    DxSource,
    DxFont
  },
  data() {
    return {
      streamsData,
      mapsWorld: mapsData.world,
      bounds: [-180, 85, 180, -75],
      colorGroups: [0, 1, 2],
      streamsPalette: ['#3c20c8', '#d82020']
    };
  },
  methods: {
    customizeText({ color }) {
      if (color === '#3c20c8') {
        return 'Cold';
      } else {
        return 'Warm';
      }
    }
  }
};
</script>
<style>
#vector-map {
    height: 550px;
}
</style>
