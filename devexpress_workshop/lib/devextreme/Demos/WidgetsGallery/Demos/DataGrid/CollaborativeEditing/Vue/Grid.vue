<template>
  <dx-data-grid
    :data-source="dataSource"
    :height="600"
    :show-borders="true"
    :repaint-changes-only="true"
    :highlight-changes="true"
  >
    <dx-paging
      :enabled="false"
    />

    <dx-editing
      :allow-deleting="true"
      :allow-updating="true"
      :allow-adding="true"
      :use-icons="true"
      mode="cell"
      refresh-mode="reshape"
    />

    <dx-column
      :width="50"
      data-field="Prefix"
      caption="Title"
    >
      <dx-required-rule/>
    </dx-column>

    <dx-column
      data-field="FirstName"
    >
      <dx-required-rule/>
    </dx-column>

    <dx-column
      :lookup="lookup"
      data-field="StateID"
      caption="State"
    >
      <dx-required-rule/>
    </dx-column>

    <dx-column
      data-field="BirthDate"
      data-type="date"
    >
      <dx-range-rule
        :max="maxDate"
        message="Date can not be greater than 01/01/3000"
      />
    </dx-column>
  </dx-data-grid>
</template>

<script>
import { DxDataGrid, DxColumn, DxPaging, DxEditing, DxRequiredRule, DxRangeRule } from 'devextreme-vue/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

const statesStore = AspNetData.createStore({
  key: 'ID',
  loadUrl: 'https://js.devexpress.com/Demos/NetCore/api/DataGridStatesLookup'
});

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxRequiredRule,
    DxRangeRule
  },
  props: {
    dataSource: {
      type: Object,
      default: ()=>({})
    }
  },
  data() {
    return {
      maxDate: new Date(3000, 0),
      lookup: {
        dataSource: statesStore,
        displayExpr: 'Name',
        valueExpr: 'ID'
      }
    };
  }
};
</script>
