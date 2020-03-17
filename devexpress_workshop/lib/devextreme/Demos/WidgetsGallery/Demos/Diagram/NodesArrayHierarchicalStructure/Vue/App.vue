<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
  >
    <dx-nodes
      :data-source="dataSource"
      :text-expr="'Title'"
      :items-expr="'Items'"
    />
    <dx-toolbox>
      <dx-group
        :category="'general'"
        :title="'General'"
      />
    </dx-toolbox>
  </dx-diagram>
</template>
<script>
import { DxDiagram, DxNodes, DxToolbox, DxGroup } from 'devextreme-vue/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

export default {
  components: {
    DxDiagram, DxNodes, DxToolbox, DxGroup
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
        height: 725px;
    }
</style>
