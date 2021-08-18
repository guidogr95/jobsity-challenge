// initial State
import { reminderInitialState } from 'src/redux/states'

export const reminderReducer = (state = reminderInitialState, action) => {
  switch(action.type){
    case '@reminder/toggle-hide':
      return {
        ...state,
        show: false,
        activeReminder: '',
        activeDate: ''
      }
    case '@reminder/toggle-show':
      return {
        ...state,
        show: true
      }
    case '@reminder/toggle':
      return {
        ...state,
        show: true,
        activeReminder: action?.payload?.reminderId || '',
        activeDate: action?.payload?.dateId || ''
      }
    case '@reminder/set':
      return {
        ...state,
        show: false,
        activeReminder: '',
        activeDate: '',
        reminders: {
          [action.payload.dateId]: {
            ...(state.reminders?.[action.payload.dateId] || {}),
            [action.payload.reminderId]: {
              ...(state.reminders?.[action.payload.dateId]?.[action.payload.reminderId] || {}),
              ...action.payload.data,
              id: action.payload.reminderId
            }
          }
        }
      }
    default:
      return state
  }
}

// actions
export const hideReminderModal = () => {
  return {
    type: '@reminder/toggle-hide'
  }
}
export const showReminderModal = () => {
  return {
    type: '@reminder/toggle-show'
  }
}
export const toggleReminder = (payload) => {
  return {
    type: '@reminder/toggle',
    payload
  }
}
export const setReminder = (payload) => {
  return {
    type: '@reminder/set',
    payload
  }
}