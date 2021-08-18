import { useRef, useMemo } from 'react';
// components
import MonthBox from './MonthBox';
// utils
import Picker from 'react-month-picker';
import { getMonthsNames, getYearsInRange } from 'src/helpers/calendar';

import 'react-month-picker/scss/month-picker.scss';

export default function MonthPicker ({ year, month, onChange }) {
  const pickAMonth = useRef(null);

  const monthsNames = getMonthsNames();
  const makeText = m => {
    if (m && m.year && m.month) return (monthsNames[m.month-1] + '. ' + m.year)
    return '?'
  }

  const handleClickMonthBox = () => {
    pickAMonth?.current && pickAMonth.current.show();
  }

  const actualYear = new Date().getFullYear();

  const years = useMemo(() => getYearsInRange({ start: 1, finish: actualYear + 1000 }), [actualYear])

  return (
    <Picker
      ref={pickAMonth}
      years={years}
      value={{ year, month }}
      lang={monthsNames}
      onChange={onChange}
      // onDismiss={this.handleAMonthDissmis}
    >
      <MonthBox value={makeText({ year, month })} onClick={handleClickMonthBox} />
    </Picker>
  );
};