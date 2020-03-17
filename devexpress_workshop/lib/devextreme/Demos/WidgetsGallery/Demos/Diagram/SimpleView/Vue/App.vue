<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
    :simple-view="true"
  >
    <dx-nodes
      :data-source="dataSource"
      :key-expr="'ID'"
      :text-expr="'Title'"
      :parent-key-expr="'Head_ID'"
    />
    <dx-toolbox :visible="false"/>
    <dx-properties-panel :enabled="false"/>
  </dx-diagram>
</template>
<script>
import { DxDiagram, DxNodes, DxToolbox, DxPropertiesPanel } from 'devextreme-vue/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

export default {
  components: {
    DxDiagram, DxNodes, DxToolbox, DxPropertiesPanel
  },
  data() {
    return {
      dataSource: new ArrayStore({
        key: 'this',
        data: service.getEmployees()
      })
    };
  }
};
</script>
<style scoped>
    #diagram {
        height: 600px;
    }
</style>
