// components
import CalendarDay from './CalendarDay';
// redux
import { useSelector } from 'react-redux';

export default function CalendarGrid({ dates }) {
  const monthlyGrid = useSelector(state => state.calendar.data.monthlyGrid);
  return (
    <ol className="w-full flex-grow overflow-y-auto px-1 pt-0 pb-1 bg-gray-200 grid grid-cols-7 auto-rows-fr gap-1">
      {monthlyGrid.map((date) => (
        <CalendarDay key={date.key} date={date} />
      ))}
    </ol>
  );
}
