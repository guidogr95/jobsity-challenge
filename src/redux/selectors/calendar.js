// utils
import { getMonthLllYyy } from 'src/helpers/calendar';

export const selectMonthFromDateString = (month) => {
  return getMonthLllYyy(new Date(month))
}