import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getTimeIn24h } from 'src/helpers/calendar';
import { reminderInitialState } from 'src/redux/states';
 
import ReminderForm from 'src/components/Reminder/ReminderWrapper/ReminderModal/ReminderForm'

describe('<ReminderForm />', () => {

  const { activeDate, activeReminder, reminders } = reminderInitialState;

  const getFormInitialValues = () => {
    const reminder = reminders?.[activeDate]?.[activeReminder]
    return {
      description: reminder?.description || '',
      date: activeDate || '',
      time: reminder?.time || getTimeIn24h(new Date()),
      city: reminder?.city || ''
    }
  }

  let component;
  const handleSubmit = jest.fn()
  beforeEach(() => {
    component = render(<ReminderForm onSubmit={handleSubmit} getFormInitialValues={getFormInitialValues} />)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the inputs', () => {
    expect(screen.getByRole('textbox', { name: /Reminder note/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Date/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Time/i })).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
  })

  test('should show description validation on blur on input', async () => {
    const longString = 'This string contains more than thirty characters and should produce and error';
    
    // const button = screen.getByRole('button', { name: /confirm/i });
    const input = screen.getByRole('textbox', { name: /Reminder note/i });

    userEvent.type(input, longString);
    fireEvent.blur(input);
  
    await waitFor(() => {
      expect(screen.getByTestId('descriptionError')).toHaveTextContent('Reminder cannot have more than 30 characters.');
    });
  });

  test('should hide description validation on blur on input', async () => {
    const shortString = 'This string is safe';

    const input = screen.getByRole('textbox', { name: /Reminder note/i });

    userEvent.type(input, shortString);
    fireEvent.blur(input);
  
    await waitFor(() => {
      expect(screen.queryByTestId('descriptionError')).not.toBeInTheDocument();
    });
  });

  test('should show date validation on blur on input', async () => {
    const dateString = '';

    const input = screen.getByRole('textbox', { name: /Date/i });

    userEvent.type(input, dateString);
    fireEvent.blur(input);
  
    await waitFor(() => {
      expect(screen.getByTestId('dateError')).toHaveTextContent('Please enter the day you want to get reminded.');
    });
  });

  test('should hide date validation on blur on input', async () => {
    const dateString = '2021-07-04';

    const input = screen.getByRole('textbox', { name: /Date/i });

    userEvent.type(input, dateString);
    fireEvent.blur(input);
  
    await waitFor(() => {
      expect(screen.queryByTestId('dateError')).not.toBeInTheDocument();
    });
  });

  test('submitting the formik values', async () => {
    const description = 'My safe description';
    const dateString = '2021-07-04';
    const timeString = '21:04';

    userEvent.type(screen.getByRole('textbox', { name: /Reminder note/i }), description)
    userEvent.type(screen.getByRole('textbox', { name: /Date/i }), dateString)
    userEvent.type(screen.getByRole('textbox', { name: /Time/i }), timeString)
  
    userEvent.click(screen.getByRole('button', { name: /confirm/i }))
  
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        description,
        date: dateString,
        time: timeString,
        city: ''
      }, expect.anything())
    )
  })
})
