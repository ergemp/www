<template>
  <div>
    <div class="flex-container">
      <dx-pie-chart
        id="pie"
        :data-source="dataSource"
        :palette="palette"
        :palette-extension-mode="paletteExtensionMode.toLowerCase()"
      >
        <dx-legend :visible="false"/>
        <dx-series/>
      </dx-pie-chart>

      <div class="palette-container flex-block">
        <div
          v-for="color in baseColors"
          :key="color"
          :style="{ 'background-color': color }"
          class="palette-item"
        />
      </div>
    </div>

    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Palette</span>
        <dx-select-box
          :items="paletteCollection"
          v-model="palette"
        />
      </div>
      <div class="option">
        <span>Palette Extension Mode</span>
        <dx-select-box
          :items="paletteExtensionModes"
          v-model="paletteExtensionMode"
        />
      </div>
    </div>
  </div>
</template>

<script>

import DxPieChart, {
  DxSeries,
  DxLegend
} from 'devextreme-vue/pie-chart';
import DxSelectBox from 'devextreme-vue/select-box';
import { paletteCollection, paletteExtensionModes, dataSource } from './data.js';
import { getPalette } from 'devextreme/viz/palette';

export default {
  components: {
    DxPieChart,
    DxSeries,
    DxLegend,
    DxSelectBox
  },
  data() {
    return {
      paletteCollection,
      palette: paletteCollection[0],
      paletteExtensionModes,
      paletteExtensionMode: paletteExtensionModes[1],
      dataSource
    };
  },
  computed: {
    baseColors() {
      return getPalette(this.palette).simpleSet;
    }
  }
};
</script>

<style>
.flex-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

#pie {
    height: 350px;
    width: 500px;
    margin: 20px;
}

.palette-container{
    float: left;
}

.palette-item{
    width: 40px;
    height: 40px;
}

.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option {
    display: inline-block;
    min-width: 320px;
    margin-top: 5px;
}

.option > span {
   margin: 0 10px 0 0;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
}
</style>
