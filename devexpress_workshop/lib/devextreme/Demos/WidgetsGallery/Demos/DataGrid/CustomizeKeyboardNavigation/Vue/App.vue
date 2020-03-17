<template>
  <div id="data-grid-demo">
    <dx-data-grid
      :data-source="dataSource"
      :show-borders="true"
      :on-focused-cell-changing="onFocusedCellChanging"
      key-expr="ID"
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
      <dx-paging :enabled="false"/>
      <dx-column
        :width="70"
        data-field="Prefix"
        caption="Title"
      />
      <dx-column
        data-field="FirstName"
      />
      <dx-column
        data-field="LastName"
      />
      <dx-column
        :width="170"
        data-field="Position"
      />
      <dx-column
        :width="125"
        data-field="StateID"
        caption="State"
      >
        <dx-lookup
          :data-source="states"
          value-expr="ID"
          display-expr="Name"
        />
      </dx-column>
      <dx-column
        data-field="BirthDate"
        data-type="date"
      />
    </dx-data-grid>
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
  DxDataGrid,
  DxKeyboardNavigation,
  DxColumn,
  DxPaging,
  DxEditing,
  DxLookup
} from 'devextreme-vue/data-grid';
import { DxCheckBox, DxSelectBox } from 'devextreme-vue';
import { employees, states } from './data.js';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxKeyboardNavigation,
    DxLookup,
    DxCheckBox,
    DxSelectBox
  },
  data() {
    return {
      dataSource: employees,
      states: states,
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
