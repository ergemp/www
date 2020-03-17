<template>
  <dx-data-grid
    :data-source="dataSource"
    :show-borders="true"
    :focused-row-enabled="true"
    key-expr="ID"
  >
    <dx-editing
      :allow-updating="true"
      :allow-deleting="true"
      :select-text-on-edit-start="true"
      :use-icons="true"
    />
    <dx-header-filter :visible="true"/>
    <dx-filter-row :visible="true"/>
    <dx-filter-panel :visible="true"/>
    <dx-pager
      :allowed-page-sizes="[5, 10]"
      :show-page-size-selector="true"
      :show-navigation-buttons="true"
    />
    <dx-paging :page-size="10"/>
    <dx-column data-field="FirstName"/>
    <dx-column data-field="LastName"/>
    <dx-column data-field="Position"/>
    <dx-column
      data-field="StateID"
      caption="State"
      data-type="number"
    >
      <dx-lookup
        :data-source="states"
        value-expr="ID"
        display-expr="Name"
      />
    </dx-column>
  </dx-data-grid>
</template>
<script>

import {
  DxDataGrid,
  DxEditing,
  DxHeaderFilter,
  DxFilterRow,
  DxFilterPanel,
  DxPager,
  DxPaging,
  DxColumn,
  DxLookup
} from 'devextreme-vue/data-grid';
import { employees, states } from './data.js';

export default {
  components: {
    DxDataGrid,
    DxEditing,
    DxHeaderFilter,
    DxFilterRow,
    DxFilterPanel,
    DxPager,
    DxPaging,
    DxColumn,
    DxLookup
  },
  data() {
    return {
      dataSource: employees,
      states: states
    };
  }
};
</script>
