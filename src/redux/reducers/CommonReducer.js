import {ACTION_TYPES} from '../ActionTypes';

const initialState = {
  company: '',
};
export const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.COMPANY:
      return {...state, company: action.payload};
    default:
      return state;
  }
};
