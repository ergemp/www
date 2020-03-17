<template>
  <dx-tree-list
    :data-source="dataSource"
    :columns="columns"
    :show-borders="true"
    :focused-row-enabled="true"
    :expanded-row-keys="[1, 2, 3, 5]"
    key-expr="ID"
    parent-id-expr="Head_ID"
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
    <dx-scrolling mode="standard"/>
    <dx-pager
      :allowed-page-sizes="[5, 10]"
      :show-page-size-selector="true"
      :show-navigation-buttons="true"
    />
    <dx-paging
      :enabled="true"
      :page-size="10"
    />
  </dx-tree-list>
</template>
<script>

import {
  DxTreeList,
  DxEditing,
  DxHeaderFilter,
  DxFilterRow,
  DxFilterPanel,
  DxScrolling,
  DxPager,
  DxPaging
} from 'devextreme-vue/tree-list';
import { employees } from './data.js';

export default {
  components: {
    DxTreeList,
    DxEditing,
    DxHeaderFilter,
    DxFilterRow,
    DxFilterPanel,
    DxScrolling,
    DxPager,
    DxPaging
  },
  data() {
    return {
      dataSource: employees,
      columns: [
        'Full_Name',
        {
          dataField: 'Title',
          caption: 'Position'
        },
        'City',
        'State'
      ]
    };
  }
};
</script>
