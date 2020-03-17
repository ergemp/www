<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
  >
    <dx-nodes
      :data-source="dataSource"
      :key-expr="'ID'"
      :text-expr="'Title'"
      :parent-key-expr="'Head_ID'"
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
