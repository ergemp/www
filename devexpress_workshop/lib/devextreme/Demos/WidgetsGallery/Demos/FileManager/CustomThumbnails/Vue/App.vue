<template>
  <dx-file-manager
    :file-provider="fileItems"
    :customize-thumbnail="customizeIcon"
    :height="450"
  >
    <dx-item-view mode="thumbnails"/>
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
import { DxFileManager, DxPermissions, DxItemView } from 'devextreme-vue/file-manager';
import { fileItems } from './data.js';

export default {
  components: {
    DxFileManager,
    DxPermissions,
    DxItemView
  },

  data() {
    return {
      fileItems
    };
  },
  methods: {
    customizeIcon: function(fileManagerItem) {
      if (fileManagerItem.isDirectory)
      { return '../../../../images/thumbnails/folder.svg'; }
      var fileExtension = fileManagerItem.getExtension();
      switch (fileExtension) {
        case '.txt':
          return '../../../../images/thumbnails/doc-txt.svg';
        case '.rtf':
          return '../../../../images/thumbnails/doc-rtf.svg';
        case '.xml':
          return '../../../../images/thumbnails/doc-xml.svg';
      }
    }
  }
};
</script>
