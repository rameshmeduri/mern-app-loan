import express from 'express';
import setupAuthRoutes from './auth';
import setupLoanRoutes from './loan';

function setupRoutes(app) {
  
  // Auth Routes
  const authRouter = express.Router();
  setupAuthRoutes(authRouter);
  app.use('/api/auth', authRouter);

  // Loan Routes
  const loanRouter = express.Router();
  setupLoanRoutes(loanRouter);
  app.use('/api/loan', loanRouter);
  
}

export default setupRoutes;
