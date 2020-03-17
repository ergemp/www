<template>
  <dx-data-grid
    :data-source="dataSource"
    :show-borders="true"
    :remote-operations="true"
  >
    <dx-column
      data-field="OrderNumber"
      data-type="number"
    />
    <dx-column
      data-field="OrderDate"
      data-type="date"
    />
    <dx-column
      data-field="StoreCity"
      data-type="string"
    />
    <dx-column
      data-field="StoreState"
      data-type="string"
    />
    <dx-column
      data-field="Employee"
      data-type="string"
    />
    <dx-column
      data-field="SaleAmount"
      data-type="number"
      format="currency"
    />
    <dx-paging :page-size="12"/>
    <dx-pager
      :show-page-size-selector="true"
      :allowed-page-sizes="[8, 12, 20]"
    />
  </dx-data-grid>
</template>
<script>

import { DxDataGrid, DxColumn, DxPaging, DxPager } from 'devextreme-vue/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== '';
}

const store = new CustomStore({
  key: 'OrderNumber',
  load: function(loadOptions) {
    let params = '?';
    [
      'skip',
      'take',
      'requireTotalCount',
      'requireGroupCount',
      'sort',
      'filter',
      'totalSummary',
      'group',
      'groupSummary'
    ].forEach(function(i) {
      if(i in loadOptions && isNotEmpty(loadOptions[i]))
      { params += `${i}=${JSON.stringify(loadOptions[i])}&`; }
    });
    params = params.slice(0, -1);
    return fetch(`https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders${params}`)
      .then(response => response.json())
      .then((data) => {
        return {
          data: data.data,
          totalCount: data.totalCount,
          summary: data.summary,
          groupCount: data.groupCount
        };
      })
      .catch(() => { throw 'Data Loading Error'; });
  }
});

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxPager
  },
  data() {
    return {
      dataSource: store
    };
  }
};
</script>
