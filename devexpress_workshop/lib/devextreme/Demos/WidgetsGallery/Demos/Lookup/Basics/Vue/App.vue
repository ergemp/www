<template>
  <div>
    <div class="dx-fieldset">
      <div class="dx-fieldset-header">Simple lookup</div>
      <div class="dx-field">
        <dx-lookup
          :items="employeesList"
          :value="employeesList[0]"
          :show-popup-title="true"
        />
      </div>
    </div>
    <div class="dx-fieldset">
      <div class="dx-fieldset-header">Grouped lookup</div>
      <div class="dx-field">
        <dx-lookup
          :data-source="employeesTasks"
          :grouped="true"
          :close-on-outside-click="true"
          :show-popup-title="false"
          display-expr="Subject"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DxLookup } from 'devextreme-vue';
import { employeesList, employeesTasks } from './data.js';
import DataSource from 'devextreme/data/data_source';

export default {
  components: {
    DxLookup
  },
  data() {
    return {
      employeesList,
      employeesTasks: new DataSource({
        store: employeesTasks,
        key: 'ID',
        group: 'Assigned'
      })
    };
  }
};
</script>

