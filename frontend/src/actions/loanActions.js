import axios from 'axios';
import { GET_LOAN, ADD_ALERT } from './types';

const getLoan = () => (dispatch) => {
  axios
    .get('/api/loan/getLoan')
    .then((res) => {
      dispatch({
        type: GET_LOAN,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_ALERT,
        payload: {
          alertFor: 're_payment',
          alertType: 'danger',
          alertMsg: 'Error Getting Loan Account Details'
        }
      });
    });
};

const postLoan = (postData) => (dispatch) => {
  axios
    .post('/api/loan/createLoan', postData)
    .then((res) => {
      dispatch({
        type: ADD_ALERT,
        payload: {
          alertFor: 'create_loan',
          alertType: 'success',
          alertMsg: 'Loan Account Created'
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_ALERT,
        payload: {
          alertFor: 'create_loan',
          alertType: 'danger',
          alertMsg: 'Error Creating Loan Account'
        }
      });
    });
};

const postPayment = (postData) => (dispatch) => {
  axios
    .post('/api/loan/createPayment', postData)
    .then((res) => {
      dispatch({
        type: ADD_ALERT,
        payload: {
          alertFor: 're_payment',
          alertType: 'success',
          alertMsg: 'Weekly Repayment Successful'
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_ALERT,
        payload: {
          alertFor: 're_payment',
          alertType: 'danger',
          alertMsg: 'Weekly Repayment Failed'
        }
      });
    });
};

export { getLoan, postLoan, postPayment };
