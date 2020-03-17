<template>
  <div>
    <div class="dx-fieldset">
      <div class="dx-field">
        <dx-lookup
          :items="items"
          :display-expr="getDisplayExpr"
          :show-popup-title="false"
          placeholder="Select employee"
          @value-changed="setSelectedValue"
        />
      </div>
    </div>
    <div v-if="selectedValue">
      <div class="selected">
        <img
          id="selected-employee-img"
          :src="selectedValue.Picture"
        >
        <span id="selected-employee-notes">{{ selectedValue.Notes }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { DxLookup } from 'devextreme-vue';
import { employees } from './data.js';

export default {
  components: {
    DxLookup
  },
  data() {
    return {
      items: employees,
      selectedValue: null
    };
  },
  methods: {
    getDisplayExpr(item) {
      return item ? `${item.FirstName} ${item.LastName}` : '';
    },
    setSelectedValue(e) {
      this.selectedValue = e.value;
    }
  }
};
</script>

