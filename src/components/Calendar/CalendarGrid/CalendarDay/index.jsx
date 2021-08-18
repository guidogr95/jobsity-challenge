// components
import CalendarDayReminder from './CalendarDayReminder'
// redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleReminder } from 'src/redux/reducers/reminderReducer';
import { selectReminders } from 'src/redux/selectors/reminder';

import './calendarday.scss'

export default function CalendarDay ({ date }) {
  const dispatch = useDispatch()
  const reminders = useSelector(state => selectReminders({ dateId: date.key, reminders: state.reminder.reminders }))
  return (
    <li
      key={date.key}
      onClick={() => dispatch(toggleReminder({ dateId: date.key }))}
      className={`date-reminder h-auto px-3 py-2 cursor-pointer bg-white text-lg overflow-hidden${!date.isWeekend ? ' font-normal' : ''}${date.isWeekend && !date.trailing ? ' text-blue-600 font-bold' : ''}${date.trailing ? ' text-gray-400' : ''} hover:bg-gray-100`}
    >
      <span className="date-reminder__number" >{date.text}</span>
      <ul>
        {reminders.map((reminder) => (
          <CalendarDayReminder
            key={reminder.id}
            reminder={reminder}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleReminder({ dateId: date.key, reminderId: reminder.id }));
            }}
          />
        ))}
      </ul>
    </li>
  );
};