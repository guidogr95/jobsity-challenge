import {
  addDays,
  startOfWeek,
  differenceInCalendarWeeks,
  endOfMonth,
  startOfMonth,
  format,
  getMonth,
  isWeekend,
  getYear
} from 'date-fns';
import locale from 'date-fns/locale/en-US';

const DAYS_IN_WEEK = 7;
export const DATE_FORMAT = 'yyyy-MM-dd';
export const TIME_FORMAT = 'hh:mm';

export const DATE_REGEX = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
export const TIME_REGEX = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

/**
 * Returns short, wide and narrow format for days of the week based on APP_LOCALE
 * Array returns days from Sunday to Monday.
 */
export const getWeekDaysNames = () => {
  const short = [...Array(DAYS_IN_WEEK).keys()].map(i => locale.localize.day(i, { width: 'abbreviated' }));
  const wide = [...Array(DAYS_IN_WEEK).keys()].map(i => locale.localize.day(i, { width: 'wide' }));
  const narrow = [...Array(DAYS_IN_WEEK).keys()].map(i => locale.localize.day(i, { width: 'narrow' }));
  const weekDaysNames = []
  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    weekDaysNames.push({
      narrow: narrow[i],
      wide: wide[i],
      short: short[i]
    });
  }
  return weekDaysNames;
}

/**
 * Returns a grid with the total number of days for a month, including trailing days from prev and next month
 */
export const getMonthlyGrid = (year, month) => {
  // Generate the date from params, then get the firstDay and lastDay in the month
  const weekStartsOn = 1;
  const date = new Date(year, month);
  const firstDay = startOfMonth(date);
  const lastDay = endOfMonth(date);

  // Get the start date for the grid
  const startDate = startOfWeek(date, { weekStartsOn });

  //  Get the differences in weeks from lastDay to firstDay
  //  Add (+1) to get total row we need for the grid to cover all the days in the month
  const gridRows = differenceInCalendarWeeks(lastDay, firstDay, { weekStartsOn }) + 1;
  //  Get the total days that we are going to generate.
  const totalDays = gridRows * DAYS_IN_WEEK;
  // Return grid with information for each day
  const calendar = Array.from({ length: totalDays }).map((_, index) => {
    // Subtract one from index to shift the grid and start on sunday
    const dayDate = addDays(startDate, index - 1);
    return {
      key: format(dayDate, DATE_FORMAT),
      text: format(dayDate, 'dd'),
      trailing: getMonth(dayDate) !== month ? true : false,
      isWeekend: isWeekend(dayDate)
    }
  });
  return calendar;
};

/**
 * Returns current month in number
*/
export const getCurrentMonth = () => getMonth(new Date());
/**
 * Returns current year in number
*/
export const getCurrentYear = () => getYear(new Date());
/**
 * Returns time in 24h format
*/
export const getTimeIn24h = (date) => format(date, 'HH:mm');
/**
 * Returns month in LLLL yyy format
*/
export const getMonthLllYyy = (date) => format(date, 'LLLL yyy', { locale });
/**
 * Returns months names
*/
export const getMonthsNames = () => {
  const months = [];
  for (let i = 0; i < 12; i++) { 
    months.push( locale.localize.month(i, { width: 'abbreviated' }) )
  }
  return months;
}
/**
 * Returns years for range start -> finish
*/
export const getYearsInRange = ({ start = 1, finish }) => {
  if (!finish) {
    return [];
  }
  const innerStart = start < 1 ? 1 : start;
  const years = [];
  for (let i = innerStart; i <= finish; i++) {
    years.push(i);
  }
  return years;
}