import { GET_LOAN } from '../actions/types';

const INIT_STATE = {
  loanAccount: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_LOAN: {
      return {
        ...state,
        loanAccount: action.payload
      };
    }

    default:
      return state;
  }
};
