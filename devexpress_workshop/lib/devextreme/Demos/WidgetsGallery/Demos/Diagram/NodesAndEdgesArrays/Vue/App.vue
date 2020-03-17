<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
  >
    <dx-nodes :data-source="orgItemsDataSource"/>
    <dx-edges :data-source="orgLinksDataSource"/>
    <dx-toolbox>
      <dx-group
        :category="'general'"
        :title="'General'"
      />
    </dx-toolbox>
  </dx-diagram>
</template>
<script>
import { DxDiagram, DxNodes, DxEdges, DxToolbox, DxGroup } from 'devextreme-vue/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

export default {
  components: {
    DxDiagram, DxNodes, DxEdges, DxToolbox, DxGroup
  },
  data() {
    return {
      orgItemsDataSource: new ArrayStore({
        key: 'this',
        data: service.getOrgItems()
      }),
      orgLinksDataSource: new ArrayStore({
        key: 'this',
        data: service.getOrgLinks()
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
