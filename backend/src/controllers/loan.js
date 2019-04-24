let loanAccount = {
  loanId: '1538807760166',
  frequency: 'weekly',
  principalAmount: '',
  loanTerm: ''
};

const getLoan = (req, res) => {
  res.json(loanAccount);
};

const createLoan = (req, res) => {
  let { principalAmount, loanTerm } = req.body;
  loanAccount.principalAmount = principalAmount;
  loanAccount.loanTerm = loanTerm + ' Years';
  res.send('OK');
};

const createWeeklyRepayment = (req, res) => {
  res.send('OK');
};

export { getLoan, createLoan, createWeeklyRepayment };
