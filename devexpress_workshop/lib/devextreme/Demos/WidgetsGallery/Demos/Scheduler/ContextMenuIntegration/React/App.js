import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import ContextMenu from 'devextreme-react/context-menu';

import { data, resourcesData } from './data.js';
import { cellContextMenuItems, appointmentContextMenuItems, setResource } from './MenuItems.js';

import { AppointmentMenuTemplate } from './AppointmentTemplate.js';

const currentDate = new Date(2017, 4, 25);
const views = ['day', 'month'];

class App extends React.Component {
  constructor(props) {
    super(props);
    resourcesData.map((item) => {
      item.onItemClick = setResource;
    });

    this.state = {
      appointmentContextMenuEvent: null,
      cellContextMenuEvent: null,
      appointmentContextMenuItems: appointmentContextMenuItems.concat(resourcesData),
    };

    this.onAppointmentContextMenu = this.onAppointmentContextMenu.bind(this);
    this.onAppointmentContextMenuItemClick = this.onAppointmentContextMenuItemClick.bind(this);
    this.onCellContextMenu = this.onCellContextMenu.bind(this);
    this.onCellContextMenuItemClick = this.onCellContextMenuItemClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Scheduler
          dataSource={data}
          views={views}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          firstDayOfWeek={1}
          startDayHour={9}
          recurrenceEditMode="series"
          onAppointmentContextMenu={this.onAppointmentContextMenu}
          onCellContextMenu={this.onCellContextMenu}
          height={600}
        >
          <Resource
            dataSource={resourcesData}
            fieldExpr="roomId"
            label="Room"
          />
        </Scheduler>
        <ContextMenu
          dataSource={this.state.appointmentContextMenuItems}
          width={200}
          target=".dx-scheduler-appointment"
          onItemClick={this.onAppointmentContextMenuItemClick}
          itemRender={AppointmentMenuTemplate}
        />
        <ContextMenu
          dataSource={cellContextMenuItems}
          width={200}
          target=".dx-scheduler-date-table-cell"
          onItemClick={this.onCellContextMenuItemClick}
        />
      </React.Fragment>
    );
  }

  onAppointmentContextMenu(e) {
    this.setState({ appointmentContextMenuEvent: e });
  }

  onAppointmentContextMenuItemClick(e) {
    if (!e.itemData.items && e.itemData.onItemClick) {
      e.itemData.onItemClick(this.state.appointmentContextMenuEvent, e);
    }
  }

  onCellContextMenu(e) {
    this.setState({ cellContextMenuEvent: e });
  }

  onCellContextMenuItemClick(e) {
    e.itemData.onItemClick(this.state.cellContextMenuEvent);
  }
}

export default App;
