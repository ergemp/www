<template>
  <div id="tree-list-demo">
    <dx-tree-list
      id="employees"
      :data-source="dataSource"
      :column-auto-width="true"
      :expanded-row-keys="expandedRowKeys"
      :on-focused-cell-changing="onFocusedCellChanging"
      key-expr="ID"
      parent-id-expr="Head_ID"
    >
      <dx-keyboard-navigation
        :edit-on-key-press="editOnKeyPress"
        :enter-key-action="enterKeyAction"
        :enter-key-direction="enterKeyDirection"
      />
      <dx-editing
        :allow-updating="true"
        mode="batch"
        start-edit-action="dblClick"
      />
      <dx-column
        data-field="Full_Name"
      />
      <dx-column
        data-field="Prefix"
        caption="Title"
      />
      <dx-column
        data-field="Title"
        caption="Position"
      />
      <dx-column
        data-field="City"
      />
      <dx-column
        data-field="Hire_Date"
        data-type="date"
      />
    </dx-tree-list>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option-container">
        <div class="option check-box">
          <dx-check-box
            :value.sync="editOnKeyPress"
            text="Edit On Key Press"
          />
        </div>
        <div class="option">
          <span class="option-caption">Enter Key Action</span>
          <dx-select-box
            :items="enterKeyActions"
            :value.sync="enterKeyAction"
            class="select"
          />
        </div>
        <div class="option">
          <span class="option-caption">Enter Key Direction</span>
          <dx-select-box
            :items="enterKeyDirections"
            :value.sync="enterKeyDirection"
            class="select"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  DxTreeList,
  DxEditing,
  DxColumn,
  DxKeyboardNavigation
} from 'devextreme-vue/tree-list';
import { DxCheckBox, DxSelectBox } from 'devextreme-vue';
import { employees } from './data.js';

export default {
  components: {
    DxTreeList,
    DxColumn,
    DxEditing,
    DxKeyboardNavigation,
    DxCheckBox,
    DxSelectBox
  },
  data() {
    return {
      dataSource: employees,
      expandedRowKeys: [1, 2, 4, 5],
      editOnKeyPress: true,
      enterKeyActions: ['startEdit', 'moveFocus'],
      enterKeyDirections: ['none', 'column', 'row'],
      enterKeyDirection: 'column',
      enterKeyAction: 'moveFocus'
    };
  },
  methods: {
    onFocusedCellChanging(e) {
      e.isHighlighted = true;
    }
  }
};
</script>
