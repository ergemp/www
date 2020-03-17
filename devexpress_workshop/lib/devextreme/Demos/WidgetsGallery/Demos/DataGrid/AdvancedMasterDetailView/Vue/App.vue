<template>
  <dx-data-grid
    id="gridContainer"
    :data-source="suppliersData"
    :remote-operations="true"
    :show-borders="true"
  >
    <dx-paging :page-size="15"/>

    <dx-column data-field="ContactName"/>
    <dx-column data-field="ContactTitle"/>
    <dx-column data-field="CompanyName"/>
    <dx-column data-field="City"/>
    <dx-column data-field="Country"/>
    <dx-master-detail
      :enabled="true"
      template="master-detail"
    />
    <template #master-detail="{ data }">
      <master-detail :master-detail-data="data"/>
    </template>
  </dx-data-grid>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxMasterDetail,
} from 'devextreme-vue/data-grid';

import MasterDetail from './MasterDetail.vue';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxMasterDetail,
    MasterDetail
  },
  data() {
    return {
      suppliersData: createStore({
        key: 'SupplierID',
        loadUrl: `${url}/GetSuppliers`
      })
    };
  }
};
</script>
