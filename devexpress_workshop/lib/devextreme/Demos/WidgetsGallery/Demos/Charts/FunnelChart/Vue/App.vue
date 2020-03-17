<template>
  <dx-funnel
    id="funnel"
    :data-source="dataSource"
    palette="Soft Pastel"
    argument-field="argument"
    value-field="value"
  >
    <dx-title text="Website Conversions">
      <dx-margin :bottom="30"/>
    </dx-title>
    <dx-export :enabled="true"/>
    <dx-tooltip
      :enabled="true"
      format="fixedPoint"
    />
    <dx-item>
      <dx-border :visible="true"/>
    </dx-item>
    <dx-label
      :visible="true"
      :customize-text="formatLabel"
      position="inside"
      background-color="none"
    />
  </dx-funnel>
</template>

<script>

import DxFunnel, {
  DxTitle,
  DxMargin,
  DxExport,
  DxTooltip,
  DxItem,
  DxBorder,
  DxLabel
} from 'devextreme-vue/funnel';

import { dataSource } from './data.js';

export default {
  components: {
    DxFunnel,
    DxTitle,
    DxMargin,
    DxExport,
    DxTooltip,
    DxItem,
    DxBorder,
    DxLabel
  },
  data() {
    return {
      dataSource
    };
  },
  methods: {
    formatLabel(arg) {
      return `<span class="label">${arg.percentText}</span><br/>${arg.item.argument}`;
    }
  }
};
</script>

<style>
#funnel {
    height: 440px;
}
#funnel .label {
    font-size: 28px;
}
</style>
