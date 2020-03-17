<template>
  <dx-form :form-data="formData">
    <template #avatar-template="{}">
      <div class="form-avatar"/>
    </template>
    <dx-group-item
      :col-count="4"
      css-class="first-group"
    >
      <dx-simple-item template="avatar-template"/>
      <dx-group-item :col-span="3">
        <dx-simple-item data-field="FirstName"/>
        <dx-simple-item data-field="LastName"/>
        <dx-simple-item
          :editor-options="birthDateOptions"
          data-field="BirthDate"
          editor-type="dxDateBox"
        />
      </dx-group-item>
    </dx-group-item>
    <dx-group-item
      :col-count="2"
      css-class="second-group"
    >
      <dx-group-item>
        <dx-simple-item data-field="Address"/>
        <dx-simple-item data-field="City"/>
        <dx-simple-item
          :editor-options="positionOptions"
          data-field="Position"
          editor-type="dxSelectBox"
        />
      </dx-group-item>
      <dx-group-item>
        <dx-simple-item
          :editor-options="stateOptions"
          data-field="State"
          editor-type="dxSelectBox"
        />
        <dx-simple-item data-field="ZipCode"/>
        <dx-simple-item
          :editor-options="phoneOptions"
          data-field="Mobile"
        >
          <dx-label text="Phone"/>
        </dx-simple-item>
      </dx-group-item>
      <dx-simple-item
        :col-span="2"
        :editor-options="notesOptions"
        data-field="Notes"
        editor-type="dxTextArea"
      />
    </dx-group-item>
  </dx-form>
</template>
<script>
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxLabel
} from 'devextreme-vue/form';
import { DxTextArea } from 'devextreme-vue/text-area';
import { employee, positions, states } from './data.js';

export default {
  components: {
    DxForm,
    DxTextArea,
    DxGroupItem,
    DxSimpleItem,
    DxLabel
  },
  data: function() {
    return {
      formData: employee,
      birthDateOptions: { width: '100%' },
      positionOptions: {
        items: positions,
        value: ''
      },
      stateOptions: {
        items: states
      },
      phoneOptions: { mask: '+1 (000) 000-0000' },
      notesOptions: { height: 140 }
    };
  }
};
</script>
<style>
.first-group,
.second-group {
  padding: 20px;
}
.second-group {
  background-color: rgba(191, 191, 191, 0.15);
}
.form-avatar {
  height: 128px;
  width: 128px;
  margin-right: 10px;
  border: 1px solid #d2d3d5;
  border-radius: 50%;
  background-image: url("../../../../images/petersmith.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
