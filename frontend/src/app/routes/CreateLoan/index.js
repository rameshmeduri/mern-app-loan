import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, withStyles, TextField, Button } from '@material-ui/core';
import { Alert } from 'reactstrap';

import ContainerHeader from '../../../components/ContainerHeader/index';
import { postLoan } from '../../../actions/loanActions';

const styles = (theme) => ({
  paper: {
    width: '100%',
    padding: theme.spacing.unit * 3
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '40px 0'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    fontSize: '14px'
  },
  button: {
    margin: theme.spacing.unit
  }
});

class CreateLoan extends Component {
  state = {
    principalAmount: '',
    loanTerm: '',
    alertVisible: false
  };

  onDismiss = () => {
    this.setState({ alertVisible: false });
  };

  onChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { principalAmount, loanTerm } = this.state;
    if (principalAmount && loanTerm) {
      this.props.postLoan({ principalAmount, loanTerm });
      this.setState({ alertVisible: true });
    }
  };

  renderAlert = (alert) => {
    if (alert) {
      const { alertFor, alertType, alertMsg } = alert;
      if (alertFor === 'create_loan') {
        return (
          <Alert
            color={alertType}
            isOpen={this.state.alertVisible}
            toggle={this.onDismiss}
            className="alert__notify__top"
          >
            {alertMsg}
          </Alert>
        );
      }
    }
  };

  render() {
    const { classes, match, alert } = this.props;
    return (
      <div className="app-wrapper">
        {this.renderAlert(alert)}
        <ContainerHeader match={match} title="Create Loan" />
        <Paper className={classes.paper}>
          <div className="content-section implementation">
            <form className={classes.form} onSubmit={this.onSubmit}>
              <TextField
                label="Principal Amount"
                value={this.state.principalAmount}
                onChange={this.onChange('principalAmount')}
                className={classes.textField}
              />
              <TextField
                label="Loan Term"
                value={this.state.loanTerm}
                onChange={this.onChange('loanTerm')}
                className={classes.textField}
              />
              <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    );
  }
}

let styledCreateLoan = withStyles(styles)(CreateLoan);

const mapStateToProps = (state) => ({
  alert: state.notification
});

export default connect(
  mapStateToProps,
  { postLoan }
)(styledCreateLoan);
