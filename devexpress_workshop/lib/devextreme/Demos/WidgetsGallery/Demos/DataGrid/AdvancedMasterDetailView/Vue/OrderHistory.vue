<template>
  <div>
    <dx-data-grid
      :data-source="orderHistoryStore"
      :show-borders="true"
    >
      <dx-paging :page-size="5"/>

      <dx-column data-field="OrderID"/>
      <dx-column
        data-field="OrderDate"
        data-type="date"
      />
      <dx-column data-field="ShipCountry"/>
      <dx-column data-field="ShipCity"/>
      <dx-column
        data-field="UnitPrice"
        format="currency"
      />
      <dx-column data-field="Quantity"/>
      <dx-column
        data-field="Discount"
        format="percent"
      />

      <dx-summary>
        <dx-total-item
          column="UnitPrice"
          summary-type="sum"
        >
          <dx-value-format
            :precision="2"
            format="currency"
          />
        </dx-total-item>
        <dx-total-item
          column="Quantity"
          summary-type="count"
        />
      </dx-summary>
    </dx-data-grid>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxSummary,
  DxTotalItem,
  DxValueFormat
} from 'devextreme-vue/data-grid';

import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxSummary,
    DxTotalItem,
    DxValueFormat
  },
  props: {
    productId: {
      type: Number,
      default: null
    }
  },
  computed: {
    orderHistoryStore() {
      return this.productId === null ? null : {
        store: createStore({
          key: 'OrderID',
          loadParams: { ProductID: this.productId },
          loadUrl: `${url}/GetOrdersByProduct`
        })
      };
    }
  }
};
</script>
