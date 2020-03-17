<template>
  <div>
    <dx-file-manager
      :file-provider="remoteFileProvider"
      :on-selected-file-opened="displayImagePopup"
      current-path="Widescreen"
    >
      <dx-permissions
        :create="true"
        :copy="true"
        :move="true"
        :remove="true"
        :rename="true"
        :upload="true"
        :download="true"
      />
    </dx-file-manager>

    <dx-popup
      :close-on-outside-click="true"
      :visible.sync="popupVisible"
      :title.sync="imageItemToDisplay.name"
      max-height="600"
      class="photo-popup-content"
    >
      <img
        :src="imageItemToDisplay.url"
        class="photo-popup-image"
      >
    </dx-popup>
  </div>
</template>

<script>
import { DxFileManager, DxPermissions } from 'devextreme-vue/file-manager';
import { DxPopup } from 'devextreme-vue/popup';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

const remoteFileProvider = new RemoteFileProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images'
});

export default {
  components: {
    DxFileManager,
    DxPermissions,
    DxPopup
  },

  data() {
    return {
      remoteFileProvider,
      popupVisible: false,
      imageItemToDisplay: {}
    };
  },

  methods: {
    displayImagePopup(e) {
      this.imageItemToDisplay = {
        name: e.fileItem.name,
        url: e.fileItem.dataItem.url
      };
      this.popupVisible = true;
    }
  }
};
</script>

<style>
.photo-popup-content {
    text-align: center;
}
.photo-popup-content .photo-popup-image {
    height: 100%;
    max-width: 100%;
}
</style>
