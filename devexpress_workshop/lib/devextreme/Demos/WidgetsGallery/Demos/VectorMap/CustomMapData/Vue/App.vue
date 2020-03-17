<template>
  <dx-vector-map
    id="vector-map"
    :max-zoom-factor="2"
    :projection="projection"
  >
    <dx-title
      text="Map of Pangaea"
      subtitle="with modern continental outlines"
    />
    <dx-layer
      :data-source="pangaeaBorders"
      :hover-enabled="false"
      name="pangaea"
      color="#bb7862"
    />
    <dx-layer
      :data-source="pangaeaContinents"
      :customize="customizeLayer"
    >
      <dx-label
        :enabled="true"
        data-field="name"
      />
    </dx-layer>
    <dx-export :enabled="true"/>
  </dx-vector-map>
</template>
<script>

import {
  DxVectorMap,
  DxLabel,
  DxLayer,
  DxExport,
  DxTitle
} from 'devextreme-vue/vector-map';

import { pangaeaBorders, pangaeaContinents } from './data.js';

export default {
  components: {
    DxVectorMap,
    DxLabel,
    DxLayer,
    DxExport,
    DxTitle
  },
  data() {
    return {
      pangaeaBorders,
      pangaeaContinents,
      projection: {
        to: ([l, lt]) => [l / 100, lt / 100],
        from: ([x, y]) => [x * 100, y * 100]
      }
    };
  },
  methods: {
    customizeLayer(elements) {
      elements.forEach((element) => {
        element.applySettings({
          color: element.attribute('color')
        });
      });
    }

  }
};
</script>
<style>
#vector-map {
   height: 570px;
}
</style>
