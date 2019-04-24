import { ADD_ALERT } from '../actions/types';

const INIT_STATE = {
  alertFor: '',
  alertType: '',
  alertMsg: ''
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_ALERT:
      return action.payload;

    default:
      return state;
  }
}
