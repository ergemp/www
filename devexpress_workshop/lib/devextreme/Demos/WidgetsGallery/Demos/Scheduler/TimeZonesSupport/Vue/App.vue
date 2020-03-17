<template>
  <div>
    <dx-scheduler
      :data-source="dataSource"
      :current-date="currentDate"
      :views="views"
      :height="600"
      :start-day-hour="8"
      :time-zone="timeZone"
      :on-appointment-form-opening="onAppointmentFormOpening"
      current-view="workWeek"
    >
      <dx-resource
        :data-source="locationsData"
        field-expr="startDateTimeZone"
        value-expr="value"
      />
    </dx-scheduler>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Office Location</span>
        <dx-select-box
          :items="locationsData"
          :value.sync="timeZone"
          :on-value-changed="onLocationChanged"
          :width="200"
          display-expr="text"
          value-expr="value"
        />
      </div>
    </div>
  </div>
</template>
<script>

import DxScheduler, { DxResource } from 'devextreme-vue/scheduler';
import DxSelectBox from 'devextreme-vue/select-box';
import DataSource from 'devextreme/data/data_source';

import { data, locations } from './data.js';

export default {
  components: {
    DxScheduler,
    DxResource,
    DxSelectBox,
    DataSource
  },
  data() {
    return {
      views: ['workWeek'],
      currentDate: new Date(2017, 4, 25),
      timeZone: locations[0].value,
      dataSource: new DataSource({ store: data, filter: ['startDateTimeZone', locations[0].value] }),
      locationsData: locations
    };
  },
  methods: {
    onLocationChanged: function(e) {
      this.dataSource.filter(['startDateTimeZone', e.value]);
      this.dataSource.load();
    },
    onAppointmentFormOpening: function(e) {
      e.form.itemOption('startDateTimeZone', { visible: true });
      e.form.itemOption('endDateTimeZone', { visible: true });
    }
  }
};
</script>

<style scoped>
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
    margin-top: 10px;
  }

    .option > span {
      position: relative;
      top: 2px;
      margin-right: 10px;
    }

    .option > .dx-selectbox {
      display: inline-block;
      vertical-align: middle;
    }
</style>
