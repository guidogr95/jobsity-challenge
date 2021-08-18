import * as Yup from 'yup';
// schema configs
import {
  DATE_FORMAT,
  DATE_REGEX,
  TIME_FORMAT,
  TIME_REGEX
} from 'src/helpers/calendar';

export const ReminderSchema = Yup.object().shape({
  description: Yup.string()
    .max(30, 'Reminder cannot have more than 30 characters.')
    .required('Please describe your reminder (max. 30 characters).'),
  date: Yup.string()
    .matches(DATE_REGEX, `Date must be valid (${DATE_FORMAT}).`)
    .required('Please enter the day you want to get reminded.'),
  time: Yup.string()
    .matches(TIME_REGEX, `Time must be valid (${TIME_FORMAT}).`)
    .required('Please enter the time of the day you want to get reminded.')
});