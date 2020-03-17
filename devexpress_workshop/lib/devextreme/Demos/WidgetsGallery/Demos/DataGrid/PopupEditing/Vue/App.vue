<template>
  <div id="data-grid-demo">
    <dx-data-grid
      :data-source="dataSource"
      :show-borders="true"
      key-expr="ID"
    >
      <dx-paging :enabled="false"/>
      <dx-editing
        :allow-updating="true"
        mode="popup"
      >
        <dx-popup
          :show-title="true"
          :width="700"
          :height="525"
          title="Employee Info"
        >
          <dx-position
            my="top"
            at="top"
            of="window"
          />
        </dx-popup>
        <dx-form>
          <dx-item
            :col-count="2"
            :col-span="2"
            item-type="group"
          >
            <dx-item data-field="FirstName"/>
            <dx-item data-field="LastName"/>
            <dx-item data-field="Prefix"/>
            <dx-item data-field="BirthDate"/>
            <dx-item data-field="Position"/>
            <dx-item data-field="HireDate"/>
            <dx-item
              :col-span="2"
              :editor-options="{ height: 100 }"
              data-field="Notes"
              editor-type="dxTextArea"
            />
          </dx-item>

          <dx-item
            :col-count="2"
            :col-span="2"
            item-type="group"
            caption="Home Address"
          >
            <dx-item data-field="StateID"/>
            <dx-item data-field="Address"/>
          </dx-item>
        </dx-form>
      </dx-editing>

      <dx-column
        :width="70"
        data-field="Prefix"
        caption="Title"
      />
      <dx-column data-field="FirstName"/>
      <dx-column data-field="LastName"/>
      <dx-column
        data-field="BirthDate"
        data-type="date"
      />
      <dx-column
        :width="170"
        data-field="Position"
      />
      <dx-column
        data-field="HireDate"
        data-type="date"
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
        :visible="false"
        data-field="Address"
      />
      <dx-column
        :visible="false"
        data-field="Notes"
      />
    </dx-data-grid>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxEditing,
  DxPopup,
  DxLookup,
  DxPosition,
  DxForm
} from 'devextreme-vue/data-grid';
import { DxItem } from 'devextreme-vue/form';
import { employees, states } from './data.js';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxPopup,
    DxLookup,
    DxPosition,
    DxForm,
    DxItem
  },
  data() {
    return {
      dataSource: employees,
      states: states
    };
  }
};
</script>
<style>
#data-grid-demo {
  min-height: 700px;
}
</style>
