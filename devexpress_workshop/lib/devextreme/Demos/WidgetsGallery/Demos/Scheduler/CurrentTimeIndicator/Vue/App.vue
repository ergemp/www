<template>
  <div>
    <dx-scheduler
      :data-source="dataSource"
      :current-date="currentDate"
      :views="views"
      :show-current-time-indicator="showCurrentTimeIndicator"
      :shade-until-current-time="shadeUntilCurrentTime"
      :on-content-ready="onContentReady"
      :on-appointment-click="onAppointmentClick"
      :on-appointment-dbl-click="onAppointmentDblClick"
      :editing="false"
      :show-all-day-panel="false"
      appointment-template="AppointmentTemplateSlot"
      height="600"
      current-view="week"
    >
      <dx-resource
        :data-source="moviesData"
        field-expr="movieId"
      />
      <template #AppointmentTemplateSlot="{ data }">
        <appointment-template :appointment-model="data"/>
      </template>
    </dx-scheduler>
    <div class="options">
      <div class="column">
        <div class="option">
          <div class="label">Current time indicator</div>
          <div class="value">
            <dx-switch
              id="show-indicator"
              :value.sync="showCurrentTimeIndicator"
            />
          </div>
        </div>
        <div class="option">
          <div class="label">Shading until current time</div>
          <div class="value">
            <dx-switch
              id="allow-shading"
              :value.sync="shadeUntilCurrentTime"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="option">
          <div class="label">Update position in</div>
          <div class="value">
            <dx-number-box
              :value.sync="updateInterval"
              :format="'#0 s'"
              :min="1"
              :max="1200"
              :step="10"
              :show-spin-buttons="true"
              width="100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import DxScheduler, { DxResource } from 'devextreme-vue/scheduler';
import { DxSwitch } from 'devextreme-vue/switch';
import { DxNumberBox } from 'devextreme-vue/number-box';

import AppointmentTemplate from './AppointmentTemplate.vue';
import { data, moviesData } from './data.js';

export default {
  components: {
    DxScheduler,
    DxResource,
    DxSwitch,
    DxNumberBox,
    AppointmentTemplate
  },
  data() {
    return {
      views: ['week', 'timelineWeek'],
      currentDate: new Date(),
      showCurrentTimeIndicator: true,
      shadeUntilCurrentTime: true,
      updateInterval: 10,
      dataSource: data,
      moviesData: moviesData,
    };
  },
  methods: {
    onContentReady: function(e) {
      const currentHour = new Date().getHours() - 1;
      e.component.scrollToTime(currentHour, 30, new Date());
    },

    onAppointmentClick: function(e) {
      e.cancel = true;
    },

    onAppointmentDblClick: function(e) {
      e.cancel = true;
    },

    onShowCurrentTimeIndicatorChanged: function(e) {
      this.setState({ showCurrentTimeIndicator: e.value });
    },

    onShadeUntilCurrentTimeChanged: function(e) {
      this.setState({ shadeUntilCurrentTime: e.value });
    },

    onUpdateIntervalChanged: function(args) {
      this.setState({ updateInterval: args.value });
    }
  }
};
</script>

<style scoped>
  .dx-scheduler-appointment {
    color: #000000;
    font-weight: 500;
    background-color: #e4e4e4;
  }

  .dx-scheduler-appointment-recurrence .dx-scheduler-appointment-content {
    padding: 5px 0px 5px 7px;
  }

  .options {
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
  }

  .column {
    width: 40%;
    display: inline-block;
    margin: 15px 3%;
    text-align: left;
    vertical-align: top;
  }

  .option {
    padding: 5px 0;
  }

  .label, .value {
    display: inline-block;
    vertical-align: middle;
  }

  .label {
    width: 180px;
  }

  .value {
    width: 30%;
  }

  .movie img {
    height: 70px;
  }

  .movie-text {
    font-size: 90%;
    white-space: normal;
  }

  #allow-shading, #show-indicator {
    height: 36px;
  }
</style>
