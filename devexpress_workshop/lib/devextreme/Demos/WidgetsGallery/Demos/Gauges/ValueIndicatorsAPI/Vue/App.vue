<template>
  <div>
    <div id="gauge-demo">
      <div class="widget-container">
        <dx-circular-gauge
          id="gauge"
          ref="gauge"
        >
          <dx-scale
            :start-value="10"
            :end-value="40"
            :tick-interval="5"
          >
            <dx-label
              :customize-text="customizeText"
            />
          </dx-scale>
          <dx-tooltip
            :enabled="true"
          />
          <dx-title
            text="Generators Voltage (kV)"
          >
            <dx-font
              :size="28"
            />
          </dx-title>
        </dx-circular-gauge>
      </div>
      <div class="options">
        <div class="caption">Options</div>
        <div class="option">
          <span>Main generator</span>
          <dx-number-box
            id="main-generator"
            :value.sync="mainGeneratorValue"
            :min="10"
            :max="40"
            :width="100"
            :show-spin-buttons="true"
          />
        </div>
        <div class="option">
          <span>Additional generator 1</span>
          <dx-number-box
            id="additional-generator-one"
            :value.sync="additionalGenerator1Value"
            :min="10"
            :max="40"
            :width="100"
            :show-spin-buttons="true"
          />
        </div>
        <div class="option">
          <span>Additional generator 2</span>
          <dx-number-box
            id="additional-generator-two"
            :value.sync="additionalGenerator2Value"
            :min="10"
            :max="40"
            :width="100"
            :show-spin-buttons="true"
          />
        </div>
        <div class="option">
          <dx-button
            id="edit"
            :width="100"
            text="Apply"
            @click="updateValues"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DxCircularGauge, DxScale, DxLabel, DxTooltip, DxTitle, DxFont } from 'devextreme-vue/circular-gauge';
import { DxNumberBox } from 'devextreme-vue/number-box';
import { DxButton } from 'devextreme-vue/button';

export default {
  components: {
    DxCircularGauge, DxScale, DxLabel, DxTooltip, DxTitle, DxFont,
    DxNumberBox,
    DxButton
  },
  data() {
    return {
      additionalGenerator1Value: 12,
      additionalGenerator2Value: 23,
      mainGeneratorValue: 34
    };
  },
  mounted() {
    this.updateValues();
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} kV`;
    },
    updateValues() {
      this.$refs.gauge.instance.value(this.mainGeneratorValue);
      this.$refs.gauge.instance.subvalues([this.additionalGenerator1Value, this.additionalGenerator2Value]);
    }
  }
};
</script>
<style scoped>
.widget-container {
    margin-right: 320px;
}

.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 260px;
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option {
    margin-top: 10px;
}

.option > span {
    display: inline-block;
    width: 155px;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
}

.option > .dx-button {
    float: right;
}
</style>
