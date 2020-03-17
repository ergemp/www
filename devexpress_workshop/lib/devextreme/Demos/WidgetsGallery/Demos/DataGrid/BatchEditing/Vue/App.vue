<template>
  <div id="data-grid-demo">
    <dx-data-grid
      :data-source="dataSource"
      :show-borders="true"
      key-expr="ID"
    >
      <dx-editing
        :allow-updating="true"
        :select-text-on-edit-start="selectTextOnEditStart"
        :start-edit-action="startEditAction"
        mode="batch"
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
      <div class="option">
        <dx-check-box
          v-model="selectTextOnEditStart"
          text="Select Text on Edit Start"
        />
      </div>
      <div class="option">
        <span>Start Edit Action</span>
        <dx-select-box
          :items="['click', 'dblClick']"
          v-model="startEditAction"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  DxDataGrid,
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
    DxLookup,
    DxCheckBox,
    DxSelectBox
  },
  data() {
    return {
      dataSource: employees,
      states: states,
      selectTextOnEditStart: true,
      startEditAction: 'click'
    };
  }
};
</script>
<style>
#data-grid-demo {
  min-height: 700px;
}

.options {
    margin-top: 20px;
    padding: 20px;
    background: #f5f5f5;
}

.options .caption {
    font-size: 18px;
    font-weight: 500;
}

.option {
    margin-top: 10px;
}

.option > span {
    width: 120px;
    display: inline-block;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    max-width: 350px;
}
</style>
