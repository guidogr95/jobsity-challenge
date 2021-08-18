// assets
import { AiOutlinePlus } from 'react-icons/ai';
// components
import MonthPicker from 'src/components/shared/MonthPicker';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleReminder } from 'src/redux/reducers/reminderReducer';
import { updateMonthlyGrid } from 'src/redux/reducers/calendarReducer';

export default function CalendarPageHeader () {
  const dispatch = useDispatch()
  const { currentMonth, currentYear } = useSelector(state => state.calendar);

  const handleMonthChange = (year, month) => {
    dispatch(updateMonthlyGrid({ year, month }));
  }
  
  return (
    <div className="flex px-8 py-4 flex-row gap-4 flex-nowrap shadow-lg items-center justify-between">
      <div className="w-64">
        <button
          onClick={() => dispatch(toggleReminder())}
          type="button"
          className="uppercase flex flex-row flex-nowrap items-center gap-2 p-3 lg:px-4 lg:py-2 shadow rounded-full lg:rounded text-lg font-medium bg-white hover:bg-gray-200 text-blue-700 hover:text-blue-900 transition-colors duration-150"
        >
          <AiOutlinePlus />
          <span className="hidden lg:inline">New Reminder</span>
        </button>
      </div>
      <div className="flex flex-col" >
        <h3>
          Select a month:
        </h3>
        <MonthPicker
          year={currentYear}
          month={currentMonth}
          onChange={handleMonthChange}
        />
      </div>
      <div className="w-64" />
    </div>
  );
};