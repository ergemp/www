<template>
  <dx-data-grid
    id="gridContainer"
    :remote-operations="{ groupPaging: true }"
    :word-wrap-enabled="true"
    :data-source="dataSource"
    :show-borders="true"
  >
    <dx-scrolling
      mode="virtual"
    />

    <dx-group-panel :visible="true"/>
    <dx-grouping :auto-expand-all="false"/>

    <dx-column
      :width="75"
      data-field="Id"
      data-type="number"
    />
    <dx-column
      :width="150"
      data-field="ProductSubcategoryName"
      caption="Subcategory"
    />
    <dx-column
      :width="150"
      :group-index="0"
      data-field="StoreName"
      caption="Store"
    />
    <dx-column
      :width="120"
      :group-index="1"
      data-field="ProductCategoryName"
      caption="Category"
    />
    <dx-column
      data-field="ProductName"
      caption="Product"
    />
    <dx-column
      :width="100"
      data-field="DateKey"
      caption="Date"
      data-type="date"
      format="yyyy-MM-dd"
    />
    <dx-column
      :width="100"
      data-field="SalesAmount"
      caption="Amount"
      format="currency"
    />
    <dx-summary>
      <dx-group-item
        column="Id"
        summary-type="count"
      />
    </dx-summary>
  </dx-data-grid>
</template>
<script>
import { DxDataGrid, DxScrolling, DxColumn, DxGrouping, DxGroupPanel, DxSummary, DxGroupItem } from 'devextreme-vue/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxGrouping,
    DxGroupPanel,
    DxSummary,
    DxGroupItem
  },
  data() {
    return {
      dataSource: AspNetData.createStore({
        key: 'Id',
        loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales'
      })
    };
  }
};
</script>
<style>
#gridContainer {
  height: 420px;
  width: 100%;
}
</style>
