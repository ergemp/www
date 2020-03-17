<template>
  <dx-tab-panel>
    <dx-item
      title="Orders"
      template="orders-tab"
    />
    <orders-tab
      slot="orders-tab"
      :supplier-id="masterDetailData.key"
    />
    <dx-item
      title="Address"
      template="address-tab"
    />
    <address-tab
      slot="address-tab"
      :data="masterDetailData.data"
    />
  </dx-tab-panel>
</template>

<script>
import { DxTabPanel, DxItem } from 'devextreme-vue/tab-panel';

import OrdersTab from './OrdersTab.vue';
import AddressTab from './AddressTab.vue';

export default {
  components: { DxTabPanel, DxItem, OrdersTab, AddressTab },
  props: {
    masterDetailData: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
