<template>
  <div :class="cellData | className">
    <div class="current-value">{{ cellData | formatCurrency('USD') }}</div>
    <div class="diff">{{ cellData | abs | fixed(2) }}</div>
  </div>
</template>
<script>
import {
  DxSparkline,
  DxSize,
  DxTooltip
} from 'devextreme-vue/sparkline';

import Globalize from 'globalize';
import 'devextreme/localization/globalize/currency';

const gridCellData = function(value) {
  return value.data[value.column.caption.toLowerCase()];
};

export default {
  components: {
    DxSparkline,
    DxSize,
    DxTooltip
  },
  filters: {
    className(value) {
      return gridCellData(value).diff > 0 ? 'inc' : 'dec';
    },
    formatCurrency(value, currency) {
      return Globalize.formatCurrency(gridCellData(value).value, currency);
    },
    abs(value) {
      return Math.abs(gridCellData(value).diff);
    },
    fixed(value, precision) {
      return value.toFixed(precision);
    }
  },
  props: {
    cellData: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
