export const calendarInitialState = {
  loaded: false,
  currentMonth: 0,
  currentYear: 0,
  data: {
    weekDaysNames: [],
    monthlyGrid: []
  }
}

export const reminderInitialState = {
  show: false,
  activeReminder: '',
  activeDate: '',
  reminders: {}
}