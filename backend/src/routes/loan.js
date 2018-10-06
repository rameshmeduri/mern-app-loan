import passport from 'passport';
import { getLoan, createLoan, createWeeklyRepayment} from '../controllers/loan';

function setupLoanRoutes(router) {

  // GET Loan Account
  router.get(
    '/getLoan',
    passport.authenticate('jwt', { session: false }),
    getLoan
  );

  // POST Loan Account
  router.post(
    '/createLoan',
    passport.authenticate('jwt', { session: false }),
    createLoan
  );

  // POST Weekly Repayment
  router.post(
    '/createPayment',
    passport.authenticate('jwt', { session: false }),
    createWeeklyRepayment
  );
}

export default setupLoanRoutes;
