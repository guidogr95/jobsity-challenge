
// components
import CalendarHeader from 'src/components/Calendar/CalendarHeader';
import CalendarGrid from 'src/components/Calendar/CalendarGrid';

export default function CalendarBody () {
  return (
    <div className="flex-col flex-grow w-full overflow-hidden flex">
      <CalendarHeader />
      <CalendarGrid />
    </div>
  );
};