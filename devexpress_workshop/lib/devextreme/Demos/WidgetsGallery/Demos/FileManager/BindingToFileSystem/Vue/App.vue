<template>
  <dx-file-manager
    :file-provider="remoteFileProvider"
    :allowed-file-extensions="allowedFileExtensions"
  >
    <!-- uncomment the code below to enable file/directory management -->
    <!-- <dx-permissions
      :create="true"
      :copy="true"
      :move="true"
      :remove="true"
      :rename="true"
      :upload="true"
      :download="true"
    /> -->
  </dx-file-manager>
</template>

<script>
import { DxFileManager, DxPermissions } from 'devextreme-vue/file-manager';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

const remoteFileProvider = new RemoteFileProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
});

const allowedFileExtensions = ['.js', '.json', '.css'];

export default {
  components: {
    DxFileManager,
    DxPermissions
  },

  data() {
    return {
      remoteFileProvider,
      allowedFileExtensions
    };
  }
};
</script>
