import {AppStrings} from '../../constants/AppStrings';
import {ACTION_TYPES} from '../ActionTypes';

const initialState = {
  company: '',
  showScanner: false,
  barContent: AppStrings.dark_content,
  guest_user_login: false,
  accessToken: '',
};
export const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.COMPANY:
      return {...state, company: action.payload};
    case ACTION_TYPES.SHOW_SCANNER:
      return {...state, showScanner: action.payload};
    case ACTION_TYPES.STATUS_BAR:
      return {...state, barContent: action.payload};
    case ACTION_TYPES.GUEST_USER_LOGIN:
      return {...state, guest_user_login: action.payload};
    case ACTION_TYPES.ACCESS_TOKEN:
      return {...state, accessToken: action.payload};
    default:
      return state;
  }
};
