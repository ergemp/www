<template>
  <dx-diagram
    id="diagram"
    ref="diagram"
    :read-only="true"
  >
    <dx-properties-panel :enabled="false"/>
    <dx-toolbox :visible="false"/>
  </dx-diagram>
</template>
<script>
import { DxDiagram, DxPropertiesPanel, DxToolbox } from 'devextreme-vue/diagram';
import 'whatwg-fetch';

export default {
  components: {
    DxDiagram, DxPropertiesPanel, DxToolbox
  },
  mounted() {
    var diagram = this.$refs['diagram'].instance;
    fetch('../../../../data/diagram-structure.json')
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
        height: 700px;
    }
</style>
