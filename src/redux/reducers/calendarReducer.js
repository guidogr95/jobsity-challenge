// initial State
import { calendarInitialState } from 'src/redux/states'
// utils
import { getCurrentMonth, getCurrentYear, getMonthlyGrid } from 'src/helpers/calendar'

export const calendarReducer = (state = calendarInitialState, action) => {
  switch(action.type){
    case '@loaded/set-true':
      return {
        ...state,
        loaded: true
      }
    case '@loaded/set-false':
      return {
        ...state,
        loaded: true
      }
    case '@data/update-weekdaysnames':
      return {
        ...state,
        data: {
          ...state.data,
          weekDaysNames: action.payload
        }
      }
    case '@data/set-monthlygrid':
      return {
        ...state,
        currentMonth: action.payload.month,
        currentYear: action.payload.year,
        data: {
          ...state.data,
          monthlyGrid: action.payload.grid
        }
      }
    default:
      return state
  }
}

// @loaded actions
export const setLoaded = (state) => {
  return {
    type: `@loaded/set-${state ? 'true' : 'false'}`
  }
}
// @data actions
export const updateWeekDaysNames = (payload) => {
  return {
    type: '@data/update-weekdaysnames',
    payload
  }
}
export const setCurrentMonthlyGrid = () => {
  const currentYear = getCurrentYear()
  const currentMonth = getCurrentMonth()
  const grid = getMonthlyGrid(currentYear, currentMonth);
  return {
    type: '@data/set-monthlygrid',
    payload: {
      grid,
      month: currentMonth + 1,
      year: currentYear
    }
  }
}
export const updateMonthlyGrid = (payload) => {
  const { year, month } = payload
  const grid = getMonthlyGrid(year, month - 1);
  return {
    type: '@data/set-monthlygrid',
    payload: {
      grid,
      month,
      year
    }
  }
}