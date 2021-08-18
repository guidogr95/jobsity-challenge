import { useCallback, useRef } from 'react';
// utils
import useOnClickOutside from 'src/hooks/useOnClickOutside';
import { v4 as uuidv4 } from 'uuid';
import { getTimeIn24h } from 'src/helpers/calendar';
// components
import ReminderHeader from './ReminderHeader';
import ReminderForm from './ReminderForm'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { hideReminderModal, setReminder } from 'src/redux/reducers/reminderReducer';

export default function ReminderModal () {
  const modalRef = useRef(null);
  
  const dispatch = useDispatch();
  const state = useSelector(state => state.reminder);
  const { activeReminder, activeDate, reminders } = state;

  const onClose = useCallback(() => {
    dispatch(hideReminderModal())
  }, [dispatch])
  
  useOnClickOutside(modalRef, onClose);

  const getFormInitialValues = () => {
    const reminder = reminders?.[activeDate]?.[activeReminder]
    return {
      description: reminder?.description || '',
      date: activeDate || '',
      time: reminder?.time || getTimeIn24h(new Date()),
      city: reminder?.city || ''
    }
  }

  const onSubmit = (vals) => {
    dispatch(setReminder({
      data: vals,
      dateId: vals.date,
      reminderId: activeReminder || uuidv4()
    }))
  }

  return (
    <div className="fixed top-0 left-0 flex flex-col lg:py-28 h-full w-full bg-black z-20 bg-opacity-30" >
      <div ref={modalRef} className="z-30 mx-auto w-full lg:max-w-2xl h-auto flex-grow lg:flex-grow-0 bg-white lg:shadow-lg lg:rounded-md" >
        <div className="w-full h-full p-8 flex flex-col gap-8" >
            <ReminderHeader onClose={onClose} >
              <h2 className="capitalize font-medium text-xl text-grey">
                {activeReminder ? 'Edit' : 'New'} Reminder
              </h2>
            </ReminderHeader>
            <ReminderForm
              getFormInitialValues={getFormInitialValues}
              activeReminder={activeReminder}
              onSubmit={onSubmit}
            />
        </div>
      </div>
    </div>
  );
};