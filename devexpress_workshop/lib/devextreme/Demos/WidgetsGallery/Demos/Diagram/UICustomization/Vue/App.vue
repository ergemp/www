<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
  >
    <dx-context-menu
      :enabled="true"
      :commands="['bringToFront', 'sendToBack' , 'lock' , 'unlock' ]"
    />
    <dx-properties-panel
      :enabled="true"
      :collapsible="false"
    >
      <dx-group :commands="['units']"/>
      <dx-group :commands="['pageSize', 'pageOrientation' , 'pageColor' ]"/>
    </dx-properties-panel>
    <dx-toolbar
      :visible="true"
      :commands="['undo', 'redo' , 'separator' , 'fontName' , 'fontSize' , 'separator' , 'bold' , 'italic' , 'underline' , 'separator' , 'fontColor' , 'lineColor' , 'fillColor' , 'separator' ]"
    />
    <dx-toolbox :visible="true">
      <dx-group
        :category="'general'"
        :title="'General'"
      />
      <dx-group
        :category="'flowchart'"
        :title="'Flowchart'"
        :expanded="true"
      />
    </dx-toolbox>
  </dx-diagram>
</template>
<script>
import { DxDiagram, DxContextMenu, DxPropertiesPanel, DxGroup, DxToolbar, DxToolbox } from 'devextreme-vue/diagram';
import 'whatwg-fetch';

export default {
  components: {
    DxDiagram, DxContextMenu, DxPropertiesPanel, DxGroup, DxToolbar, DxToolbox
  },
  mounted() {
    var diagram = this.$refs['diagram'].instance;
    fetch('../../../../data/diagram-flow.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        diagram.import(JSON.stringify(json));
      })
      .catch(function() {
        throw 'Data Loading Error';
      });
  }
};
</script>
<style scoped>
    #diagram {
        height: 900px;
    }
</style>
