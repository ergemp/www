<template>
  <div>
    <dx-scheduler
      :data-source="dataSource"
      :current-date="currentDate"
      :height="650"
      current-view="month"
    >
      <dx-resource
        :data-source="resourcesData"
        field-expr="roomId"
        label="Room"
      />
      <dx-view
        type="month"
        name="Auto Mode"
        max-appointments-per-cell="auto"
      />
      <dx-view
        type="month"
        name="Unlimited Mode"
        max-appointments-per-cell="unlimited"
      />
      <dx-view
        :max-appointments-per-cell="2"
        type="month"
        name="Numeric Mode"
      />
    </dx-scheduler>
  </div>
</template>

<script>
import DxScheduler, { DxResource, DxView } from 'devextreme-vue/scheduler';

import { resourcesData, data } from './data.js';

export default {
  components: {
    DxScheduler,
    DxResource,
    DxView
  },
  data() {
    return {
      currentDate: new Date(2017, 4, 25),
      dataSource: data,
      resourcesData: resourcesData,
    };
  }
};
</script>
