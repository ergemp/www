<template>
  <div>
    <dx-data-grid
      :data-source="tasks"
      :show-borders="true"
      :height="440"
    >
      <dx-row-dragging
        :allow-reordering="true"
        :on-reorder="onReorder"
        :show-drag-icons="showDragIcons"
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
          :data-source="employees"
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
          :data-source="employees"
          value-expr="ID"
          display-expr="FullName"
        />
      </dx-column>
      <dx-column data-field="Subject"/>
    </dx-data-grid>

    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <dx-check-box
          :value.sync="showDragIcons"
          text="Show Drag Icons"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DxDataGrid, DxColumn, DxLookup, DxScrolling, DxRowDragging, DxSorting } from 'devextreme-vue/data-grid';
import { DxCheckBox } from 'devextreme-vue';
import { tasks, employees, statuses } from './data.js';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxScrolling,
    DxRowDragging,
    DxSorting,
    DxCheckBox
  },
  data() {
    return {
      tasks,
      employees,
      statuses,
      showDragIcons: true
    };
  },
  methods: {
    onReorder(e) {
      var visibleRows = e.component.getVisibleRows(),
        toIndex = this.tasks.indexOf(visibleRows[e.toIndex].data),
        fromIndex = this.tasks.indexOf(e.itemData);

      this.tasks.splice(fromIndex, 1);
      this.tasks.splice(toIndex, 0, e.itemData);
    }
  },
};
</script>
<style>
  .options {
      padding: 20px;
      background-color: rgba(191, 191, 191, 0.15);
      margin-top: 20px;
  }

  .caption {
      font-size: 18px;
      font-weight: 500;
  }

  .option {
      width: 24%;
      display: inline-block;
      margin-top: 10px;
  }
</style>
