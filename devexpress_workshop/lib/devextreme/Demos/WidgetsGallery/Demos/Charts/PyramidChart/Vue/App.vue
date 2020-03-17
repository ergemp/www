<template>
  <dx-funnel
    id="pyramid"
    :data-source="dataSource"
    :sort-data="false"
    :inverted="true"
    algorithm="dynamicHeight"
    palette="Harmony Light"
    argument-field="level"
    value-field="count"
  >
    <dx-title text="Team Composition">
      <dx-margin :bottom="30"/>
    </dx-title>
    <dx-tooltip :enabled="true"/>
    <dx-item>
      <dx-border :visible="true"/>
    </dx-item>
    <dx-legend :visible="true"/>
    <dx-label
      :visible="true"
      horizontal-alignment="left"
      background-color="none"
    >
      <dx-font :size="16"/>
    </dx-label>
  </dx-funnel>
</template>

<script>

import DxFunnel, {
  DxTitle,
  DxMargin,
  DxTooltip,
  DxItem,
  DxBorder,
  DxLegend,
  DxLabel,
  DxFont
} from 'devextreme-vue/funnel';

import { dataSource } from './data.js';

export default {
  components: {
    DxFunnel,
    DxTitle,
    DxMargin,
    DxTooltip,
    DxItem,
    DxBorder,
    DxLegend,
    DxLabel,
    DxFont
  },
  data() {
    return {
      dataSource
    };
  }
};
</script>

<style>
#pyramid {
    height: 440px;
}
</style>
