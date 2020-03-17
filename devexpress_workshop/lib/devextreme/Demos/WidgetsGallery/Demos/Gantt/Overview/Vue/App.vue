<template>
  <dx-gantt
    :task-list-width="500"
    :height="700"
    scale-type="weeks"
  >

    <dx-tasks :data-source="tasksDataSource"/>
    <dx-dependencies :data-source="dependenciesDataSource"/>
    <dx-resources :data-source="resourcesDataSource"/>
    <dx-resourceAssignments :data-source="resourceAssignmentsDataSource"/>

    <dx-editing :enabled="true"/>

    <dx-column
      :width="300"
      data-field="title"
      caption="Subject"
    />
    <dx-column
      data-field="start"
      caption="Start Date"
    />
    <dx-column
      data-field="end"
      caption="End Date"
    />
  </dx-gantt>
</template>
<script>
import {
  DxGantt,
  DxTasks,
  DxDependencies,
  DxResources,
  DxResourceAssignments,
  DxColumn,
  DxEditing
} from 'devextreme-vue/gantt';

import {
  tasks,
  dependencies,
  resources,
  resourceAssignments
} from './data.js';

export default {
  components: {
    DxGantt,
    DxTasks,
    DxDependencies,
    DxResources,
    DxResourceAssignments,
    DxColumn,
    DxEditing
  },
  data() {
    return {
      tasks,
      dependencies,
      resources,
      resourceAssignments
    };
  },
  computed: {
    tasksDataSource() { return tasks; },
    dependenciesDataSource() { return dependencies; },
    resourcesDataSource() { return resources; },
    resourceAssignmentsDataSource() { return resourceAssignments; }
  }
};
</script>
<style>
  #gantt {
    height: 700px;
  }
</style>
