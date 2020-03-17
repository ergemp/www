<template>
  <dx-drop-down-box
    :ref="dropDownBoxRefName"
    :drop-down-options="dropDownOptions"
    :data-source="dataSource"
    :value.sync="currentValue"
    display-expr="FullName"
    value-expr="ID"
    content-template="contentTemplate"
  >
    <template #contentTemplate="{}">
      <dx-data-grid
        :data-source="dataSource"
        :remote-operations="true"
        :height="250"
        :selected-row-keys="[currentValue]"
        :hover-state-enabled="true"
        :on-selection-changed="onSelectionChanged"
        :focused-row-enabled="true"
        :focused-row-key="currentValue"
        key-expr="ID"
      >
        <dx-column data-field="FullName"/>
        <dx-column data-field="Title"/>
        <dx-column data-field="Department"/>
        <dx-paging
          :enabled="true"
          :page-size="10"
        />
        <dx-scrolling mode="virtual"/>
        <dx-selection mode="single"/>
      </dx-data-grid>
    </template>
  </dx-drop-down-box>
</template>
<script>

import {
  DxDataGrid,
  DxPaging,
  DxSelection,
  DxScrolling,
  DxColumn
} from 'devextreme-vue/data-grid';
import DxDropDownBox from 'devextreme-vue/drop-down-box';

const dropDownBoxRefName = 'dropDownBoxRef';

export default {
  components: {
    DxDataGrid,
    DxPaging,
    DxSelection,
    DxScrolling,
    DxColumn,
    DxDropDownBox
  },
  props: {
    value: {
      type: Number,
      default: null
    },
    onValueChanged: {
      type: Function,
      default: () => function() {}
    },
    dataSource: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      currentValue: this.value,
      dropDownOptions: { width: 500 },
      dropDownBoxRefName
    };
  },
  methods: {
    onSelectionChanged(selectionChangedArgs) {
      this.currentValue = selectionChangedArgs.selectedRowKeys[0];
      this.onValueChanged(this.currentValue);
      if(selectionChangedArgs.selectedRowKeys.length > 0) {
        this.$refs[dropDownBoxRefName].instance.close();
      }
    }
  }
};
</script>
