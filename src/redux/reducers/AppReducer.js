import {ACTION_TYPES} from '../ActionTypes';

const initialState = {
  loginRes: '',
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_RES:
      return {...state, loginRes: action.payload};
    default:
      return state;
  }
};
