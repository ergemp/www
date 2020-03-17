<template>
  <div class="custom-item">
    <img
      v-if="fieldData"
      :src="fieldData.ImageSrc"
    >
    <dx-text-box
      :value="fieldData && fieldData.Name"
      :read-only="true"
      class="product-name"
    />
  </div>
</template>
<script>
import { DxTextBox } from 'devextreme-vue';

export default {
  components: {
    DxTextBox
  },
  props: {
    fieldData: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
