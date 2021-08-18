export default function CalendarDayReminder ({ reminder, onClick }) {
  return (
    <li
      onClick={onClick}
      title={`${reminder.time} - ${reminder.description}\nClick to Edit.`}
      className="py-px hover:bg-gray-200 text-gray-900 rounded cursor-pointer text-xs font-normal flex flex-row flex-nowrap items-center gap-2"
    >
      <div className="w-2 h-2 rounded-full flex-shrink-0 bg-blue-700" />
      <div className="truncate" >
        {reminder.time} - {reminder.description}
      </div>
    </li>
  );
};