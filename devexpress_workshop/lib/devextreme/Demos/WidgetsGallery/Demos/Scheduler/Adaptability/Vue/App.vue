<template>
  <div>
    <dx-scheduler
      :data-source="dataSource"
      :current-date="currentDate"
      :views="views"
      :height="590"
      :start-day-hour="9"
      :adaptivity-enabled="true"
      :on-content-ready="onContentReady"
      current-view="month"
    >
      <dx-resource
        :data-source="priorities"
        field-expr="priorityId"
        label="Priority"
      />
    </dx-scheduler>
    <dx-speed-dial-action
      :on-click="showPopup"
      icon="plus"
    />
  </div>
</template>
<script>

import DxScheduler, { DxResource } from 'devextreme-vue/scheduler';
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';

import { data, priorities } from './data.js';

export default {
  components: {
    DxScheduler,
    DxResource,
    DxSpeedDialAction
  },
  data() {
    return {
      views: ['week', 'month'],
      currentDate: new Date(2017, 4, 25),
      dataSource: data,
      priorities: priorities,
      scheduler: null
    };
  },
  methods: {
    onContentReady: function(e) {
      this.scheduler = e.component;
    },
    showPopup: function() {
      this.scheduler.showAppointmentPopup();
    }
  }
};
</script>
