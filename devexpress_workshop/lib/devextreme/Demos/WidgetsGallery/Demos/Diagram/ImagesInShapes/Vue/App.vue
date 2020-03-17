<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
  >
    <dx-nodes
      :data-source="orgItemsDataSource"
      :image-url-expr="'picture'"
    >
      <dx-auto-layout :orientation="'horizontal'"/>
    </dx-nodes>
    <dx-edges :data-source="orgLinksDataSource"/>
    <dx-toolbox>
      <dx-group
        :category="'general'"
        :title="'General'"
      />
      <dx-group
        :category="'orgChart'"
        :title="'Organizational Chart'"
        :expanded="true"
      />
    </dx-toolbox>
  </dx-diagram>
</template>
<script>
import { DxDiagram, DxNodes, DxAutoLayout, DxEdges, DxToolbox, DxGroup } from 'devextreme-vue/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

export default {
  components: {
    DxDiagram, DxNodes, DxAutoLayout, DxEdges, DxToolbox, DxGroup
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
        height: 900px;
    }
</style>
