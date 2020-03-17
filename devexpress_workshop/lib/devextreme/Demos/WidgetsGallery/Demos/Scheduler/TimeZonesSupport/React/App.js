import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import SelectBox from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';

import { data, locations } from './data.js';

const currentDate = new Date(2017, 4, 25);

const views = ['workWeek'];

const dataSource = new DataSource({ store: data, filter: ['startDateTimeZone', locations[0].value] });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: locations[0].value
    };
    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.onAppointmentFormOpening = this.onAppointmentFormOpening.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Scheduler
          dataSource={dataSource}
          views={views}
          defaultCurrentView="workWeek"
          defaultCurrentDate={currentDate}
          startDayHour={8}
          height={600}
          timeZone={this.state.timeZone}
          onAppointmentFormOpening={this.onAppointmentFormOpening}
        >
          <Resource
            fieldExpr="startDateTimeZone"
            valueExpr="value"
            dataSource={locations}
          />
        </Scheduler>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Office Location </span>
            <SelectBox
              items={locations}
              width={200}
              defaultValue={locations[0].value}
              displayExpr="text"
              valueExpr="value"
              onValueChanged={this.onLocationChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  onLocationChanged(e) {
    dataSource.filter(['startDateTimeZone', e.value]);
    dataSource.load();
    this.setState({
      timeZone: e.value
    });
  }

  onAppointmentFormOpening(e) {
    e.form.itemOption('startDateTimeZone', { visible: true });
    e.form.itemOption('endDateTimeZone', { visible: true });
  }
}

export default App;
