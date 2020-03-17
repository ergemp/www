<template>
  <dx-data-grid
    :data-source="dataSource"
    :height="440"
    :show-borders="true"
    :filter-value="filterExpr"
  >
    <dx-row-dragging
      :data="status"
      :on-add="onAdd"
      group="tasksGroup"
    />
    <dx-scrolling mode="virtual"/>
    <dx-column
      data-field="Subject"
      data-type="string"
    />
    <dx-column
      :width="80"
      data-field="Priority"
      data-type="number"
    >
      <dx-lookup
        :data-source="priorities"
        value-expr="id"
        display-expr="text"
      />
    </dx-column>
    <dx-column
      :visible="false"
      data-field="Status"
      data-type="number"
    />

  </dx-data-grid>
</template>

<script>
import { DxDataGrid, DxColumn, DxRowDragging, DxScrolling, DxLookup } from 'devextreme-vue/data-grid';

const priorities = [{
  id: 1, text: 'Low'
}, {
  id: 2, text: 'Normal'
}, {
  id: 3, text: 'High'
}, {
  id: 4, text: 'Urgent'
}];

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxRowDragging,
    DxScrolling,
    DxLookup
  },
  props: {
    tasksStore: {
      type: Object,
      default: ()=>({})
    },
    status: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dataSource: {
        store: this.tasksStore,
        reshapeOnPush: true
      },
      priorities,
      filterExpr: ['Status', '=', this.status],
    };
  },
  methods: {
    onAdd(e) {
      var key = e.itemData.ID,
        values = { Status: e.toData };

      this.tasksStore.update(key, values).then(() => {
        this.tasksStore.push([{
          type: 'update', key: key, data: values
        }]);
      });
    }
  }
};
</script>
