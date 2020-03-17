<template>
  <dx-form
    label-location="top"
    class="form-container"
  >
    <dx-item template="select-box">
      <dx-label text="Product"/>
    </dx-item>
    <product-select-box
      slot="select-box"
      :supplier-id="supplierId"
      @product-changed="chosenProductId = $event"
    />

    <dx-item template="order-history">
      <dx-label text="Order History"/>
    </dx-item>
    <template #order-history="{ data }">
      <order-history
        :product-id="chosenProductId"
      />
    </template>
  </dx-form>
</template>

<script>

import { DxForm, DxItem, DxLabel } from 'devextreme-vue/form';
import ProductSelectBox from './ProductSelectBox.vue';
import OrderHistory from './OrderHistory.vue';

export default {
  components: { DxForm, DxItem, DxLabel, ProductSelectBox, OrderHistory },
  props: {
    supplierId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      chosenProductId: null
    };
  }
};
</script>
