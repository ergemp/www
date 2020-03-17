<template>
  <dx-scheduler
    :data-source="dataSource"
    :current-date="currentDate"
    :start-day-hour="7"
    :end-day-hour="23"
    :show-all-day-panel="false"
    height="600"
    current-view="workWeek"
  >
    <dx-view
      type="day"
    />
    <dx-view
      :groups="typeGroups"
      type="week"
      date-cell-template="dateCellSlot"
    />
    <dx-view
      :groups="priorityGroups"
      :start-day-hour="9"
      :end-day-hour="18"
      type="workWeek"
      date-cell-template="dateCellSlot"
    />
    <dx-view
      type="month"
    />
    <dx-resource
      :data-source="priorityData"
      :allow-multiple="false"
      field-expr="priorityId"
      label="Priority"
    />
    <dx-resource
      :data-source="typeData"
      :allow-multiple="false"
      field-expr="typeId"
      label="Type"
    />
    <template #dateCellSlot="{ data: dateCell }">
      <date-cell :cell-data="dateCell"/>
    </template>
  </dx-scheduler>
</template>
<script>

import DxScheduler, { DxResource, DxView } from 'devextreme-vue/scheduler';

import DateCell from './DateCell.vue';
import { data, priorityData, typeData } from './data.js';

const currentDate = new Date(2015, 4, 25);

export default {
  components: {
    DxScheduler,
    DxResource,
    DateCell,
    DxView
  },
  data() {
    return {
      currentDate: currentDate,
      dataSource: data,
      priorityData: priorityData,
      typeData: typeData,
      typeGroups: ['typeId'],
      priorityGroups: ['priorityId'],
    };
  },
};
</script>

<style scoped>
  .dx-scheduler-work-space-week .dx-scheduler-header-panel-cell,
  .dx-scheduler-work-space-work-week .dx-scheduler-header-panel-cell {
    text-align: center;
    vertical-align: middle;
  }

  .dx-scheduler-work-space .dx-scheduler-header-panel-cell .name {
    font-size: 13px;
    line-height: 15px
  }

  .dx-scheduler-work-space .dx-scheduler-header-panel-cell .number {
    font-size: 15px;
    line-height: 15px
  }
</style>
