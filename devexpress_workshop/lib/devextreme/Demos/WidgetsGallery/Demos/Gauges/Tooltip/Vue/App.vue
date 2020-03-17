<template>
  <div>
    <dx-bar-gauge
      id="gauge"
      :start-value="0"
      :end-value="200"
      :values="values"
    >
      <dx-label
        :visible="false"
      />
      <dx-tooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip"
      />
      <dx-export
        :enabled="true"
      />
      <dx-title
        text="Average Speed by Racer"
      >
        <dx-font
          :size="28"
        />
      </dx-title>
      <dx-legend
        :visible="true"
        :customize-text="customizeText"
        vertical-alignment="bottom"
        horizontal-alignment="center"
      />
    </dx-bar-gauge>
  </div>
</template>
<script>
import { DxBarGauge, DxLabel, DxTooltip, DxExport, DxTitle, DxFont, DxLegend } from 'devextreme-vue/bar-gauge';

export default {
  components: {
    DxBarGauge, DxLabel, DxTooltip, DxExport, DxTitle, DxFont, DxLegend
  },
  data() {
    return {
      values: [121.4, 135.4, 115.9, 141.1, 127.5]
    };
  },
  methods: {
    getText(item, text) {
      return `Racer ${(item.index + 1)} - ${text} km/h`;
    },
    customizeTooltip(arg) {
      return {
        text: this.getText(arg, arg.valueText)
      };
    },
    customizeText(arg) {
      return this.getText(arg.item, arg.text);
    }
  }
};
</script>
<style scoped>
#gauge {
    height: 440px;
    width: 100%;
}
</style>
