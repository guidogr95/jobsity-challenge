export const selectReminders = ({ dateId, reminders }) => {
  let dayReminders = reminders?.[dateId] || {};
  dayReminders = Object.values(dayReminders).sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));
  return dayReminders;
}