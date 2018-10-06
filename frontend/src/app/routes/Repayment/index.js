import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, withStyles, TextField, Button } from '@material-ui/core';

import { Alert } from 'reactstrap';
import ContainerHeader from 'components/ContainerHeader/index';
import { getLoan, postPayment } from 'actions/loanActions';


const styles = (theme) => ({
  paper: {
    width: '100%',
    padding: theme.spacing.unit * 3
  }
});

class Repayment extends Component {

  state = {
    loanAccount: {},
    fromDate: '',
    toDate: '',
    alertVisible: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let obj = nextProps.loanAccount;
    if (obj !== prevState.loanAccount) {
      return {
        ...prevState,
        loanAccount: obj
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.getLoan();
  }

  onSubmit = (e) => {
    e.preventDefault();
    let { fromDate, toDate } = this.state;
    if (fromDate && toDate) {
      this.props.postPayment({ fromDate, toDate });
      this.setState({ alertVisible: true });
    }
  };

  onChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  onDismiss = () => {
    this.setState({ alertVisible: false });
  };

  renderAlert = (alert) => {
    if (alert) {
      const { alertFor, alertType, alertMsg } = alert;
      if (alertFor === 're_payment') {
        return (
          <Alert
            color={alertType}
            isOpen={this.state.alertVisible}
            toggle={this.onDismiss}
            className="alert__notify__top">
            {alertMsg}
          </Alert>
        );
      }
    }
  };

  render() {
    const { classes, match, alert } = this.props;
    const { loanAccount } = this.state;
    return (
      <div className="app-wrapper">
        {this.renderAlert(alert)}
        <ContainerHeader match={match} title="Repayment" />
        <Paper className={classes.paper}>
          <div className="content-section implementation">
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <th>Loan Account</th>
                  <th>Principal Amount</th>
                  <th>Frequency</th>
                  <th>Loan Term</th>
                </tr>
                <tr>
                  <td>{loanAccount.loanId}</td>
                  <td>{loanAccount.principalAmount}</td>
                  <td>{loanAccount.frequency}</td>
                  <td>{loanAccount.loanTerm}</td>
                </tr>
              </tbody>
            </table>
            <br /><br />

            <form onSubmit={this.onSubmit}>
              <strong>From: </strong>
              <TextField
                type="date"
                value={this.state.fromDate}
                onChange={this.onChange('fromDate')}
                style={{ marginRight: '20px' }}
              />
              <strong>To: </strong>
              <TextField
                type="date"
                value={this.state.toDate}
                onChange={this.onChange('toDate')}
                style={{ marginRight: '20px' }}
              />
              <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary"
              >
                Repay
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    );
  }
}

let styledRepayment = withStyles(styles)(Repayment);

const mapStateToProps = (state) => ({
  loanAccount: state.loan.loanAccount,
  alert: state.notification
});

export default connect(mapStateToProps, { getLoan, postPayment })(styledRepayment);

