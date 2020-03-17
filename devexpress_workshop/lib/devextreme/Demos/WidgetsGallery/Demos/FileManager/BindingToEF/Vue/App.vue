<template>
  <dx-file-manager
    :file-provider="remoteFileProvider"
    :allowed-file-extensions="allowedFileExtensions"
    :customize-detail-columns="customizeDetailColumns"
    :height="550"
    current-path="Documents/Reports"
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
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

const remoteFileProvider = new RemoteFileProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-db'
});

const allowedFileExtensions = [];

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
  },

  methods: {
    customizeDetailColumns(columns) {
      var fileSizeColumn = columns.filter(function(c) { return c.dataField === 'fileSize'; })[0];
      columns.splice(columns.indexOf(fileSizeColumn), 1);

      var modifiedColumn = columns.filter(function(c) { return c.dataField === 'dateModified'; })[0];
      modifiedColumn.caption = 'Modified';

      columns.push({
        caption: 'Created',
        dataField: 'created',
        dataType: 'date'
      });

      columns.push({
        visibleIndex: 2,
        caption: 'Modified By',
        dataField: 'modifiedBy'
      });
      return columns;
    }
  }
};
</script>
