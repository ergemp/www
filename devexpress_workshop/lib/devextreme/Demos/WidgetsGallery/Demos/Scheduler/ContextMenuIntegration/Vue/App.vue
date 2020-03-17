<template>
  <div>
    <dx-scheduler
      :data-source="dataSource"
      :views="views"
      :current-date="currentDate"
      :start-day-hour="9"
      :first-day-of-week="1"
      :height="600"
      :on-appointment-context-menu="onAppointmentContextMenu"
      :on-cell-context-menu="onCellContextMenu"
      current-view="month"
      recurrence-edit-mode="series"
    >
      <dx-resource
        :data-source="resourcesData"
        field-expr="roomId"
        label="Room"
      />
    </dx-scheduler>
    <dx-context-menu
      :data-source="appointmentContextMenuItems"
      :width="200"
      :target="'.dx-scheduler-appointment'"
      :on-item-click="onAppointmentContextMenuItemClick"
      item-template="itemTemplateSlot"
    >
      <template #itemTemplateSlot="{ data: itemData }">
        <item-template :item-data="itemData"/>
      </template>
    </dx-context-menu>
    <dx-context-menu
      :data-source="cellContextMenuItems"
      :target="'.dx-scheduler-date-table-cell'"
      :on-item-click="onCellContextMenuItemClick"
    />

  </div>
</template>

<script>
import DxScheduler, { DxResource } from 'devextreme-vue/scheduler';
import DxContextMenu from 'devextreme-vue/context-menu';

import ItemTemplate from './ItemTemplate.vue';
import { resourcesData, data } from './data.js';
import { cellContextMenuItems, appointmentContextMenuItems, setResource } from './MenuItems.js';

export default {
  components: {
    DxScheduler,
    DxResource,
    DxContextMenu,
    ItemTemplate
  },
  data() {
    return {
      views: ['day', 'month'],
      currentDate: new Date(2017, 4, 25),
      dataSource: data,
      resourcesData: resourcesData,
      appointmentContextMenuEvent: null,
      cellContextMenuEvent: null,
      cellContextMenuItems: cellContextMenuItems,
      appointmentContextMenuItems: this.getAllAppointmentContextMenuItems(),
    };
  },
  methods: {
    onAppointmentContextMenu(e) {
      this.appointmentContextMenuEvent = e;
    },

    onCellContextMenu(e) {
      this.cellContextMenuEvent = e;
    },

    onAppointmentContextMenuItemClick(e) {
      if (!e.itemData.items && e.itemData.onItemClick) {
        e.itemData.onItemClick(this.appointmentContextMenuEvent, e);
      }
    },

    onCellContextMenuItemClick(e) {
      e.itemData.onItemClick(this.cellContextMenuEvent);
    },

    getAllAppointmentContextMenuItems() {
      resourcesData.map((item) => {
        item.onItemClick = setResource;
      });
      return appointmentContextMenuItems.concat(resourcesData);
    }
  },
};
</script>

<style scoped>
  .dx-menu-item-content span {
    margin-right: 5px;
  }

  .dx-menu-item-has-submenu .dx-icon-spinright {
    position: absolute;
    top: 7px;
    right: 2px;
  }
</style>
