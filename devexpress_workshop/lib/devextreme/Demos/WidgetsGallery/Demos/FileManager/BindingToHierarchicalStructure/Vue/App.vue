<template>
  <dx-file-manager
    :file-provider="fileItems"
  >
    <dx-permissions
      :create="true"
      :copy="true"
      :move="true"
      :remove="true"
      :rename="true"
    />
  </dx-file-manager>
</template>

<script>
import { DxFileManager, DxPermissions } from 'devextreme-vue/file-manager';
import { fileItems } from './data.js';

export default {
  components: {
    DxFileManager,
    DxPermissions
  },

  data() {
    return {
      fileItems
    };
  }
};
</script>
