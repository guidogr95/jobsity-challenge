// components
import ReminderModal from './ReminderModal'
// redux
import { useSelector } from 'react-redux';

export default function ReminderWrapper () {
  const show = useSelector(state => state.reminder.show);
  return (
    <>
      {show && <ReminderModal/>}
    </>
  );
};