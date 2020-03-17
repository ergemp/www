<template>
  <dx-data-grid
    :data-source="tasksStore"
    :show-borders="true"
    :height="440"
  >
    <dx-row-dragging
      :allow-reordering="true"
      :on-reorder="onReorder"
    />
    <dx-sorting mode="none"/>
    <dx-scrolling mode="virtual"/>
    <dx-column
      :width="55"
      data-field="ID"
    />
    <dx-column
      :width="150"
      data-field="Owner"
    >
      <dx-lookup
        :data-source="employeesStore"
        value-expr="ID"
        display-expr="FullName"
      />
    </dx-column>
    <dx-column
      :width="150"
      data-field="AssignedEmployee"
      caption="Assignee"
    >
      <dx-lookup
        :data-source="employeesStore"
        value-expr="ID"
        display-expr="FullName"
      />
    </dx-column>
    <dx-column data-field="Subject"/>
  </dx-data-grid>
</template>
<script>
import { DxDataGrid, DxColumn, DxLookup, DxScrolling, DxRowDragging, DxSorting } from 'devextreme-vue/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/RowReordering';

const tasksStore = createStore({
  key: 'ID',
  loadUrl: `${url}/Tasks`,
  updateUrl: `${url}/UpdateTask`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  }
});

const employeesStore = createStore({
  key: 'ID',
  loadUrl: `${url}/Employees`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  }
});

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxScrolling,
    DxRowDragging,
    DxSorting
  },
  data() {
    return {
      tasksStore,
      employeesStore
    };
  },
  methods: {
    onReorder(e) {
      var visibleRows = e.component.getVisibleRows(),
        newOrderIndex = visibleRows[e.toIndex].data.OrderIndex;

      tasksStore.update(e.itemData.ID, { OrderIndex: newOrderIndex }).then(() => {
        e.component.refresh();
      });
    }
  },
};
</script>
