<template>
  <dx-vector-map
    id="vector-map"
    :bounds="bounds"
  >
    <dx-layer
      :data-source="mapsWorld"
      :hover-enabled="false"
    />
    <dx-layer
      :data-source="markers"
      name="pies"
      element-type="pie"
      data-field="values"
    />
    <dx-legend
      :customize-text="customizeText"
    >
      <dx-source
        layer="pies"
        grouping="color"
      />
    </dx-legend>
    <dx-tooltip
      :enabled="true"
      :customize-tooltip="customizeTooltip"
    />
  </dx-vector-map>
</template>
<script>

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

import {
  DxVectorMap,
  DxLabel,
  DxLayer,
  DxLegend,
  DxSource,
  DxTooltip,
} from 'devextreme-vue/vector-map';

import { markers, names } from './data.js';

export default {
  components: {
    DxVectorMap,
    DxLabel,
    DxLayer,
    DxLegend,
    DxSource,
    DxTooltip
  },
  data() {
    return {
      markers,
      mapsWorld: mapsData.world,
      bounds: [-180, 85, 180, -60]
    };
  },
  methods: {
    customizeTooltip(info) {
      if(info.layer.type === 'marker') {
        return {
          text: info.attribute('tooltip')
        };
      }
    },

    customizeText({ index }) {
      return names[index];
    }
  }
};
</script>
<style>
#vector-map {
    height: 440px;
}
</style>
