export function createAppointment(e) {
  const scheduler = e.component;

  scheduler.showAppointmentPopup({
    startDate: e.cellData.startDate
  }, true);
}

export function createRecurringAppointment(e) {
  const scheduler = e.component;

  scheduler.showAppointmentPopup({
    startDate: e.cellData.startDate,
    recurrenceRule: 'FREQ=DAILY'
  }, true);
}

export function groupCell(e) {
  const scheduler = e.component;

  if(scheduler.option('groups')) {
    scheduler.option('crossScrollingEnabled', false);
    scheduler.option('groups', undefined);
  } else {
    scheduler.option('crossScrollingEnabled', true);
    scheduler.option('groups', ['roomId']);
  }
}

export function showCurrentDate(e) {
  const scheduler = e.component;

  scheduler.option('currentDate', new Date());
}

export function showAppointment(e) {
  const scheduler = e.component;

  scheduler.showAppointmentPopup(e.appointmentData);
}

export function deleteAppointment(e) {
  const scheduler = e.component;

  scheduler.deleteAppointment(e.appointmentData);
}

export function repeatAppointmentWeekly(e) {
  const scheduler = e.component;

  scheduler.updateAppointment(e.appointmentData, {
    startDate: e.targetedAppointmentData.startDate,
    recurrenceRule: 'FREQ=WEEKLY'
  });
}

export function setResource(e, clickEvent) {
  const scheduler = e.component;

  scheduler.updateAppointment(
    e.appointmentData,
    { roomId: [clickEvent.itemData.id] }
  );
}

export const cellContextMenuItems = [
  { text: 'New Appointment', onItemClick: createAppointment },
  { text: 'New Recurring Appointment', onItemClick: createRecurringAppointment },
  { text: 'Group by Room/Ungroup', beginGroup: true, onItemClick: groupCell },
  { text: 'Go to Today', onItemClick: showCurrentDate }
];

export const appointmentContextMenuItems = [
  { text: 'Open', onItemClick: showAppointment },
  { text: 'Delete', onItemClick: deleteAppointment },
  { text: 'Repeat Weekly', beginGroup: true, onItemClick: repeatAppointmentWeekly },
  { text: 'Set Room', beginGroup: true, disabled: true }
];
