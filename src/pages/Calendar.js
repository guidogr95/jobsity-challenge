import { useEffect } from 'react';
// utils
import { getWeekDaysNames } from 'src/helpers/calendar';
// components
import CalendarBody from 'src/components/Calendar/CalendarBody';
import ReminderWrapper from 'src/components/Reminder/ReminderWrapper'
import CalendarPageHeader from 'src/components/Calendar/CalendarPageHeader'
// redux
import { useDispatch, useSelector } from 'react-redux';
import { updateWeekDaysNames, setLoaded, setCurrentMonthlyGrid } from 'src/redux/reducers/calendarReducer';

function Calendar() {
  const dispatch = useDispatch();
  const loaded = useSelector(state => state.calendar.loaded);

  useEffect(() => {
    function loadWeekDaysNames() {
      const weekDaysNames = getWeekDaysNames();
      dispatch(updateWeekDaysNames(weekDaysNames));
      dispatch(setCurrentMonthlyGrid());
      dispatch(setLoaded(true));
    }
    loadWeekDaysNames();
  //eslint-disable-next-line
  }, [])

  return (
    <div className="overflow-hidden bg-gray-50 text-gray-900 full-screen-h w-screen" >
      <div className="w-full h-full flex flex-col">
        {loaded
         ? <>
          <CalendarPageHeader />
          <CalendarBody />
          <ReminderWrapper/>
         </>
         : 'loading'
        }
      </div>
    </div>
  )
}

export default Calendar;