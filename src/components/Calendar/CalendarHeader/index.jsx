// redux
import { useSelector } from 'react-redux';

export default function CalendarHeader () {
  const state = useSelector(state => state.calendar.data)
  const { weekDaysNames } = state
  return (
    <div className="w-full flex-shrink p-1 gap-1 shadow-md grid grid-cols-7 text-white bg-blue-500" >
      {weekDaysNames.map(weekDay =>
        <h3
          key={weekDay.short}
          className="lg:text-lg font-medium text-center px-2 py-2 text-xs sm:text-sm md:text-base"
        >
          <span className="inline md:hidden">{weekDay.narrow}</span>
          <span className="hidden md:inline lg:hidden">{weekDay.short}</span>
          <span className="hidden lg:inline">{weekDay.wide}</span>
        </h3>
      )}
    </div>
  );
};